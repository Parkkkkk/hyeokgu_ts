import * as express from "express";

const server = express();

server.set("port", process.env.PORT || 3000);

server.listen(server.get("port"), () => {
    console.log("connection server");
});
