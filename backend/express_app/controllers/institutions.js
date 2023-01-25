import mongoose from "mongoose";
import Institution from "../models/institutions.js";

export const createInstitution = async (req, res) => {
    const institutionBody = req.body;
    const newInstitution = new Institution(institutionBody);
    try {
        await newInstitution.save();
        res.status(201).json(newInstitution);
    } catch (err) {
        res.status(409).json({
            message: err.message,
        })
    }
}

export const getInstitutions = async (req, res) => {
    try {
        const institutionList = await Institution.find();
        res.status(200).json(institutionList);
    } catch (err) {
        res.status(404).json({
            message: err.message,
        })
    }
}

export const getInstitutionById = async (req, res) => {
    const { id: _id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No institution with that ID!');
    const foundInstitution = await Institution.findById(_id);
    res.json(foundInstitution);
}

export const updateInstitution = async (req, res) => {
    const { id: _id } = req.params;
    let updatedInstitution = req.body;
    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No user with that ID!');

    updatedInstitution = await Institution.findByIdAndUpdate(_id, { ...updatedInstitution, _id }, { new: true} );

    res.json(updatedInstitution);
}

export const deleteInstitution = async (req, res) => {
    const { id: _id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No institution with that ID!');

    await Institution.findByIdAndRemove(_id);

    res.json({ message: 'Institution deleted!' });
}
