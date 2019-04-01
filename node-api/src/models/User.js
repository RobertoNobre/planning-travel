const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const UserSchema = new mongoose.Schema({
    email: { 
        type: String, 
        required: true, 
        unique: true,
        match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
     },
    name: { type: String, required: true },
    password: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
});

UserSchema.plugin(mongoosePaginate);

mongoose.model("User", UserSchema);