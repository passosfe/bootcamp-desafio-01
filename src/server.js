const express = require("express");

const server = express();

server.use(express.json());

const projects = [];
let reqs_qtd = 0;

server.use((req, res, next) => {
  reqs_qtd++;
  console.log(`QTD REQS: ${reqs_qtd}`);

  return next();
});

function checkIdAlreadyExists(req, res, next) {
  const { id } = req.body;
  const exists = projects.find((item) => item.id == id);

  if (exists) {
    return res.status(400).json({ error: "Project ID already exists" });
  }

  return next();
}

function checkIdIsValid(req, res, next) {
  const { id } = req.params;
  const exists = projects.find((item) => item.id == id);

  if (!exists) {
    return res.status(400).json({ error: "Project not found" });
  }

  req.index = projects.findIndex((item) => item.id == id);

  return next();
}

server.get("/projects", (req, res) => {
  return res.json(projects);
});

server.post("/projects", checkIdAlreadyExists, (req, res) => {
  const { id, title } = req.body;
  projects.push({
    id,
    title,
    tasks: []
  });

  return res.json(projects);
});

server.post("/projects/:id/tasks", checkIdIsValid, (req, res) => {
  const { index } = req;
  const { title } = req.body;
  projects[index].tasks.push(title);

  return res.json(projects);
});

server.put("/projects/:id", checkIdIsValid, (req, res) => {
  const { index } = req;
  const { title } = req.body;
  projects[index].title = title;

  return res.json(projects);
});

server.delete("/projects/:id", checkIdIsValid, (req, res) => {
  const { index } = req;
  projects.splice(index, 1);

  return res.json(projects);
});

server.listen(3000);
