const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        min: 6,
        max: 255,
        trim: true
    },
    description: {
        type: String,
        require: true,
    },
    duration: {
        type: Number,
        require: true,
    },
    date: {
        type: Date,
        require: true
    }
});
module.exports = mongoose.model('Event', eventSchema);