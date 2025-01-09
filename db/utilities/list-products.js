const Database = require("better-sqlite3");
const db = new Database("db/database.db", { verbose: console.log }); // Lägg till verbose om du vill ha loggar för SQL-kommandon

const sql = `SELECT * FROM products`;

try {
  // Hämta alla rader från databasen
  const rows = db.prepare(sql).all();

  // Iterera genom resultaten och logga varje produkt
  rows.forEach((row) => {
    console.log(row.name + " " + row.price);
  });
} catch (err) {
  console.error(err.message);
}

// Stäng databasen när du är klar
db.close();
