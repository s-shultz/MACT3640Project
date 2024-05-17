import express from 'express';
import dotenv from 'dotenv';
import * as utils from './utils/utils.js';

dotenv.config();

const app = express();
const port = 3000;

app.use(express.json());

app.use(express.static('public'));

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

app.listen(port, () => {
  console.log(process.env.SENSITIVE_INFO);
  console.log(`App running @ http://localhost:${port}`);
})