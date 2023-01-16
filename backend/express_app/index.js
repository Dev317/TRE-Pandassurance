import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import * as dotenv from "dotenv";
dotenv.config();

import userRoutes from "./routes/users.js";
import institutionRoutes from "./routes/institutions.js";
import validatorRoutes from "./routes/validators.js";
import policyRoutes from "./routes/policies.js";
import contractRoutes from "./routes/contracts.js";
import claimRoutes from "./routes/claims.js";
import eventRoutes from "./routes/events.js";
import payoutRoutes from "./routes/payouts.js";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// Routing
app.use('/user', userRoutes);
app.use('/institution', institutionRoutes);
app.use('/validator', validatorRoutes);
app.use('/policy', policyRoutes);
app.use('/contract', contractRoutes);
app.use('/claim', claimRoutes);
app.use('/event', eventRoutes);
app.use('/payout', payoutRoutes);


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

