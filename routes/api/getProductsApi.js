const express = require("express");
const router = express.Router();
const Database = require("better-sqlite3");
const db = new Database("db/database.db", { verbose: console.log });

router.get("/products", function (req, res, next) {
  try {
    const sql = `SELECT * FROM products`;
    const stmt = db.prepare(sql);
    const rows = stmt.all();
    res.json(rows);
  } catch (err) {
    console.error("Database query error:", err.message);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
