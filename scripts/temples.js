const currentYear = new Date().getFullYear();
document.getElementById("copyright").innerText += currentYear  + "- Kade O'Crowley - USA";

const lastModifiedDate = new Date(document.lastModified);
document.getElementById("lastModified").innerText += lastModifiedDate.toLocaleString(); 

const menuBtn = document.querySelector("#menu");
const navigation = document.querySelector("#navigation");

menuBtn.addEventListener('click', function() {
    navigation.classList.toggle('show')
    menuBtn.classList.toggle('show')
})