const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },

    club: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    requirements: {
        type: [String]
    },

    location: {
        type: String,
        required: true
    },

    eventDate: {
        type: Date,
        required: true
    },

    type: {
        type: String,
        enum: ["workshop", "social", "competition", "volunteering", "other"],
        required: true
    }
});
