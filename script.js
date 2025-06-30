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

  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.create({
      trigger: ".my-skills",
      start: "top 100%",
      onEnter: () => animateBox(),
      onEnterBack: () => animateBox(),
      onLeave: () => resetBox(),
      onLeaveBack: () => resetBox(),
    });

    function animateBox() {
      gsap.fromTo(".my-skills",
        { y: 100, opacity: 0},
        { y: 0, opacity: 1, duration: 4, ease: "power4.out" }
      );
    }

    function resetBox() {
      gsap.set(".my-skills", { y: 100, opacity: 0 });
    }

    // ScrollTrigger.create({
    //   trigger: ".content",
    //   start: "top 100%",
    //   onEnter: () => anmateBox(),
    //   onEnterBack: () => anmateBox(),
    //   onLeave: () => resetBox(),
    //   onLeaveBack: () => resetBox(),
    // });

    // function anmateBox() {
    //   gsap.fromTo(".content",
    //     { y: 100, opacity: 0 },
    //     { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    //   );
    // }

    // function resetBox() {
    //   gsap.set(".content", { y: 100, opacity: 0 });
    // }

    