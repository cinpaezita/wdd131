// getdates.js

// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function () {
    const currentYear = document.getElementById('currentyear');
    const lastModified = document.getElementById('lastModified');

    const today = new Date();

    currentYear.textContent = today.getFullYear();

    lastModified.textContent = "Last modification: " + document.lastModified;
});