const express = require("express");
const cors = require("cors");
const app = express();
const port = 8080;

const todos = [
  {
    id: 1,
    title: "쿠키 굽기",
    status: "todo",
  },
  {
    id: 2,
    title: "앞구르기",
    status: "todo",
  },
  {
    id: 3,
    title: "번지점프",
    status: "todo",
  },
];

app.use(cors());
app.options("*", cors());

app.get("/", (req, res) => res.send("Hello World!"));
app.get("/todo", (req, res) => res.json(todos));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
