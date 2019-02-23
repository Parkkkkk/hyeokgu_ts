import * as mongoose from "mongoose";

const { MONGO_ID, MONGO_PASSWORD, NODE_ENV } = process.env;
const MONGO_URL: string = `mongodb://${MONGO_ID}:${MONGO_PASSWORD}@localhost:27017/admin`;

mongoose.connect(MONGO_URL, (err: any) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Successfully connected to mongodb");
    }
});
