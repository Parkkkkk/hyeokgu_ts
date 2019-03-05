import * as express from "express";
import connect from "./schemas";

const server = express();
connect();

server.set("port", process.env.PORT || 3000);

server.listen(server.get("port"), () => {
    console.log("connection server");
});
