const db = require("../db/queries.js");
async function getallmessages() {
  let allmessages = await db.allmessages();
  console.log(allmessages);
  return allmessages;
}
async function addnewMessages(req, res) {
  await db.newMessage(req.body.messageUser, req.body.messageText);
  console.log("added a message");
}
module.exports = {
  getallmessages,
  addnewMessages,
};
