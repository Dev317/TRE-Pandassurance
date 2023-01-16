import mongoose from "mongoose";
import Contract from "../models/contracts.js";

export const createContract = async (req, res) => {
    const contractBody = req.body;

    const policyId = contractBody.policy;
    const userId = contractBody.user;

    if (!mongoose.Types.ObjectId.isValid(policyId)) return res.status(404).send('No policy with that ID!');
    if (!mongoose.Types.ObjectId.isValid(userId)) return res.status(404).send('No user with that ID!');

    const newContract = new Contract(contractBody);

    try {
        await newContract.save();
        res.status(201).json(newContract);
    } catch (err) {
        res.status(409).json({
            message: err.message,
        })
    }
}

export const readContract = async (req, res) => {
    const { id: _id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that ID!');

    try {
        const currentContract = await Contract.findById(_id);
        res.status(200).json(currentContract);
    } catch (err) {
        res.status(400).json({
            message: "Contract not found!"
        })
    }

}
