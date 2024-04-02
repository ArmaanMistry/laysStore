document.addEventListener('DOMContentLoaded', function () {
    const buyNowButton = document.getElementById('buyNowButton');

    buyNowButton.addEventListener('click', function () {
        // Gather form data
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const email = document.getElementById('email').value;
        const contact = document.getElementById('contact').value;
        const address = document.getElementById('address').value;
        const address2 = document.getElementById('address2').value;
        const country = document.getElementById('country').value;
        const state = document.getElementById('state').value;
        const zip = document.getElementById('zip').value;
        const credit = document.getElementById('credit').value;

        // Get quantities for each product
        const quantities = {
            saltLays: document.getElementById('quantity1').value,
            paprikaLays: document.getElementById('quantity2').value,
            mushroomLays: document.getElementById('quantity3').value,
            ketchupLays: document.getElementById('quantity4').value,
            cheeseLays: document.getElementById('quantity5').value,
            margheritaLays: document.getElementById('quantity6').value,
        };

        // You can add form validation here (optional)

        // Prepare data for sending to server
        const formData = {
            firstName,
            lastName,
            email,
            contact,
            address,
            address2,
            country,
            state,
            zip,
            credit,
            quantities
        };

        // Submit form data using Fetch API
        fetch('/checkout', {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: { 'Content-Type': 'application/json' } // Specify content type
        })
            .then(response => {
                if (response.ok) { // Check for successful response
                    return response.text(); // Process successful response data (optional)
                } else {
                    throw new Error("Error placing order!"); // Handle non-200 status codes
                }
            })
            .then(data => {
                console.log("Success! Redirecting..."); // Add this line
                window.location.href = "success";
            })
            .catch(error => {
                // Handle errors (e.g., display error message to user)
                console.error(error);
                alert("Error placing order. Please try again!");
            });
    });
});
