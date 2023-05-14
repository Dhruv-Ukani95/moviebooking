const mongoose  = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true,
        minLenght: 6,
    },
    bookings: [{
        type: mongoose.Types.ObjectId,
        ref: 'Booking'
    }]
})
const User = mongoose.model('users', userSchema);
module.exports = User;