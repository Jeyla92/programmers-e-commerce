document.addEventListener('DOMContentLoaded', () => {
    const searchBar = document.getElementById('search-bar');
    const suggestionsList = document.getElementById('suggestions-list');
    let products = [];

    const fetchProducts = () => {
        fetch('http://localhost:8080/api/products')
            .then(response => {
                return response.json()})
            .then(data => {
                console.log("Fetched products:", data);
                products = data;
            })
            .catch(error => console.error('Error fetching products:', error));
    };

    const showSuggestions = (query) => {
        console.log("Query:", query);
        suggestionsList.innerHTML = '';
        if (query) {
            const filteredProducts = products.filter((product) =>
                product.name.toLowerCase().includes(query.toLowerCase())
            );
            console.log("Filtered products:", filteredProducts);

            if (filteredProducts.length > 0) {
                suggestionsList.style.display = 'block';
                filteredProducts.forEach(product => {
                    const listItem = document.createElement('li');
                    listItem.textContent = product.name;
                    suggestionsList.appendChild(listItem);
                });
            } else {
                suggestionsList.style.display = 'none';
            }
        } else {
            suggestionsList.style.display = 'none';
        }
    };

    searchBar.addEventListener('input', (event) => {

        const query = searchBar.value.trim();
        showSuggestions(query);
    });

    fetchProducts();
});
