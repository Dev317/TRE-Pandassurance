import mongoose from 'mongoose';

const paymentSchema = new mongoose.Schema({
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
        default: Date.now
    },
    isVerified: {
        type: Boolean,
        default: true
    }
})

const Payment = mongoose.model('Payment', paymentSchema);

export default Payment;