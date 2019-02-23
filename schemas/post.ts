import * as mongoose from "mongoose";

interface IPost extends mongoose.Document {
    title: string;
    content: string;
}

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

module.exports = mongoose.model<IPost>("Post", postSchema);
