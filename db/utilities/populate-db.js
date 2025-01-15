const Database = require("better-sqlite3");
const db = new Database("db/database.db", { verbose: console.log });

const products = [
  {
    name: "Macbook Pro",
    brand: "Apple",
    model: "Pro",
    description: "The Macbook Pro är en kraftfull laptop.",
    price: "18500 :-",
    color: "Svart",
    image: "/images/img/macbook2.jpg",
    published_date: "2025-01-09",
    url_slug: "macbook-pro",
  },
];

const insert = db.prepare(
  `INSERT INTO products (name, brand, model, description, price, color, image, published_date, url_slug) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`
);

products.forEach((product) => {
  const {
    name,
    brand,
    model,
    description,
    price,
    color,
    image,
    published_date,
    url_slug,
  } = product;

  // Använd den synkrona versionen av run
  try {
    insert.run(
      name,
      brand,
      model,
      description,
      price,
      color,
      image,
      published_date,
      url_slug
    );
    console.log(`Inserted ${name} into products table`);
  } catch (err) {
    console.error(err.message);
  }
});

db.close();
