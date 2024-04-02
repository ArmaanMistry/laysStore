function updateTotal() {
    var totalAmount = 0;
    // Iterate through each product
    var products = document.querySelectorAll('.custom-square-input');
    products.forEach(function (product) {
        // Get the price per item for the specified product
        var pricePerItem;
        switch (product.closest('.list-group-item').id) {
            case 'product1':
                pricePerItem = 599; // Example price for product 1
                break;
            case 'product2':
                pricePerItem = 599; // Example price for product 2
                break;
            case 'product3':
                pricePerItem = 599; // Example price for product 3
                break;
            case 'product4':
                pricePerItem = 599; // Example price for product 4
                break;
            case 'product5':
                pricePerItem = 599; // Example price for product 5
                break;
            case 'product6':
                pricePerItem = 599; // Example price for product 6
                break;
            // Add cases for other products if needed
        }

        // Get the quantity entered by the user
        var quantity = product.value;

        // Calculate total amount for the specified product
        var productTotal = pricePerItem * quantity;

        // Accumulate total amount
        totalAmount += productTotal;
    });

    // Update the total amount displayed
    document.getElementById("totalAmount").textContent = "₹" + totalAmount;
}