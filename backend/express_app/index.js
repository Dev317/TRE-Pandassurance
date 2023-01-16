import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import * as dotenv from "dotenv";
dotenv.config();

import userRoutes from "./routes/users.js";



const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// Routing
app.use('/user', userRoutes);


const CONNECTION_URL = process.env.CONNECTION_URL;
const PORT = process.env.PORT || 3000;

mongoose.set('strictQuery', true);

mongoose
    .connect(
        CONNECTION_URL,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    )
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((err) => console.log(err.message));

