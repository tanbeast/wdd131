const currentYear = new Date().getFullYear();
document.getElementById("copyright").innerText += currentYear  + "- Kade O'Crowley - USA";

const lastModifiedDate = new Date(document.lastModified);
document.getElementById("lastModified").innerText += lastModifiedDate.toLocaleString(); 