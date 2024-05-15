import express from 'express';
const app = express()
const port = 3000

app.use(express.static('public'))

// app.post("/mail", (req, res) => {
//   console.log('mail button clicked')
// })

app.listen(port, () => {
  console.log(`App running @ http://localhost:${port}`);
})