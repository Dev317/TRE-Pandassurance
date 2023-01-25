import mongoose from "mongoose";
import Payment from "../models/payments.js";
import Contract from "../models/contracts.js";
import Policy from "../models/policies.js";

export const createPayment = async (req, res) => {
    const paymentBody = req.body;

    const contractId = paymentBody.contract;
    if (!mongoose.Types.ObjectId.isValid(contractId)) return res.status(404).send('No contract with that ID!');

    const associatedContract = await Contract.findById(contractId);
    const associatedPolicy = await Policy.findById(associatedContract.policy);
    const requiredAmount = associatedPolicy.premiumAmount;


    if (requiredAmount > paymentBody.amount) return res.status(400).send('Insufficient amount paid!');

    const newPayment = new Payment(paymentBody);
    try {
        await newPayment.save();
        res.status(201).json(newPayment);
    } catch (err) {
        res.status(409).json({
            message: err.message,
        })
    }
}

export const getPaymentsByContractId = async (req, res) => {
    const { contractId } = req.params;
    if (!mongoose.Types.ObjectId.isValid(contractId)) return res.status(404).send('No contract with that ID!');
    const payments = await Payment.find({ contract: contractId });
    res.json(payments);

}