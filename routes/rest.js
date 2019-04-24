// 2.
const express = require("express");
const router = express.Router();
const Todo = require("../models/todo");
router.get("/todo", (req, res) => {
  Todo.find({}, "action").then(data => res.json(data));
});
router.post("/todo", (req, res) => {
  if (req.body.action) {
    Todo.create(req.body).then(data => res.json(data));
  } else {
    res.json({ error: "Empty Field" });
  }
});
router.delete("/todo/:id", (req, res) => {
  Todo.findOneAndDelete({
    _id: req.params.id
  }).then(data => res.json(data));
});
module.exports = router;
