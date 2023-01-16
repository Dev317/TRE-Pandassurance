import mongoose from "mongoose";
import User from "../models/users.js";

export const createUser = async (req, res) => {
    const userBody = req.body;
    const newUser = new User(userBody);
    try {
        await newUser.save();
        res.status(201).json(newUser);
    } catch (err) {
        res.status(409).json({
            message: err.message,
        })
    }
}

