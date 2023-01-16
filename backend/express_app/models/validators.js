const mongoose = require('mongoose')

const validatorSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    organisationName: {
        type: String,
        required: true
    },
    publicKey: {
        type: String,
        required: true
    },
    isVerified: {
        type: Boolean,
        required: true,
        default: false
    }
})

module.exports = mongoose.model('Validator', validatorSchema)