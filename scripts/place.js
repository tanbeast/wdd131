const currentYear = new Date().getFullYear();
document.getElementById("copyright").innerText += currentYear  + "- Kade O'Crowley - USA";

const lastModifiedDate = new Date(document.lastModified);
document.getElementById("lastModified").innerText += lastModifiedDate.toLocaleString();

function windChill (wind, temp) {
    let chill = 13.12 + (0.6215 * temp) - (11.37 * wind**0.16) + (0.3965 * temp * wind**0.16)
    return chill.toFixed(1)
}

const wind = 19;
const temperature = 56;
const windElement = document.getElementById('windChill');

if (wind > 4.8 && temperature <=10) {
    windElement.innerHTML = windChill(wind, temperature) + " <sup>o</sup>F"
} else {
    windElement.innerHTML = "N/A"
}