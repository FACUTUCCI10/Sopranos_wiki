
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
document.addEventListener('DOMContentLoaded', function() {
    // ========================
    // GALERÍA (ya lo tenías)
    // ========================
    const galleryImages = document.querySelectorAll('.gallery-image');
    const fullscreenView = document.querySelector('.fullscreen');
    const fullscreenImg = document.querySelector('.fullscreen-img');
    const closeBtn = document.querySelector('.close-btn');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const imageCounter = document.querySelector('.image-counter');

    if (galleryImages.length > 0) {
        let currentIndex = 0;
        const images = Array.from(galleryImages);

        function updateFullscreenImage() {
            fullscreenImg.src = images[currentIndex].src;
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
    }

    // ========================
    // MODAL PERSONAJES
    // ========================
    const personajesItems = document.querySelectorAll('.personajes-item');
    const modalPersonaje = document.getElementById('modal-personaje');
    const modalImg = document.getElementById('modal-img-personaje');
    const modalNombre = document.getElementById('modal-nombre-personaje');
    const modalDescripcion = document.getElementById('modal-descripcion-personaje');
    const modalClose = document.querySelector('.modal-close-personaje');

    // Abrir modal con info del personaje
    personajesItems.forEach(item => {
        item.addEventListener('click', () => {
            const nombre = item.dataset.nombre;
            const descripcion = item.dataset.descripcion;
            const imagen = item.dataset.imagen;

            modalNombre.textContent = nombre;
            modalDescripcion.textContent = descripcion;
            modalImg.src = imagen;

            modalPersonaje.style.display = 'flex';
        });
    });

    // Cerrar modal con el botón X
    modalClose.addEventListener('click', () => {
        modalPersonaje.style.display = 'none';
    });

    // Cerrar modal al hacer clic fuera del contenido
    modalPersonaje.addEventListener('click', (e) => {
        if (e.target === modalPersonaje) {
            modalPersonaje.style.display = 'none';
        }
    });

    // Cerrar modal con tecla Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modalPersonaje.style.display === 'flex') {
            modalPersonaje.style.display = 'none';
        }
    });
});
