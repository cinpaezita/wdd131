// temples.js
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
});
