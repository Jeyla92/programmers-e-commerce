const express = require("express");
const router = express.Router();
const Database = require("better-sqlite3");
const db = new Database("db/database.db", { verbose: console.log });

// Route för att hämta produkter baserat på filter
const search = (req, res) => {
  const { q } = req.query;
  console.log(q, ' q');
  
  const sql = `SELECT * FROM products WHERE brand LIKE ? OR price LIKE ? OR color LIKE ?`;
  const rows = db.prepare(sql).all(`%${q}%`, `%${q}%`, `%${q}%`);
    console.log(rows, ' rows');

  return res.send(rows);
};

module.exports = search;