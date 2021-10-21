import mongoose from 'mongoose';

const recipeSchema = mongoose.Schema({
    title: String,
    content: String,
    creator: String,
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type:Date,
        default: new Date()
    },
    
})

const PostRecipe = mongoose.model('PostRecipe', recipeSchema);

export default PostRecipe;