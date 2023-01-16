import mongoose from "mongoose";
import Claim from "../models/claims.js";

export const createClaim = async (req, res) => {
    const claimBody = req.body;

    const contractId = claimBody.contract;
    const userId = claimBody.user;

    if (!mongoose.Types.ObjectId.isValid(contractId)) return res.status(404).send('No contract with that ID!');
    if (!mongoose.Types.ObjectId.isValid(userId)) return res.status(404).send('No user with that ID!');

    const newClaim = new Claim(claimBody);
    try {
        await newClaim.save();
        res.status(201).json(newClaim);
    } catch (err) {
        res.status(409).json({
            message: err.message,
        })
    }
}
