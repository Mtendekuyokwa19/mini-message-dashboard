const { Client } = require("pg");
require("dotenv").config();
const SQL =
  `CREATE TABLE IF NOT EXISTS messages(id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY, username VARCHAR(255),message VARCHAR(255));


INSERT INTO messages (username,message)
VALUES ('Yandhi','Hello')

`;

async function main() {
  console.log(
    "seeding",
  );
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
    connectionTimeoutMillis: 10000,
    ssl: { rejectUnauthorized: false },
    idle_in_transaction_session_timeout: 10000,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
}
main();

const { Pool } = require("pg");

module.exports = new Pool({
  connectionString: process.env.DATABASE_URL,
});
