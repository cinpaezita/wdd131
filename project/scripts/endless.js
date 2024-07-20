// endless.js
document.addEventListener("DOMContentLoaded", function () {
    const currentYear = document.getElementById("currentyear");
    const lastModified = document.getElementById("lastModified");

    const today = new Date();
    currentYear.textContent = today.getFullYear();
    lastModified.textContent = "Last modification: " + document.lastModified;

    const hamButton = document.querySelector('#menu');
    const navigation = document.querySelector('.navigation');
    hamButton.addEventListener('click', () => {
        navigation.classList.toggle('open');
        hamButton.classList.toggle('open');
    });

    const products = [
        {
            id: "house1",
            name: "Sunny Retreat",
            image: "images/house1.webp",
            detailImage: "images/house1-large.webp",
            description: "Eco-friendly toy house made from sustainable materials.",
            detailedDescription: "This eco-friendly house is made from sustainable materials, ensuring both fun and environmental responsibility.",
            material: "MDF",
            dimensions: "60x40x0.5 cm",
            price: "$50"
        },
        {
            id: "house2",
            name: "Adventure Haven",
            image: "images/house2.webp",
            detailImage: "images/house2-large.webp",
            description: "Durable and affordable playhouse for kids.",
            detailedDescription: "The Adventure Haven offers durability and affordability, making it a great choice for families looking for quality playhouses.",
            material: "MDF",
            dimensions: "70x50x0.6 cm",
            price: "$60"
        },
        {
            id: "house3",
            name: "Creative Cottage",
            image: "images/house3.webp",
            detailImage: "images/house3-large.webp",
            description: "Creative play solution promoting cognitive development.",
            detailedDescription: "Creative Cottage is designed to promote cognitive development and creativity in children, providing a fun and educational playtime.",
            material: "MDF",
            dimensions: "80x60x0.8 cm",
            price: "$70"
        },
        {
            id: "house4",
            name: "Eco Explorer",
            image: "images/house4.webp",
            detailImage: "images/house4-large.webp",
            description: "High-quality toy house that ensures long-lasting play.",
            detailedDescription: "With high-quality materials, Eco Explorer house ensures long-lasting play and endless adventures for children.",
            material: "Cardboard",
            dimensions: "50x50x0.7 cm",
            price: "$55"
        },
        {
            id: "house5",
            name: "Dream House",
            image: "images/house5.webp",
            detailImage: "images/house5-large.webp",
            description: "Budget-friendly playhouse that fits any family’s needs.",
            detailedDescription: "The Dream House is budget-friendly and designed to fit any family’s needs, providing an accessible play solution for everyone.",
            material: "Cardboard",
            dimensions: "120x90x2.0 cm",
            price: "$80"
        },
        {
            id: "house6",
            name: "Imagination Oasis",
            image: "images/house6.webp",
            detailImage: "images/house6-large.webp",
            description: "Innovative design fostering creativity and imagination.",
            detailedDescription: "Imagination Oasis features an innovative design that fosters creativity and imagination, making it a favorite among kids.",
            material: "Cardboard",
            dimensions: "90x50x0.8 cm",
            price: "$65"
        }
    ];

    const productContainer = document.getElementById("productContainer");
    const productFilter = document.getElementById("productFilter");
    const productDetails = document.getElementById("productDetails");

    function displayProducts(filteredProducts) {
        productContainer.innerHTML = "";
        filteredProducts.forEach((product, index) => {
            const productCard = document.createElement("div");
            productCard.className = "product-card";
            const imgElement = document.createElement("img");
            imgElement.src = product.image;
            imgElement.alt = product.name;
            imgElement.width = 300;
            imgElement.height = 200;
            if (index !== 0) {
                imgElement.loading = "lazy";
            }
            productCard.appendChild(imgElement);
            productCard.innerHTML += `
                <h2>${product.name}</h2>
                <p>${product.description}</p>
            `;
            productCard.addEventListener("click", () => showProductDetails(product));
            productContainer.appendChild(productCard);
        });
    }

    function showProductDetails(product) {
        productContainer.innerHTML = ""; // Clear the product container
        productDetails.className = "product-details active";
        productDetails.innerHTML = `
        <img src="${product.detailImage}" alt="${product.name}" loading="lazy" width="500" height="300">
        <h2>${product.name}</h2>
        <p>${product.detailedDescription}</p>
        <p><strong>Material:</strong> ${product.material}</p>
        <p><strong>Dimensions:</strong> ${product.dimensions}</p>
        <p><strong>Price:</strong> ${product.price}</p>
        <a href="#" class="buy-button">Buy Now</a>
    `;
    }

    function filterProducts() {
        const filter = productFilter.value;
        if (filter === "all") {
            displayProducts(products);
            productDetails.className = "product-details";
        } else {
            const filteredProducts = products.filter(
                (product) => product.id === filter
            );
            if (filteredProducts.length === 1) {
                showProductDetails(filteredProducts[0]);
            } else {
                displayProducts(filteredProducts);
                productDetails.className = "product-details";
            }
        }
    }

    productFilter.addEventListener("change", filterProducts);
    displayProducts(products);

    // Initialize display element variable
    const visitsDisplay = document.querySelector(".visits");

    // Get the stored VALUE for the numContacts-ls KEY in localStorage if it exists. If the numContacts KEY is missing, then assign 0 to the numContacts variable.
    let numContacts = Number(window.localStorage.getItem("numContacts-ls")) || 0;

    // Increment the number of contacts by one
    numContacts++;

    // Store the new contact total into localStorage, key=numContacts-ls
    localStorage.setItem("numContacts-ls", numContacts);

    // Display the number of contacts
    if (numContacts !== 0) {
        visitsDisplay.textContent = `You have made ${numContacts} contacts.`;
    } else {
        visitsDisplay.textContent = `This is your first contact. 🥳 Welcome!`;
    }

    // Check if the message was submitted
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('name') && urlParams.has('email') && urlParams.has('message')) {
        //  increment the number of contacts by one.
        numReviews++;
        //  store the new contact total into localStorage, key=numReviews-ls
        localStorage.setItem("numReviews-ls", numReviews);
    }

});
