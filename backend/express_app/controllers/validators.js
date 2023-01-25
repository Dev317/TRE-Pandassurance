import mongoose from "mongoose";
import Validator from "../models/validators.js";

export const createValidator = async (req, res) => {
    const validatorBody = req.body;

    const userId = validatorBody.user;

    if (!mongoose.Types.ObjectId.isValid(userId)) return res.status(404).send('No user with that ID!');

    const newValidator = new Validator(validatorBody);
    try {
        await newValidator.save();
        res.status(201).json(newValidator);
    } catch (err) {
        res.status(409).json({
            message: err.message,
        })
    }
}

export const getValidators = async (req, res) => {
    try {
        const validatorList = await Validator.find();
        res.status(200).json(validatorList);
    } catch (err) {
        res.status(404).json({
            message: err.message,
        })
    }
}

export const getValidatorById = async (req, res) => {
    const { id: _id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No validator with that ID!');
    const foundValidator = await Validator.findById(_id);
    res.json(foundValidator);
}

export const updateValidator = async (req, res) => {
    const { id: _id } = req.params;
    let updatedValidator = req.body;
    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No validator with that ID!');

    updatedValidator = await Validator.findByIdAndUpdate(_id, { ...updatedValidator, _id }, { new: true} );

    res.json(updatedValidator);
}

export const deleteValidator = async (req, res) => {
    const { id: _id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No validator with that ID!');
    await Validator.findByIdAndRemove(_id);
    res.json({ message: 'Validator deleted!' });
}
