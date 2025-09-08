
document.addEventListener('DOMContentLoaded', function() {
    const galleryImages = document.querySelectorAll('.gallery-image');
    const fullscreenView = document.querySelector('.fullscreen');
    const fullscreenImg = document.querySelector('.fullscreen-img');
    const closeBtn = document.querySelector('.close-btn');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const imageCounter = document.querySelector('.image-counter');

    if (galleryImages.length === 0) {
        return;
    }

    let currentIndex = 0;
    const images = Array.from(galleryImages);

    function updateFullscreenImage() {
        const imageSrc = images[currentIndex].src;
        fullscreenImg.src = imageSrc;
        imageCounter.textContent = `${currentIndex + 1} / ${images.length}`;
    }

    function openFullscreen(index) {
        currentIndex = index;
        fullscreenView.style.display = 'flex';
        updateFullscreenImage();
    }

    function closeFullscreen() {
        fullscreenView.style.display = 'none';
    }

    function showNextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        updateFullscreenImage();
    }

    function showPrevImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateFullscreenImage();
    }

    images.forEach((image, index) => {
        image.addEventListener('click', () => openFullscreen(index));
    });

    closeBtn.addEventListener('click', closeFullscreen);
    nextBtn.addEventListener('click', showNextImage);
    prevBtn.addEventListener('click', showPrevImage);

    document.addEventListener('keydown', (e) => {
        if (fullscreenView.style.display === 'flex') {
            if (e.key === 'ArrowRight') showNextImage();
            if (e.key === 'ArrowLeft') showPrevImage();
            if (e.key === 'Escape') closeFullscreen();
        }
    });

    fullscreenView.addEventListener('click', (e) => {
        if (e.target === fullscreenView) {
            closeFullscreen();
        }
    });
});
