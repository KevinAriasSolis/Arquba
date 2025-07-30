document.addEventListener('DOMContentLoaded', () => {
    const carouselImages = document.querySelector('.carousel-images');
    const images = document.querySelectorAll('.carousel-images img');
    let currentIndex = 0;

    function showNextImage() {
        currentIndex = (currentIndex + 1) % images.length; // Cicla al inicio al llegar al final
        const offset = currentIndex * -100; // Calcula el desplazamiento
        carouselImages.style.transform = `translateX(${offset}%)`;
    }

    // Cambia la imagen cada 3 segundos
    setInterval(showNextImage, 3000);
});
