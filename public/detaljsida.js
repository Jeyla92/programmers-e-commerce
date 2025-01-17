document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    if (!productId) {
        alert('Inget produkt-ID hittades i URL:en!');
        return;
    }

    // API-anrop för att hämta produktinformation
    fetch(`http://localhost:8080/api/products/${productId}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Produkten kunde inte hittas!');
            }
            return response.json();
        })
        .then(product => {
            // Uppdatera HTML med produktinformation
            document.getElementById('produkt-bild').src = `/images/${product.image}`;
            document.getElementById('produkt-namn').textContent = product.name;
            document.getElementById('produkt-pris').textContent = `${product.price} kr`;
            document.getElementById('produkt-beskrivning').textContent = product.description || "Ingen ytterligare beskrivning tillgänglig.";

            // Om specifikationer finns, visa dem
            if (product.specifications && product.specifications.length > 0) {
                const specList = document.querySelector('.specifikationer ul');
                product.specifications.forEach(spec => {
                    const li = document.createElement('li');
                    li.textContent = spec;
                    specList.appendChild(li);
                });
            } else {
                document.querySelector('.specifikationer').style.display = 'none';
            }
        })
        .catch(error => {
            console.error('Fel vid hämtning av produkt:', error);
            alert('Produkten kunde inte hämtas. Försök igen senare.');
        });
});
