import mongoose from "mongoose";
import Policy from "../models/policies.js";

export const createPolicy = async (req, res) => {
    const policyBody = req.body;

    const institutionId = policyBody.provider;
    const validatorIdArr = policyBody.approvedValidator;

    if (!mongoose.Types.ObjectId.isValid(institutionId)) return res.status(404).send('No institution with that ID!');

    if (validatorIdArr.length <= 0) {
        return res.status(400).send('Missing validators');
    }

    for (const validatorId of validatorIdArr) {
        if (!mongoose.Types.ObjectId.isValid(validatorId)) return res.status(404).send('No validator with that ID!');
    }

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

export const updatePolicy = async (req, res) => {
    const { id: _id } = req.params;
    let updatedPolicy = req.body;


    const institutionId = policyBody.provider;

    if (validatorIdArr.length() >= 0) {
        const validatorIdArr = policyBody.approvedValidator;
        for (const validatorId in validatorIdArr) {
            if (!mongoose.Types.ObjectId.isValid(validatorId)) return res.status(404).send('No validator with that ID!');
        }
    }

    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No policy with that ID!');
    if (!mongoose.Types.ObjectId.isValid(institutionId)) return res.status(404).send('No institution with that ID!');


    updatedPolicy = await Policy.findByIdAndUpdate(_id, { ...updatedPolicy, _id }, { new: true} );
    res.json(updatedPolicy);

}

export const getPolicyId = async (req, res) => {
    const { id: _id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No policy with that ID!');
    const foundPolicy = await Policy.findById(_id);
    res.json(foundPolicy);
}

export const getInstitutionPolicy = async (req, res) => {
    const { institutionId } = req.params;
    if (!mongoose.Types.ObjectId.isValid(institutionId)) return res.status(404).send('No institution with that ID!');
    const policies = await Policy.find({ provider: institutionId });
    res.json(policies);
}

export const deletePolicy = async (req, res) => {
    const { id: _id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No policy with that ID!');
    await Policy.findByIdAndRemove(_id);
    res.json({ message: 'Policy deleted!' });
}
