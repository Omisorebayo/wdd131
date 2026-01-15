// Get the current year
const year = new Date().getFullYear();

// Insert the current year into the footer
document.getElementById("currentyear").textContent = year;

// Insert the last modified date into the footer
document.getElementById("lastModified").textContent =
    "Last Modified: " + document.lastModified;
