"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
// const { connectToMongo } = require("./config/dbConfig");
// const { specs, swaggerUi } = require('./config/swagger');
const app = (0, express_1.default)();
dotenv_1.default.config();
// connectToMongo()
const port = process.env.PORT || 1415;
app.use(express_1.default.json());
// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
// app.use("/user");
// app.use("/greenEye", require("./routers/greenEyeRouter"));
app.listen(port, () => console.log("server up and runing on port " + port));
