import * as mongoose from "mongoose";

const { MONGO_ID, MONGO_PASSWORD } = process.env;

const MONGO_URL: string = `mongodb://${MONGO_ID}:${MONGO_PASSWORD}@localhost:27017/admin`;

export const connect = () => {
    mongoose.connect(MONGO_URL, { useNewUrlParser: true }, (err: any) => {
        if (err) {
            console.log(err);
        } else {
            console.log("success connected Mongo");
        }
        });
};
