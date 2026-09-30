const year = new Date().getFullYear();

document.querySelector("#currentyear").textContent = year;

document.querySelector("#lastModified").textContent =
    `Last Modification: ${document.lastModified}`;