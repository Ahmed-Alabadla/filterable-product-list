// Product Data
const products = [
  {
    id: "1",
    title: "MacBook Pro 16-inch",
    price: "2499",
    category: "Electronics",
  },
  {
    id: "2",
    title: "Samsung Galaxy S22",
    price: "899",
    category: "Electronics",
  },
  {
    id: "3",
    title: "Sony WH-1000XM5 Headphones",
    price: "399",
    category: "Electronics",
  },
  {
    id: "4",
    title: "Adidas Ultraboost Shoes",
    price: "180",
    category: "Clothing",
  },
  {
    id: "5",
    title: "Levi’s 501 Original Jeans",
    price: "89",
    category: "Clothing",
  },
  {
    id: "6",
    title: "Nike Air Force 1",
    price: "120",
    category: "Clothing",
  },
  {
    id: "7",
    title: "Canon EOS R6 Camera",
    price: "2499",
    category: "Electronics",
  },
  {
    id: "8",
    title: "Gucci Leather Belt",
    price: "450",
    category: "Clothing",
  },
  {
    id: "9",
    title: "Sony 55-inch 4K TV",
    price: "1099",
    category: "Electronics",
  },
  {
    id: "10",
    title: "Apple Watch Series 10",
    price: "499",
    category: "Electronics",
  },
  {
    id: "11",
    title: "Ray-Ban Aviator Sunglasses",
    price: "150",
    category: "Clothing",
  },
  {
    id: "12",
    title: "North Face Jacket",
    price: "299",
    category: "Clothing",
  },
  {
    id: "13",
    title: "iPad Pro 12.9-inch",
    price: "1099",
    category: "Electronics",
  },
  {
    id: "14",
    title: "Fitbit Charge 5",
    price: "179",
    category: "Electronics",
  },
  {
    id: "15",
    title: "Samsung Galaxy Buds Pro",
    price: "199",
    category: "Electronics",
  },
];

// Function to display products
function displayProducts(productArray) {
  const productList = document.getElementById("product-list");
  productList.innerHTML = ""; // Clear the product display area

  productArray.forEach((product) => {
    // Create a product item div
    const productItem = document.createElement("div");
    productItem.classList.add("product-item");

    // Add product details
    productItem.innerHTML = `
      <h2>${product.title}</h2>
      <p>Category: ${product.category}</p>
      <p class="product-price">$${product.price}</p>
    `;

    // Append the product item to the product list
    productList.appendChild(productItem);
  });
}

// Initial display of all products
displayProducts(products);

// Function to filter products by category
function filterProducts(category) {
  if (category === "All") {
    displayProducts(products);
  } else {
    const filteredProducts = products.filter(
      (product) => product.category === category
    );
    displayProducts(filteredProducts);
  }
}

// Add event listeners to filter buttons
const filterButtons = document.querySelectorAll(".filter-btn");
filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Remove "active" class from all buttons
    filterButtons.forEach((btn) => btn.classList.remove("active"));

    // Add "active" class to the clicked button
    button.classList.add("active");

    // Get the category from data-category attribute
    const category = button.getAttribute("data-category");

    // Filter products based on the category
    filterProducts(category);
  });
});
