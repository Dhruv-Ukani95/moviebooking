const mongoose = require('mongoose');
const AdminSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    password:{
        type: String,
        minLength: 6,
        required: true
    },
    addedMovies: [{
        type:mongoose.Types.ObjectId,
        ref:'movies'
    }]
});

const admin =  mongoose.model('admin', AdminSchema)
module.exports = admin;