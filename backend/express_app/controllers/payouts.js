import mongoose from "mongoose";
import Payout from "../models/payouts.js";

export const createPayout = async (req, res) => {
    const payoutBody = req.body;

    const claimId = payoutBody.claim;

    if (!mongoose.Types.ObjectId.isValid(claimId)) return res.status(404).send('No claim with that ID!');

    const newPayout = new Payout(payoutBody);
    try {
        await newPayout.save();
        res.status(201).json(newPayout);
    } catch (err) {
        res.status(409).json({
            message: err.message,
        })
    }
}
