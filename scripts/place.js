// Static Weather Values
const temperature = 28;
const windSpeed = 12;

// Wind Chill Calculation
function calculateWindChill(temperature, windSpeed) {
    return 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);
}

// Display Wind Chill
const windChillElement = document.querySelector("#wind-chill");

if (temperature <= 10 && windSpeed > 4.8) {
    const windChill = calculateWindChill(temperature, windSpeed);

    windChillElement.textContent = `${windChill.toFixed(1)} °C`;
} else {
    windChillElement.textContent = "N/A";
}

// Current Year
const currentYear = new Date().getFullYear();

document.querySelector("#current-year").textContent = currentYear;

// Last Modified Date
document.querySelector("#last-modified").textContent =
    document.lastModified;