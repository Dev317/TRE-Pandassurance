import mongoose from "mongoose";
import Event from "../models/events.js";

export const createEvent = async (req, res) => {
    const eventBody = req.body;

    const claimId = eventBody.claim;
    const validatorId = eventBody.validators;

    if (!mongoose.Types.ObjectId.isValid(claimId)) return res.status(404).send('No claim with that ID!');
    if (!mongoose.Types.ObjectId.isValid(validatorId)) return res.status(404).send('No validator with that ID!');

    const newEvent = new Event(eventBody);
    try {
        await newEvent.save();
        res.status(201).json(newEvent);
    } catch (err) {
        res.status(409).json({
            message: err.message,
        })
    }
}
