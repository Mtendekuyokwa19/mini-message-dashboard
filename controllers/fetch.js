const db = require("../db/queries.js");
async function getallmessages(req, res) {
  let allmessages = await db.allmessages();
  return allmessages;
}

async function newMessages(req, res) {
  await db.newMessage(req.body.messageText, req.body.messageUser);
}
