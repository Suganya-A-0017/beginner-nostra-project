const searchInput = document.getElementById("search");
const products = document.querySelectorAll(".product");

// Search functionality
searchInput.addEventListener("keyup", function () {
    const value = this.value.toLowerCase();

    products.forEach(product => {
        const text = product.textContent.toLowerCase();

        if (text.includes(value)) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    });
});

// Filter functionality
function filterProducts(category) {
    products.forEach(product => {

        if (category === "all") {
            product.style.display = "block";
        } else if (product.dataset.category === category) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }

    });
}