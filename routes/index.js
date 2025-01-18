const express = require("express");
const router = express.Router();
const Database = require("better-sqlite3");
const db = new Database("db/database.db", { verbose: console.log });

/* GET home page. */
router.get("/", function (req, res, next) {
  const sql = `
        SELECT id,
               name,
               brand,
               model,
               description,
               price,
               color,
               image,
               published_date,
               url_slug
        FROM products LIMIT 9 
    `;

  try {
    const rows = db.prepare(sql).all();
    res.render("index", { title: "Programmers", products: rows });
  } catch (err) {
    next(err);
  }
});

router.get("/details/:id", function (req, res, next) {
  const sql = `
        SELECT id,
               name,
               brand,
               model,
               description,
               price,
               color,
               image,
               published_date,
               url_slug
        FROM products
        WHERE id = ?
    `;

  try {
    const product = db.prepare(sql).get(req.params.id);
    if (product) {
      res.render("details", { title: product.name, product });
    } else {
      res.status(404).send("Product not found");
    }
  } catch (err) {
    next(err);
  }
});

module.exports = router;
