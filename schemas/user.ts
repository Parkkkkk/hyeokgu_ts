import * as mongoose from "mongoose";

interface IUser extends mongoose.Document {
    email: string;
    password: string;
}

const UserSchema = new mongoose.Schema({
    email : {
        type : String,
        required : true,
    },
    password : {
        type : String,
        required : true,
    },
});

module.exports = mongoose.model<IUser>("User", UserSchema);
