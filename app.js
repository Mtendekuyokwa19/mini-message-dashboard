const express = require("express");
const path = require("node:path");
const app = express();

let messages = [];
class NewMessage {
  constructor(text, user, added) {
    this.text = text;
    this.user = user;
    this.added = added;
    messages.push(this);
  }
}
let helloWorld = new NewMessage("hello", "rita", new Date());

let goodByeMother = new NewMessage("goodByeMother ", "yeezy", new Date());
let crispy = new NewMessage("chamba7", "rita", new Date());
app.set("views", path.join(__dirname, "views"));

app.set("view engine", "ejs");
app.get("/", (req, res) => {
  res.render("index", { messages: messages, title: "home :)" });
});
