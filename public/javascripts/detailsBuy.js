document.querySelector(".add-to-cart").addEventListener("click", function () {
  const productId = this.dataset.id;
  const quantity = 1;
  fetch("/api/add-to-cart", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ productId, quantity }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        alert("Product added to cart");
      } else {
        alert("Failed to add product to cart");
      }
    });
});
