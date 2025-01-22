// JavaScript to implement search functionality

// Function to initialize the search functionality
function initializeSearch() {
    const searchForm = document.querySelector("form[action='/search']");
    const searchInput = searchForm.querySelector("input[name='query']");

    // Add an event listener to handle form submission
    searchForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the form from reloading the page

        const query = searchInput.value.toLowerCase().trim();

        if (!query) {
            alert("Please enter a product name to search.");
            return;
        }

        // Search for the product by name
        const productCards = document.querySelectorAll(".product-card");
        let productFound = false;

        productCards.forEach(card => {
            const productName = card.querySelector("h3").textContent.toLowerCase();

            if (productName.includes(query)) {
                productFound = true;
                // Scroll to the product card
                card.scrollIntoView({ behavior: "smooth", block: "center" });
                // Optionally, highlight the product card
                card.style.border = "2px solid #007BFF";
                card.style.backgroundColor = "#f0f8ff";

                // Remove the highlight after a short delay
                setTimeout(() => {
                    card.style.border = "none";
                    card.style.backgroundColor = "";
                }, 3000);
            }
        });

        if (!productFound) {
            alert("Product not found. Please check the name and try again.");
        }
    });
}

// Initialize the search functionality when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", initializeSearch);
