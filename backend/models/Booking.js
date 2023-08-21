const mongoose = require ('mongoose');
const bookingSchema = new mongoose.Schema({

    movie: {
        type:mongoose.Types.ObjectId,
        ref:"movies",
        required: true
    },
    date: {
        type: Date,  
        required: true
    },
    seatNumber: {
        type: Number,
        required: true
    },
    user: {
        type:mongoose.Types.ObjectId,
        ref:"user",
        required: true
    }
})

const Booking = mongoose.model('booking', bookingSchema);
module.exports = Booking;