const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const TravelSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    wishes: {
        type: Array,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
});

TravelSchema.plugin(mongoosePaginate);

mongoose.model("Travel", TravelSchema);