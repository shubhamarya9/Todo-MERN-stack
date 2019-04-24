//3.
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//creating a Schema here

const TodoSchema = new Schema({
  action: {
    type: String,
    required: [true, "The Todo text field is required"]
  }
});
const Todo = mongoose.model("todo", TodoSchema);
module.exports = Todo;
