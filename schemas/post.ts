import * as mongoose from "mongoose";

const postSchema = new mongoose.Schema({
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
