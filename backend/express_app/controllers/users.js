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

export const getUsers = async (req, res) => {
    try {
        const userList = await User.find();
        res.status(200).json(userList);
    } catch (err) {
        res.status(404).json({
            message: err.message,
        })
    }
}

export const getUserById = async (req, res) => {
    const { id: _id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No user with that ID!');
    const foundUser = await User.findById(_id);
    res.json(foundUser);
}

export const updateUser = async (req, res) => {
    const { id: _id } = req.params;
    let updatedUser = req.body;
    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No user with that ID!');

    updatedUser = await User.findByIdAndUpdate(_id, { ...updatedUser, _id }, { new: true} );

    res.json(updatedUser);
}

export const deleteUser = async (req, res) => {
    const { id: _id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that ID!');
    await User.findByIdAndRemove(_id);
    res.json({ message: 'User deleted!' });
}
