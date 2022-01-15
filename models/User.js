const mongooes = require('mongoose');

const Schema = mongooes.Schema;

const UserSchema = new Schema({
    handle: {
        type: String,
        required: true
    },
    email: {
        type: email,
        required: true,
    },
    password: {
        type: String,
        required: true
    }
},
    {
        timestamps:true
    }
)

const User = mongooes.model('User', UserSchema);

module.exports = User;