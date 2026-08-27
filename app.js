const productList = document.getElementById("productList");

async function loadProducts() {
  try {
    const response = await fetch("./products.json");

    if (!response.ok) {
      throw new Error("Could not load products.");
    }

    const products = await response.json();
    renderProducts(products);
  } catch (error) {
    console.error(error);
    productList.textContent = "Could not load products.";
  }
}

function renderProducts(products) {
  productList.textContent = "";

  products.forEach((product) => {
    const article = document.createElement("article");
    article.classList.add("product-card");

    if (product.badge) {
      const badge = document.createElement("span");
      badge.classList.add("badge");
      badge.textContent = product.badge;
      article.appendChild(badge);
    }

    const title = document.createElement("h3");
    title.textContent = product.name;
    article.appendChild(title);

    const image = document.createElement("img");
    image.src = product.image;
    image.alt = product.imageAlt;
    article.appendChild(image);

    const description = document.createElement("p");
    description.textContent = product.description;
    article.appendChild(description);

    const author = document.createElement("p");
    author.textContent = "Author: " + product.author;
    article.appendChild(author);

    const price = document.createElement("p");
    price.textContent = "Price: " + product.price + " SEK";
    article.appendChild(price);

    const button = document.createElement("button");
    button.classList.add("buy-button");
    button.textContent = "Add to cart";

    button.addEventListener("click", () => {
      alert("Added to cart: " + product.name);
    });

    article.appendChild(button);
    productList.appendChild(article);
  });
}

loadProducts();
