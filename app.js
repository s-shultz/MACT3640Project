import express from 'express';
import dotenv from 'dotenv';
import * as utils from './utils/utils.js';
import * as db from './utils/database.js';

dotenv.config();

let data = ["Project 1, Project 2", "Project 3"];
let projects = [];

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.static("public"));

app.get("/", async (req, res, next) => {
  await db
    .connect()
    .then(async () => {
      console.log("Connected to the database");
      //query the database for projects
      projects = await db.getAllProjects();
      console.log(projects);
      let featuredRand = Math.floor(Math.random() * projects.length);
      res.render("index.ejs", { featuredProject: projects[featuredRand] });
    })


});

app.get("/projects", (req, res) => {
  console.log("Projects route hit, rendering projects.ejs with projects:", projects);
  res.render("projects.ejs", { projectArray: projects });
});

app.get("/project/:id", (req, res) => {
  let id = req.params.id;
  if (id > data.length) {
    throw new Error("Project does not exist");
  }
  res.render("project.ejs", { projectArray: data, which: id });
});

app.get("/contact", (req, res) => {
  res.render("contact.ejs");
});

app.post("/mail", async (req, res) => {
  await utils
    .sendMessage(
      req.body.sub, req.body.txt
    )
    .then(() => {
      res.send({ result: "Message sent!" });
    })
    .catch((error) => {
      res.send({ result: "failure to send" });
    });
});

app.use(async (err, req, res, next) => {
  console.log(err);
  let msg;
  msg = err.message;
  if (msg != "No project with that ID") {
    msg =
      "There was an internal error. Apologies. We are working on cleaning up the mess.";
  }
  res.render("error.ejs", { msg: msg });
});

app.listen(port, () => {
  console.log(`App running @ http://localhost:${port}`);
})