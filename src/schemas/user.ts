import * as mongoose from "mongoose";

const Schema = mongoose.Schema;

export interface IUser extends mongoose.Document {
    email: string;
    password: string;
}

export const UserSchema = new Schema({
    email : {
        type : String,
        required : true,
    },
    password : {
        type : String,
        required : true,
    },
});

const User = mongoose.model<IUser>("User", UserSchema);
export default User;
