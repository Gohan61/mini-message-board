#! /usr/bin/env node

const { Client } = require("pg");
require("dotenv").config();

const SQL = `
    CREATE TABLE IF NOT EXISTS messages (
        id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        text VARCHAR(100),
        username VARCHAR(50),
        added DATE
    );

    INSERT INTO messages (text, username, added)
    VALUES
        ('Hello mundo', 'Amando', '2022-06-16'),
        ('Welcome all', 'Manfried', '2023-01-24');
`;

async function main() {
  console.log("Seeding...");
  const client = new Client({
    connectionString: process.argv[2],
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("Done");
}

main();
