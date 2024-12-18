if (document.getElementById("gallery")) {
    const gallery = document.getElementById("gallery");

    let i = 1;
    while (true) {
        const imagePath = `images/picture${i}.jpg`;

        // Simulate image existence check
        if (i > 5) break; // Replace with actual logic to check file existence

        const img = document.createElement("img");
        img.src = imagePath;
        img.alt = `Picture ${i}`;
        gallery.appendChild(img);
        i++;
    }
}