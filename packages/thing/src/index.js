require("dotenv/config");
const express = require("express");
const { Server } = require("http");
const SocketIO = require("socket.io");
const Socket = require("./socket");
const { logInfo, logError } = require("./log");

const { THING_SERVICE_PORT } = process.env;
const app = express();
const server = new Server(app);
const io = new SocketIO(server);
const socket = new Socket(io);

socket.listen();

server.listen(THING_SERVICE_PORT, err => {
  if (!err) {
    logInfo(`Thing server started on port ${THING_SERVICE_PORT}`);
  }
});
server.on("error", err => {
  logError(`Error in thing server on port ${THING_SERVICE_PORT}`);
  logError(err);
  socket.close();
});
server.on("close", () => {
  logInfo(`Stopped thing server on port ${THING_SERVICE_PORT}`);
  socket.close();
});
process.on("SIGINT", () => {
  server.close();
  socket.close();
});
