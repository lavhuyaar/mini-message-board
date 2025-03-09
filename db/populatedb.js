require("dotenv").config();
const { Client } = require("pg");

const SQL = `
        CREATE TABLE IF NOT EXISTS messages (
        id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY, 
        username VARCHAR(255) NOT NULL,
        text CHAR(1000) NOT NULL,
        added TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );
`;

const main = async () => {
  console.log("loading...");
  const client = new Client({
    connectionString: process.env.RAILWAY_DATABASE_CONNECTION_STRING,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done...");
};

main();
