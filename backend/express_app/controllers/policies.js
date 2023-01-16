import mongoose from "mongoose";
import Policy from "../models/policies.js";

export const createPolicy = async (req, res) => {
    const policyBody = req.body;

    const institutionId = policyBody.provider;
    const validatorId = policyBody.approvedValidator;

    if (!mongoose.Types.ObjectId.isValid(institutionId)) return res.status(404).send('No institution with that ID!');
    if (!mongoose.Types.ObjectId.isValid(validatorId)) return res.status(404).send('No validator with that ID!');

    const newPolicy = new Policy(policyBody);
    try {
        await newPolicy.save();
        res.status(201).json(newPolicy);
    } catch (err) {
        res.status(409).json({
            message: err.message,
        })
    }
}
