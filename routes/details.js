const express = require("express");
const router = express.Router();
const Database = require("better-sqlite3");
const db = new Database("db/database.db", { verbose: console.log });

/* GET home page. */
router.get("/", function (req, res, next) {
  // Fetch image paths from the database
  const rows = db.prepare("SELECT imagePath FROM images").all();
  const dbImages = rows.map((row) => row.imagePath);

  // Static image paths
  const staticImages = [
    "/images/customer1.jpg",
    "/images/customer2.jpg",
    "/images/customer3.jpg",
    "/images/customer4.jpg",
    "/images/acer1.jpg",
    "/images/acer2.jpg",
    "/images/macbook4.jpg",
    "/images/asus1.jpg",
    "/images/asus2.jpg",
    "/images/hp2.jpg",
    "/images/dell3.jpg",
    "/images/dell1.jpg",
    "/images/macbook3.jpg",
  ];

  const allImages = [...staticImages, ...dbImages];

  res.render("details", { title: "Programmers", images: allImages });
});

router.get("/details/:id", (req, res) => {
  const productId = req.params.id;

  const sqlProduct = `
    SELECT * 
    FROM products 
    WHERE id = ?
  `;
  const product = db.prepare(sqlProduct).get(productId);

  if (product) {
    res.render("details", { title: "Programmers", product });
  } else {
    res.status(404).send("Product not found");
  }
});

module.exports = router;
