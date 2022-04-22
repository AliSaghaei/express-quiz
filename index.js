const express = require("express");
const res = require("express/lib/response");
const app = express();
const port = 3001;

//homepage
app.get("/", (req, res) => {
  res.send("<h1>This is your homepage.</h1>");
});

//Chocolarte Quiz
app.get("/chocolate", (req, res) => {
  const { amount } = req.query;
  res.send(`<h2>you want ${amount} chocolate</h2>`);
});

// Multiply Quiz
app.get("/multiply", (req, res) => {
  const { value1, value2 } = req.query;
  res.send(`<h2>the multiply of your numbers is ${value1 * value2}</h2>`);
});

app.listen(port, () => {
  console.log(`server is running on port: ${port}`);
});
