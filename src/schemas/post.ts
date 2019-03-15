import * as mongoose from "mongoose";

const Schema = mongoose.Schema;

export interface IPost extends mongoose.Document {
    title: string;
    content: string;
}

export const postSchema = new Schema({
    title : {
        type : String,
        required : true,
    },
    content : {
        type : String ,
        required : true,
    },
});

const Post = mongoose.model<IPost>("Post", postSchema);
export default Post;
