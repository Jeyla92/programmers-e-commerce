const Database = require("better-sqlite3");
const db = new Database("db/database.db", { verbose: console.log });

const products = [
  {
    name: "Macbook Pro",
    brand: "Apple",
    model: "Pro",
    description:
      "Macbook Pro är en kraftfull laptop med exceptionell prestanda, perfekt för programmering, mjukvaruutveckling och hantering av komplexa projekt med flera kodfiler och tunga utvecklingsverktyg.",
    price: "18500 :-",
    color: "Svart",
    image: "/images/macbook1.jpg",
    published_date: "2025-01-09",
    url_slug: "macbook-pro",
  },
  {
    name: "Macbook Air",
    brand: "Apple",
    model: "Air",
    description:
      "Macbook Air är lätt och smidig, men trots sin kompakta storlek erbjuder den tillräcklig prestanda för programmering och utveckling av enklare applikationer, vilket gör den idealisk för nybörjare och lättare projekt.",
    price: "14500 :-",
    color: "Silver",
    image: "/images/macbook2.jpg",
    published_date: "2025-01-12",
    url_slug: "macbook-air",
  },
  {
    name: 'Macbook Pro 14"',
    brand: "Apple",
    model: "Pro 14",
    description:
      "Med en balanserad kombination av hög prestanda och portabilitet är Macbook Pro 14 ett utmärkt val för programmerare som behöver kraftfulla processorer för att köra tunga utvecklingsmiljöer och hantera flera applikationer samtidigt.",
    price: "20500 :-",
    color: "Rymdgrå",
    image: "/images/macbook3.jpg",
    published_date: "2025-01-07",
    url_slug: "macbook-pro-14",
  },
  {
    name: 'Macbook Pro 16"',
    brand: "Apple",
    model: "Pro 16",
    description:
      "Macbook Pro 16 är en premium-laptop designad för kreatörer och utvecklare som arbetar med komplexa programvaruprojekt, inklusive databasprogrammering och utveckling av tunga applikationer med flera samtidiga processer.",
    price: "25500 :-",
    color: "Silver",
    image: "/images/macbook4.jpg",
    published_date: "2025-01-10",
    url_slug: "macbook-pro-16",
  },
  {
    name: "Dell XPS 13",
    brand: "Dell",
    model: "XPS 13",
    description:
      "Dell XPS 13 erbjuder högupplöst skärm och en kraftfull processor, vilket gör den till ett utmärkt val för programmering. Den klarar av att köra tunga utvecklingsmiljöer och hantera komplexa projekt effektivt.",
    price: "15500 :-",
    color: "Silver",
    image: "/images/dell1.jpg",
    published_date: "2025-01-11",
    url_slug: "dell-xps-13",
  },
  {
    name: "Dell Inspiron 15",
    brand: "Dell",
    model: "Inspiron 15",
    description:
      "Inspiron 15 är en prisvärd laptop som erbjuder bra prestanda för vardagsbruk, inklusive programmering av enklare webbsidor och applikationer. Den är perfekt för nybörjare som vill börja koda utan att kompromissa med funktionalitet.",
    price: "10500 :-",
    color: "Svart",
    image: "/images/dell2.jpg",
    published_date: "2025-01-13",
    url_slug: "dell-inspiron-15",
  },
  {
    name: "Dell Latitude 5430",
    brand: "Dell",
    model: "Latitude 5430",
    description:
      "Latitude 5430 är en företagsdator som är perfekt för programmering på en robust och pålitlig plattform. Den är designad för att hantera flera utvecklingsverktyg och applikationer utan att tappa prestanda.",
    price: "16500 :-",
    color: "Grå",
    image: "/images/dell3.jpg",
    published_date: "2025-01-15",
    url_slug: "dell-latitude-5430",
  },
  {
    name: "ASUS ZenBook 14",
    brand: "ASUS",
    model: "ZenBook 14",
    description:
      "ASUS ZenBook 14 är en ultratunn laptop som erbjuder bra prestanda för programmering, inklusive utveckling av webbsidor, appar och databaser. Den är lätt att ta med sig och passar bra för kodning på resande fot.",
    price: "13500 :-",
    color: "Blå",
    image: "/images/asus1.jpg",
    published_date: "2025-01-10",
    url_slug: "asus-zenbook-14",
  },
  {
    name: "ASUS ROG Zephyrus G14",
    brand: "ASUS",
    model: "ROG Zephyrus G14",
    description:
      "ASUS ROG Zephyrus G14 är en gaming-laptop med exceptionell prestanda, vilket gör den perfekt för programmerare som arbetar med tunga utvecklingsmiljöer, inklusive spelutveckling och avancerad grafikprogrammering.",
    price: "19500 :-",
    color: "Vit",
    image: "/images/asus2.jpg",
    published_date: "2025-01-12",
    url_slug: "asus-rog-zephyrus-g14",
  },
  {
    name: "ASUS ProBook 14",
    brand: "ASUS",
    model: "ProBook 14",
    description:
      "ASUS ProBook 14 erbjuder pålitlig prestanda för programmering och utveckling av appar, samt hantering av flera samtidiga utvecklingsmiljöer. Den är ett bra val för både studenter och professionella utvecklare.",
    price: "12500 :-",
    color: "Grå",
    image: "/images/asus3.jpg",
    published_date: "2025-01-10",
    url_slug: "asus-probook-14",
  },
  {
    name: "HP Spectre x360",
    brand: "HP",
    model: "Spectre x360",
    description:
      "HP Spectre x360 är en flexibel 2-i-1-laptop som erbjuder hög prestanda och bra batteritid för programmering och utveckling av webb- och mobilapplikationer. Den kan användas som en laptop eller surfplatta beroende på behov.",
    price: "17500 :-",
    color: "Svart",
    image: "/images/hp1.jpg",
    published_date: "2025-01-11",
    url_slug: "hp-spectre-x360",
  },
  {
    name: "HP Envy 15",
    brand: "HP",
    model: "Envy 15",
    description:
      "HP Envy 15 är en kraftfull laptop med högupplöst skärm och snabb processor, vilket gör den perfekt för utveckling av avancerade applikationer och programvara. Den passar bra för både kodning och kreativt arbete.",
    price: "18500 :-",
    color: "Silver",
    image: "/images/hp4.jpg",
    published_date: "2025-01-10",
    url_slug: "hp-envy-15",
  },
  {
    name: "HP Pavilion 14",
    brand: "HP",
    model: "Pavilion 14",
    description:
      "HP Pavilion 14 erbjuder en bra balans mellan pris och prestanda för programmering, vilket gör den idealisk för nybörjare som vill börja utveckla appar och webbapplikationer utan att överskrida budgeten.",
    price: "9500 :-",
    color: "Blå",
    image: "/images/hp3.jpg",
    published_date: "2025-01-08",
    url_slug: "hp-pavilion-14",
  },
  {
    name: "Lenovo ThinkPad X1 Carbon",
    brand: "Lenovo",
    model: "ThinkPad X1 Carbon",
    description:
      "Lenovo ThinkPad X1 Carbon är en lätt och robust laptop som erbjuder exceptionell prestanda för programmering och mjukvaruutveckling, särskilt för företagslösningar och stora dataprojekt.",
    price: "18500 :-",
    color: "Svart",
    image: "/images/lenovo1.jpg",
    published_date: "2025-01-09",
    url_slug: "lenovo-thinkpad-x1-carbon",
  },
  {
    name: "Lenovo IdeaPad 5",
    brand: "Lenovo",
    model: "IdeaPad 5",
    description:
      "Lenovo IdeaPad 5 erbjuder lång batteritid och bra prestanda för programmering, vilket gör den till ett bra val för kodning och utveckling av enklare applikationer och webbprojekt.",
    price: "10500 :-",
    color: "Blå",
    image: "/images/lenovo2.jpg",
    published_date: "2025-01-11",
    url_slug: "lenovo-ideapad-5",
  },
  {
    name: "Microsoft Surface Laptop 5",
    brand: "Microsoft",
    model: "Surface Laptop 5",
    description:
      "Surface Laptop 5 kombinerar stilren design med kraftfull prestanda, vilket gör den till ett bra val för programmerare som arbetar med webbutveckling och applikationsutveckling under längre perioder.",
    price: "15500 :-",
    color: "Platinumsilver",
    image: "/images/microsoft1.jpg",
    published_date: "2025-01-08",
    url_slug: "microsoft-surface-laptop-5",
  },
  {
    name: "Microsoft Surface Pro 9",
    brand: "Microsoft",
    model: "Surface Pro 9",
    description:
      "Surface Pro 9 är en mångsidig 2-i-1-enhet som fungerar både som laptop och surfplatta, vilket gör den idealisk för programmering när du behöver flexibilitet och portabilitet samtidigt som du behåller hög prestanda.",
    price: "17500 :-",
    color: "Blå",
    image: "/images/microsoft2.jpg",
    published_date: "2025-01-12",
    url_slug: "microsoft-surface-pro-9",
  },
  {
    name: "Acer Aspire 5",
    brand: "Acer",
    model: "Aspire 5",
    description:
      "Acer Aspire 5 är en prisvärd och pålitlig laptop som erbjuder god prestanda för programmering och vardagligt arbete. Perfekt för studenter och nybörjare som behöver en dator för enklare kodningsprojekt och webbutveckling.",
    price: "9500 :-",
    color: "Silver",
    image: "/images/acer1.jpg",
    published_date: "2025-01-14",
    url_slug: "acer-aspire-5",
  },
  {
    name: "Acer Predator Helios 300",
    brand: "Acer",
    model: "Predator Helios 300",
    description:
      "Acer Predator Helios 300 är en kraftfull gaming-laptop som även är idealisk för programmerare som arbetar med spelutveckling, tunga utvecklingsmiljöer och avancerad grafikprogrammering.",
    price: "19500 :-",
    color: "Svart",
    image: "/images/acer2.jpg",
    published_date: "2025-01-16",
    url_slug: "acer-predator-helios-300",
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
