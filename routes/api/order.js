const express = require("express");
const router = express.Router();
const Database = require("better-sqlite3");
const db = new Database("db/database.db", { verbose: console.log });

router.use(express.json());

router.post("/add-to-cart", (req, res) => {
  const { productId, quantity } = req.body;
  const product = db
    .prepare("SELECT * FROM products WHERE id = ?")
    .get(productId);
  if (product) {
    const totalPrice = (parseFloat(product.price) * quantity).toFixed(2);
    db.prepare(
      "INSERT INTO orders (product_id, quantity, total_price, order_date) VALUES (?, ?, ?, ?)"
    ).run(productId, quantity, totalPrice, new Date().toISOString());
    res.json({ success: true });
  } else {
    res.json({ success: false, message: "Product not found" });
  }
});

router.delete("/remove-from-cart", (req, res) => {
  const { productId } = req.body;
  const result = db
    .prepare("DELETE FROM orders WHERE product_id = ?")
    .run(productId);
  if (result.changes > 0) {
    res.json({ success: true });
  } else {
    res.json({ success: false, message: "Failed to remove product" });
  }
});

router.get("/get-cart", (req, res) => {
  const cart = db
    .prepare(
      `
                SELECT p.name, p.price, p.image, o.quantity, o.total_price, o.product_id
                FROM orders o
                         JOIN products p ON o.product_id = p.id
            `
    )
    .all();
  res.json(cart);
});

module.exports = router;
