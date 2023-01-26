import mongoose from 'mongoose';

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
        default: true
    }
})

const Institution = mongoose.model('Institution', institutionSchema);
export default Institution;