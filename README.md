# programmers-e-commerce

Assignment repository.
Including html, css, js, express, better-sqlite3

Skapa databasen:

- Kör följande kommando i terminalen:
  node db/utilities/create-db.js
  (databasen behövs inte alltid skapas om den redan existerar, skapas enbart om något har gått fel)

Populera databasen med information:

- Lägg till ett objekt i products-arrayen i populate-db.js. Exempel:
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
- Sedan kör följande kommando i terminalen:
  node db/utilities/populate-db.js
  (detta görs för att automatisera processen och undvika det manuella arbetet med att lägga in data i databasen)


http://localhost:3000/