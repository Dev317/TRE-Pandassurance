import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema({
    claim: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Claim',
        required: true
    },
    validators: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Validator',
        required: true
    }],
    isVerified: {
        type: Boolean,
        required: true,
        default: false
    }
})

const Event = mongoose.model('Event', eventSchema);
export default Event;
