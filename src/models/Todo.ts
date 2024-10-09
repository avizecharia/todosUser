import mongoose from "mongoose";




export const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "title is required"],
    minlength: [5, , "way too sort name, please enter at least 5 chars"],
  },
  user_id:{
    type : mongoose.Schema.ObjectId,
    required: [true, "user id is required"],
  }

});




module.exports = {
    todoSchema
};


