import express from "express";

const app = express();
const Port = 3000;

const server = app.listen(Port , "0.0.0.0" , (err: any) => {
    if (err) {
        throw(err);
    }
    console.log(`connection server ${Port}`);
});
