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
