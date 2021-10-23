import userAuth from '../models/userAuth.js'

export const getUsers = async (req,res) => {
    try {
        const postUsers = await userAuth.find();
        res.status(200).json(postUsers); // ok
    } catch(error){
        res.status(404).json({ message: error.message }) // not found
    }
}

export const createUser = async (req,res) => {
    console.log('creating a user');
    const post = req.body;
    const newUser = new userAuth(post);
    userAuth.findOne({username: post.username}, function(err, user) {
        if(err){
            console.log(err);
        }
        if(user) {
            console.log("user exists");
        }
        else {
            newUser.save();
            res.status(201).json(newUser) // created
        }
    })
}