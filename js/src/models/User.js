"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = exports.userSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const Todo_1 = require("./Todo");
exports.userSchema = new mongoose_1.default.Schema({
    user_name: {
        type: String,
        required: [true, "user name is required"],
        minlength: [5, , "way too sort name, please enter at least 5 chars"],
    },
    todos: {
        type: [Todo_1.todoSchema]
    }
});
exports.UserModel = mongoose_1.default.model("user", exports.userSchema);
