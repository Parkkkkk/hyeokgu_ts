"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const server = express();
server.set("port", process.env.PORT || 3000);
server.listen(server.get("port"), () => {
    console.log("connection server");
});
