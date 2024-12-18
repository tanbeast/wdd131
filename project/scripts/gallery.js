const galleryContainer = document.getElementById("gallery-container");

const images = [
    "https://via.placeholder.com/300?text=Yellowstone",
    "https://via.placeholder.com/300?text=Grand+Canyon",
    "https://via.placeholder.com/300?text=Buslife+Festival",
    "https://via.placeholder.com/300?text=Lake+Tahoe",
    "https://via.placeholder.com/300?text=National+Park+Tour"
];

images.forEach(src => {
    const img = document.createElement("img");
    img.src = src;
    img.alt = "Trip Photo";
    galleryContainer.appendChild(img);
});
