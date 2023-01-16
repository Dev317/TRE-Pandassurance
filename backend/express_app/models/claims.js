import mongoose from 'mongoose';

const claimSchema = new mongoose.Schema({
    contract: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Contract',
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    event: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Event'
    },
    claimAmount: {
        type: Number,
        required: true
    },
    status: {
        type: Boolean,
        required: true,
        default: false
    },
    isVerified: {
        type: Boolean,
        required: true,
        default: false
    }
})

const Claim = mongoose.model('Claim', claimSchema);
export default Claim;