document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    fetch(`http://localhost:8080/api/products/${productId}`)
        .then(response => response.json())
        .then(product => {
            if (product) {
                document.getElementById('produkt-bild').src = `/images/${product.image}`;
                document.getElementById('produkt-namn').textContent = product.name;
                document.getElementById('produkt-pris').textContent = product.price;
                document.getElementById('produkt-beskrivning').textContent = "Ingen ytterligare beskrivning tillgänglig.";
            } else {
                alert('Produkten kunde inte hittas!');
            }
        })
        .catch(error => console.error('Fel vid hämtning av produkt:', error));
});
