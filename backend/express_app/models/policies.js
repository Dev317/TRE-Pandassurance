import mongoose from 'mongoose';

const policySchema = new mongoose.Schema({
    provider: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Institution'
    },
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    term: {
        type: String,
        required: true
    },
    premiumAmount: {
        type: Number,
        required: true
    },
    premiumFrequency: {
        type: String,
        required: true
    },
    approvedValidator: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Validator'
    }],
    signSetting: {
        type: String,
        required: true
    },
    payout: {
        type: String,
        required: true
    },
    contractAddress: {
        type: String,
        required: true
    },
    isVerified: {
        type: Boolean,
        required: true,
        default: false
    }
})

const Policy = mongoose.model('Policy', policySchema);
export default Policy;
