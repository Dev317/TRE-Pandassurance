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
