const mongoose = require('mongoose')

const payoutSchema = new mongoose.Schema({
    claim: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Claim',
        required: true
    },
    payoutAmount: {
        type: Number,
        required: true
    },
    isVerified: {
        type: Boolean,
        required: true,
        default: false
    }
})

module.exports = mongoose.model('Payout', payoutSchema)