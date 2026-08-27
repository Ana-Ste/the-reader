const buyButtons = document.querySelectorAll(".buy-button");

buyButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const productName = button.dataset.name;

    alert(`Added to cart: ${productName}`);
  });
});
