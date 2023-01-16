import mongoose from 'mongoose';

const paymentSchema = new mongoose.Schema({
    client: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    contract: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Contract',
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    timestamp: {
        type: Date,
        required: true,
        default: Date.now
    },
    isVerified: {
        type: Boolean,
        required: true,
        default: false
    }
})

const Payment = mongoose.model('Payment', paymentSchema);

export default Payment;