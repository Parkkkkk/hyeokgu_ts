import * as express from "express";
import { Local } from "./routes";
import { connect } from "./schemas";

const server = express();
server.use(express.urlencoded({ extended: false }));
server.use(express.json());
server.use("/local", Local);
server.set("port", process.env.PORT || 3000);
connect();

server.listen(server.get("port"), () => {
    console.log("connection server");
});
