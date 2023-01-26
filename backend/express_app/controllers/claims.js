import mongoose from "mongoose";
import Claim from "../models/claims.js";

export const createClaim = async (req, res) => {
    const claimBody = req.body;
    const contractId = claimBody.contract;

    if (!mongoose.Types.ObjectId.isValid(contractId)) return res.status(404).send('No contract with that ID!');

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

export const getClaimByContractId = async (req, res) => {
    const { contractId } = req.params;
    if (!mongoose.Types.ObjectId.isValid(contractId)) return res.status(404).send('No contract with that ID!');

    const claims = await Claim.find({ contract: contractId });
    res.json(claims);
}

export const updateClaim = async (req, res) => {
    const { id: _id } = req.params;
    let updatedClaim = req.body;

    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No claim with that ID!');

    updatedClaim = await Claim.findByIdAndUpdate(_id, { ...updatedClaim, _id }, { new: true} );
    res.json(updatedClaim);
}

export const deleteClaim = async (req, res) => {
    const { id: _id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No claim with that ID!');
    await Claim.findByIdAndRemove(_id);
    res.json({ message: 'Claim deleted!' });
}
