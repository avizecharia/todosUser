import exp,{Express} from 'express'
import dot from 'dotenv'

// const { connectToMongo } = require("./config/dbConfig");
// const { specs, swaggerUi } = require('./config/swagger');

const app:Express = exp();
dot.config();

// connectToMongo()

const port:string | number = process.env.PORT || 1415;


app.use(exp.json());

// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

// app.use("/user");
// app.use("/greenEye", require("./routers/greenEyeRouter"));

app.listen(port, () => console.log("server up and runing on port " + port));
