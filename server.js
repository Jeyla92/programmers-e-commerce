const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 8080;

let products = [
    { id: 1, name: "HP Laptop", price: "15 190 kr", image: "HP laptop.jpg" },
    { id: 2, name: "MacBook Pro M1", price: "18 490 kr", image: "macbook air laptop.jpg" },
    { id: 3, name: "Asus Vivobook", price: "7 490 kr", image: "asus.jpg" },
    { id: 4, name: "Lenovo IdeaPad", price: "4 490 kr", image: "Lenovo laptop.jpg" },
    { id: 5, name: "Samsung Galaxy Book", price: "8 990 kr", image: "samsung.jpg" },
    { id: 6, name: "Huawei EliteBook", price: "4 399 kr", image: "huawei.jpg" },
];

// Middleware
app.use(cors());
app.use(express.static('public'));
app.use(express.json());

// Hämta alla produkter
app.get('/api/products', (req, res) => {
    res.json(products);
});

// Hämta en specifik produkt
app.get('/api/products/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    const product = products.find(p => p.id === productId);

    if (!product) {
        return res.status(404).json({ error: 'Produkt inte hittad' });
    }

    res.json(product);
});

// Starta servern
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
