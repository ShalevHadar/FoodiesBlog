import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    nick: String,
    username: String,
    password: String,
    createdAt: {
        type:Date,
        default: new Date()
    },
    
})

const userAuth = mongoose.model('User', userSchema);

export default userAuth;