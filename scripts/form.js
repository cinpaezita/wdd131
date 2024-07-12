document.addEventListener("DOMContentLoaded", function () {
    const currentYear = document.getElementById("currentyear");
    const lastModified = document.getElementById("lastModified");

    const today = new Date();

    currentYear.textContent = today.getFullYear();

    lastModified.textContent = "Last modification: " + document.lastModified;

    // 1️⃣ Initialize display element variable
    const visitsDisplay = document.querySelector(".visits");

    // 2️⃣ Get the stored VALUE for the numVisits-ls KEY in localStorage if it exists. If the numVisits KEY is missing, then assign 0 to the numVisits variable.
    let numReviews = Number(window.localStorage.getItem("numReviews-ls")) || 0;

    // 3️⃣ Determine if this is the first visit or display the number of visits.
    if (numReviews !== 0) {
        visitsDisplay.textContent = `You have completed ${numReviews} reviews.`;
    } else {
        visitsDisplay.textContent = `This is your first review. 🥳 Welcome!`;
    }

    // Check if the form was submitted
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('product-name') && urlParams.has('overall-rating') && urlParams.has('install-date')) {
        // 4️⃣ increment the number of reviews by one.
        numReviews++;
        // 5️⃣ store the new review total into localStorage, key=numReviews-ls
        localStorage.setItem("numReviews-ls", numReviews);
    }
});

const products = [
    {
        'id': 'fc-1888',
        'name': 'flux capacitor',
        'averageRating': 4.5
    },
    {
        'id': 'fc-2050',
        'name': 'power laces',
        'averageRating': 4.7
    },
    {
        'id': 'fs-1987',
        'name': 'time circuits',
        'averageRating': 3.5
    },
    {
        'id': 'ac-2000',
        'name': 'low voltage reactor',
        'averageRating': 3.9
    },
    {
        'id': 'jj-1969',
        'name': 'warp equalizer',
        'averageRating': 5.0
    }
];

const productName = document.querySelector('#product-name');

products.forEach((product) => {
    let option = document.createElement('option');
    option.value = product.id;
    option.innerHTML = product.name;
    productName.appendChild(option);
});