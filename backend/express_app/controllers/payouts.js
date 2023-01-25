import mongoose from "mongoose";
import Payout from "../models/payouts.js";
import Claim from "../models/claims.js";

export const createPayout = async (req, res) => {
    const payoutBody = req.body;

    const claimId = payoutBody.claim;

    if (!mongoose.Types.ObjectId.isValid(claimId)) return res.status(404).send('No claim with that ID!');

    const foundClaim = await Claim.findById(claimId);
    const claimAmount = foundClaim.claimAmount;
    payoutBody.payoutAmount = claimAmount;

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

export const getPayoutsByContractId = async (req, res) => {
    const { contractId } = req.params;
    if (!mongoose.Types.ObjectId.isValid(contractId)) return res.status(404).send('No contract with that ID!');
    const payments = await Payout.find({ contract: contractId });
    res.json(payments);

}
