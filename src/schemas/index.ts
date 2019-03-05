import * as mongoose from "mongoose";

const MONGO_URL = `mongodb://localhost:27017/admin`;

const connect = () => {
    mongoose.connect(MONGO_URL, { useNewUrlParser: true }, (err: any) => {
        if (err) {
            console.log(err);
        } else {
            console.log("success connected Mongo");
        }
        });
};

export default connect;
