const mongoose = require('mongoose')

// contact schema
const contactSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },

},
    {
        timestamps: true,
    }
)
const contactModel = mongoose.model('contact', contactSchema)
module.exports = contactModel;