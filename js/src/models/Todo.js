"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.todoSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.todoSchema = new mongoose_1.default.Schema({
    title: {
        type: String,
        required: [true, "title is required"],
        minlength: [5, , "way too sort name, please enter at least 5 chars"],
    },
    user_id: {
        type: mongoose_1.default.Schema.ObjectId,
        required: [true, "user id is required"],
    }
});
module.exports = {
    todoSchema: exports.todoSchema
};
