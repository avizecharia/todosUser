import mongoose from "mongoose";
import { todoSchema } from "./Todo";




export const userSchema = new mongoose.Schema({
  user_name: {
    type: String,
    required: [true, "user name is required"],
    minlength: [5, , "way too sort name, please enter at least 5 chars"],
  },
  todos:{
    type : [todoSchema]
  }

});

export const UserModel  = mongoose.model("user", userSchema);




