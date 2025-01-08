const express = require('express');
const cors = require('cors'); // Importera CORS
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
app.use(cors()); // Aktivera CORS
app.use(express.static('public')); // Serve static files
app.use(express.json()); // Parse JSON requests

// Get products with optional search query
app.get('/api/products', (req, res) => {
    const searchQuery = req.query.q;
    if (searchQuery) {
        const filteredProducts = products.filter(product =>
            product.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        res.json(filteredProducts);
    } else {
        console.log(products)
        res.json(products);
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
