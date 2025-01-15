const Database = require("better-sqlite3");
const db = new Database("db/database.db", { verbose: console.log });

// Skapa tabellen om den inte finns
const createTable = `
  CREATE TABLE IF NOT EXISTS products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    brand TEXT,
    model TEXT,
    description TEXT,
    price TEXT,
    color TEXT,
    image TEXT,
    published_date TEXT,
    url_slug TEXT UNIQUE
  );
`;

try {
  db.prepare(createTable).run(); // Kör SQL för att skapa tabellen
  console.log("Table created (if it didn't exist).");
} catch (err) {
  console.error("Error creating table:", err.message);
}

// Stäng databasen när du är klar
db.close();
