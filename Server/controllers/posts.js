import PostRecipe from "../models/postRecipe.js";

export const getPosts = async (req,res) => {
    try {
        const postRecpipes = await PostRecipe.find();
        res.status(200).json(postRecpipes); // ok
    } catch(error){
        res.status(404).json({ message: error.message }) // not found
    }
}

export const createPost = async (req,res) => {
    const post = req.body;
    const newPost = new PostRecipe(post);
    try {
        await newPost.save();
        res.status(201).json(newPost) // created
    } catch (error) {
        res.status(409).json({message: error.message}) // conflict
    }
}