const mongoose = require('mongoose')

const institutionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    adminEmail: {
        type: String,
        required: true
    },
    supportEmail: {
        type: String,
        required: true
    },
    isVerified: {
        type: Boolean,
        required: true,
        default: false
    }
})

module.exports = mongoose.model('Institution', institutionSchema)