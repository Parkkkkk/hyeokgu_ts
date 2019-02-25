import * as mongoose from "mongoose";

export interface IPost extends mongoose.Document {
    title: string;
    content: string;
}

export const postSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true,
    },
    content : {
        type : String ,
        required : true,
    },
});

const Post = mongoose.model("Post", postSchema);
export default Post;
