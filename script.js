//mobile menu toggle functionality
const btn = document.querySelector('.mobile-menu-button');
    const menu = document.querySelector('.mobile-menu');
    const closebtn = document.querySelector('.closeMenu');

    btn.addEventListener('click', () => {
        menu.classList.remove('-translate-x-full');
});
    closebtn.addEventListener('click', () => {
      menu.classList.add('-translate-x-full')
    })


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

// .content animation
ScrollTrigger.create({
  trigger: ".content",
  start: "top 80%",
  onEnter: animateContent,
  onEnterBack: animateContent,
  onLeave: resetContent,
  onLeaveBack: resetContent,
});
function animateContent() {
  gsap.fromTo(".content", { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "power4.out" });
}
function resetContent() {
  gsap.set(".content", { y: 100, opacity: 0 });
}

// .about-header animation
ScrollTrigger.create({
  trigger: ".about-header",
  start: "top 80%",
  onEnter: animateAbout,
  onEnterBack: animateAbout,
  onLeave: resetAbout,
  onLeaveBack: resetAbout,
});
function animateAbout() {
  gsap.fromTo(".about-header", { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 4, ease: "power4.out" });
}
function resetAbout() {
  gsap.set(".about-header", { y: 100, opacity: 0 });
}

// .mySwiper animation
ScrollTrigger.create({
  trigger: ".mySwiper",
  start: "top 80%",
  onEnter: animateSwiper,
  onEnterBack: animateSwiper,
  onLeave: resetSwiper,
  onLeaveBack: resetSwiper,
});
function animateSwiper() {
  gsap.fromTo(".mySwiper", { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 4, ease: "power4.out" });
}
function resetSwiper() {
  gsap.set(".mySwiper", { y: 100, opacity: 0 });
}

// .my-skills animation
ScrollTrigger.create({
  trigger: ".my-skills",
  start: "top 80%",
  onEnter: animateSkills,
  onEnterBack: animateSkills,
  onLeave: resetSkills,
  onLeaveBack: resetSkills,
});
function animateSkills() {
  gsap.fromTo(".my-skills", { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 4, ease: "power4.out" });
}
function resetSkills() {
  gsap.set(".my-skills", { y: 100, opacity: 0 });
}

    