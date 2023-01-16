import mongoose from 'mongoose';

const contractSchema = new mongoose.Schema({
    policy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Policy',
        required: true
    },
    user: {
        type: mongoose.mongo.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    validity: {
        type: Boolean,
        required: true,
        default: false
    },
    dateStart: {
        type: Date,
        required: true,
        default: Date.now
    }
})

const Contract = mongoose.model('Contract', contractSchema);
export default Contract;
