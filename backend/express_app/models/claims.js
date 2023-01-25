import mongoose from 'mongoose';

const claimSchema = new mongoose.Schema({
    contract: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Contract',
        required: true
    },
    claimAmount: {
        type: Number,
        required: true
    },
    status: {
        type: Boolean,
        default: false
    },
    isVerified: {
        type: Boolean,
        default: false
    }
})

const Claim = mongoose.model('Claim', claimSchema);
export default Claim;