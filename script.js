document.addEventListener('DOMContentLoaded', () => {
    
    // --- Swiper.js Initialization for Certifications Slider ---
    const swiper = new Swiper(".swiper", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        loop: true,
        coverflowEffect: {
            rotate: 0,
            stretch: 80, /* This value adds space between slides */
            depth: 250, /* Increased depth for a better 3D effect */
            modifier: 1,
            slideShadows: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    // --- Lightbox Functionality ---
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.close-btn');

    function openLightbox(imgSrc, imgAlt) {
        if (lightbox && lightboxImg) {
            lightbox.style.display = 'block';
            lightboxImg.src = imgSrc;
            lightboxImg.alt = imgAlt;
        }
    }

    function closeLightbox() {
        if (lightbox) {
            lightbox.style.display = 'none';
        }
    }

    // New logic: Click the active (center) slide to open lightbox
    swiper.on('click', function () {
        if (this.clickedIndex === this.activeIndex) {
            const activeSlideImg = this.slides[this.activeIndex].querySelector('img');
            if (activeSlideImg) {
                openLightbox(activeSlideImg.src, activeSlideImg.alt);
            }
        } else {
            this.slideTo(this.clickedIndex);
        }
    });

    // Event listeners for closing the lightbox
    if (closeBtn) {
        closeBtn.addEventListener('click', closeLightbox);
    }
    
    if (lightbox) {
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });
    }

    document.addEventListener('keydown', (e) => {
        if (lightbox && lightbox.style.display === 'block' && e.key === 'Escape') {
            closeLightbox();
        }
    });
});