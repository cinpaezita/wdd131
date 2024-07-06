// filtered-temples.js
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

    // *** Temples Data Section ***
    const temples = [
        {
            templeName: "Aba Nigeria",
            location: "Aba, Nigeria",
            dedicated: "2005, August, 7",
            area: 11500,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
        },
        {
            templeName: "Manti Utah",
            location: "Manti, Utah, United States",
            dedicated: "1888, May, 21",
            area: 74792,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
        },
        {
            templeName: "Payson Utah",
            location: "Payson, Utah, United States",
            dedicated: "2015, June, 7",
            area: 96630,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
        },
        {
            templeName: "Yigo Guam",
            location: "Yigo, Guam",
            dedicated: "2020, May, 2",
            area: 6861,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
        },
        {
            templeName: "Washington D.C.",
            location: "Kensington, Maryland, United States",
            dedicated: "1974, November, 19",
            area: 156558,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
        },
        {
            templeName: "Lima Perú",
            location: "Lima, Perú",
            dedicated: "1986, January, 10",
            area: 9600,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
        },
        {
            templeName: "Mexico City Mexico",
            location: "Mexico City, Mexico",
            dedicated: "1983, December, 2",
            area: 116642,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
        },
        {
            templeName: "Asuncion Paraguay",
            location: "Asuncion, Paraguay",
            dedicated: "2002, May, 19",
            area: 11906,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/asuncion-paraguay/400x250/2-5b20486ae3876279c35be147ef9e63aec256a459.jpeg"
        },
        {
            templeName: "Laie Hawaii",
            location: "Laie, Hawaii",
            dedicated: "1919, November, 27",
            area: 42100,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/laie-hawaii/400x250/laie-temple-775369-wallpaper.jpg"
        },
        {
            templeName: "Nauvoo Illinois",
            location: "Nauvoo, Illinois",
            dedicated: "2002, June, 27",
            area: 53997,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/nauvoo-illinois/400x250/nauvoo-illinois-mormon-temple-925501-wallpaper.jpg"
        },
    ];

    createTempleCard(temples);
    // *** Navigation Links and Page Title Section ***
    const homeLink = document.querySelector('#home');
    const oldTemplesLink = document.querySelector('#old');
    const newTemplesLink = document.querySelector('#new');
    const largeTemplesLink = document.querySelector('#large');
    const smallTemplesLink = document.querySelector('#small');
    const pageTitle = document.querySelector('#page-title');

    homeLink.addEventListener("click", () => {
        document.querySelector(".content").innerHTML = '';
        createTempleCard(temples);
        pageTitle.textContent = "Home";
    });

    oldTemplesLink.addEventListener("click", () => {
        const oldTemples = temples.filter(temple => getDedicatedYear(temple.dedicated) < 1900);
        document.querySelector(".content").innerHTML = '';
        createTempleCard(oldTemples);
        pageTitle.textContent = "Old Temples";
    });

    newTemplesLink.addEventListener("click", () => {
        const newTemples = temples.filter(temple => getDedicatedYear(temple.dedicated) > 2000);
        document.querySelector(".content").innerHTML = '';
        createTempleCard(newTemples);
        pageTitle.textContent = "New Temples";
    });

    largeTemplesLink.addEventListener("click", () => {
        const largeTemples = temples.filter(temple => temple.area >= 90000);
        document.querySelector(".content").innerHTML = '';
        createTempleCard(largeTemples);
        pageTitle.textContent = "Large Temples";
    });

    smallTemplesLink.addEventListener("click", () => {
        const smallTemples = temples.filter(temple => temple.area < 10000);
        document.querySelector(".content").innerHTML = '';
        createTempleCard(smallTemples);
        pageTitle.textContent = "Small Temples";
    });

    // *** Helper Function to Get Dedicated Year ***
    function getDedicatedYear(dedicatedDate) {
        const year = dedicatedDate.split(', ')[0].trim();
        return parseInt(year);
    }

    // *** Function to Create Temple Cards ***
    function createTempleCard(filteredTemples) {
        filteredTemples.forEach(temple => {
            let card = document.createElement("section");
            let name = document.createElement("h3");
            let location = document.createElement("p");
            let dedication = document.createElement("p");
            let area = document.createElement("p");
            let img = document.createElement("img");

            name.textContent = temple.templeName;
            location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
            dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
            area.innerHTML = `<span class="label">Area:</span> ${temple.area} sq ft`;
            img.setAttribute("src", temple.imageUrl);
            img.setAttribute("alt", `${temple.templeName} Temple`);
            img.setAttribute("loading", "lazy");
            img.setAttribute("width", "400");
            img.setAttribute("height", "250");

            card.appendChild(name);
            card.appendChild(location);
            card.appendChild(dedication);
            card.appendChild(area);
            card.appendChild(img);

            document.querySelector(".content").appendChild(card);
        });
    }
});
