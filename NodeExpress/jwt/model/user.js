const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        min:6,
        max:30,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        min: 6,
      max:50,
    },
    password: {
        type: String,
        required: true,
        min:6,
        max:255
    },
    date:{
        type: String,
        default:Date.now,
    }
})

// mongoose.model(<table-name>,<db-schema>)
module.exports = mongoose.model("Users", userSchema);
