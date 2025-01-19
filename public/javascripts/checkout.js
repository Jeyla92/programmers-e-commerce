document.addEventListener("DOMContentLoaded", function () {
  fetch("/api/get-cart")
    .then((response) => response.json())
    .then((cart) => {
      const cartContainer = document.querySelector(".order-summary");
      cartContainer.innerHTML = "";

      cart.forEach((product) => {
        const productElement = document.createElement("div");
        productElement.innerHTML = `
          <p><strong>Produkt:</strong> ${product.name}</p>
          <p><strong>Pris:</strong> ${product.price} </p>
          <p><strong>Antal:</strong> ${product.quantity}</p>
          <p><strong>Totalpris:</strong> ${product.total_price} KR</p>
          <div><img class="product-image" src="${product.image}" alt="${product.name}" /></div>
          <button class="remove-from-cart" data-id="${product.product_id}">Ta bort</button>
        `;
        cartContainer.appendChild(productElement);
      });

      const total = cart.reduce(
        (sum, product) => sum + parseFloat(product.total_price),
        0
      );
      const totalElement = document.createElement("p");
      totalElement.classList.add("total");
      totalElement.innerHTML = `<strong>Summa totalt:</strong> ${total} KR`;
      cartContainer.appendChild(totalElement);

      document.querySelectorAll(".remove-from-cart").forEach((button) => {
        button.addEventListener("click", function () {
          const productId = this.getAttribute("data-id");
          fetch("/api/remove-from-cart", {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ productId }),
          })
            .then((response) => response.json())
            .then((data) => {
              if (data.success) {
                alert("Product removed from cart");
                location.reload();
              } else {
                alert("Failed to remove product from cart");
              }
            });
        });
      });
    });
});
