const pool = require("./pool.js");
async function newMessage(message, username) {
  await pool.query("INSERT INTO messages (message,username) VALUES($1,$2)", [
    message,
    username,
  ]);
}
async function allmessages() {
  let people = await pool.query("SELECT * FROM messages");
  return people;
}
module.exports = {
  newMessage,
  allmessages,
};
