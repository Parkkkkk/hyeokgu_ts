import * as mongoose from "mongoose";

const { MONGO_ID, MONGO_PASSWORD, NODE_ENV } = process.env;
const MONGO_URL: string = `mongodb://${MONGO_ID}:${MONGO_PASSWORD}@localhost:27017/admin`;

const connect = () => {
    mongoose.connect(MONGO_URL, { dbName : "hyeokgu"}, (err: any) => {
        if (err) {
            console.log(err);
        } else {
            console.log("success connected Mongo");
        }
        });
};
connect();

mongoose.connection.on("error", (error) => {
    console.log(error);
});

mongoose.connection.on("disconnected", () => {
    console.log("disconnected");
    connect();
});
