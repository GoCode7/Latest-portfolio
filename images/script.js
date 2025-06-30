//mobile menu toggle functionality
const btn = document.querySelector('.mobile-menu-button');
    const menu = document.querySelector('.mobile-menu');

    btn.addEventListener('click', () => {
        menu.classList.toggle('hidden');
});

// GSAP animations for the about page
    gsap.from(".info", {
      opacity: 0,
      y: 50,
      duration: 3,
      stagger: 0.5,
      ease: "power3.out"
    });
    gsap.from(".profile-pic", {
      opacity: 0,
      y: 50,
      duration: 3,
      stagger: 0.5,
      ease: "power3.out"
    });
    
// Swiper.js initialization for the testimonials slider
     new Swiper(".mySwiper", {
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
      },
    });