const currentyear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");
const today = new Date();

currentyear.innerHTML = today.getFullYear();
lastModified.innerHTML = `Last Modified: ${document.lastModified}`;

const temperature = 10;
const windspeed = 5;

if (temperature <= 10) {
    if (windspeed > 4.8) {
        document.getElementById("windchill").innerHTML = calculateWindChill().toFixed(2) + '°C';
    }
} else {
    document.getElementById("windchill").innerHTML = 'N/A';
}

function calculateWindChill() {
    let chill = temperature - (windspeed * .07);
    return chill;
}