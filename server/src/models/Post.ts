import mongoose from "mongoose";
const Schema = mongoose.Schema

const PostSchema = new Schema({
    title: { type: String },
    snippet: { type: String },
    content: { type: String }
})

export default mongoose.model('post', PostSchema)