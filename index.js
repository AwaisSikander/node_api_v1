const express = require("express");
const EventEmitter = require("events");
const event = new EventEmitter();

let count = 0;
event.on("countApi", () => {
  console.log("Event Called", count++);
});

const app = express();

app.get("/", (req, res) => {
  res.send("Checking Api is  Working");
  event.emit("countApi");
});

app.listen(5000);
