const express = require("express");
const router = express.Router();
const Database = require("better-sqlite3");
const db = new Database("db/database.db", { verbose: console.log });

router.post("/filter", (req, res) => {
  const { brand, price, color } = req.body;

  console.log("Received filter criteria:", { brand, price, color });

  let query = "SELECT * FROM products WHERE 1=1";
  const params = [];

  // Lägg till filtreringskriterier dynamiskt
  if (brand && brand.length > 0) {
    query += ` AND brand IN (${brand.map(() => "?").join(",")})`;
    params.push(...brand);
  }
  if (price) {
    if (price === "low") query += " AND price < 10000";
    else if (price === "mid") query += " AND price BETWEEN 10000 AND 20000";
    else if (price === "high") query += " AND price > 20000";
  }
  if (color && color.length > 0) {
    query += ` AND color IN (${color.map(() => "?").join(",")})`;
    params.push(...color);
  }

  console.log("Constructed SQL query:", query);
  console.log("Query parameters:", params);

  try {
    const stmt = db.prepare(query);
    const products = stmt.all(...params);
    res.json(products);
  } catch (err) {
    console.error("Error executing query:", err.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
