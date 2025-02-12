const largeImage = document.getElementById('gallery');
const thumbnails = document.querySelectorAll('.thumbnail');
let currentIndex = 0;

function showImage(index) {
    largeImage.src = thumbnails[index].src;
    currentIndex = index;
}

thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        showImage(index);
    });
});

document.getElementById('prevBtn').addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : thumbnails.length - 1;
    showImage(currentIndex);
});

document.getElementById('nextBtn').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % thumbnails.length;
    showImage(currentIndex);
});

// Mostrar la primera imagen por defecto


