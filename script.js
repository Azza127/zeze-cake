const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const mobileMenu = document.querySelector(".mobile-menu");
const closeBtn = document.querySelector(".close-btn");

menuToggle.addEventListener("click", () => {
  mobileMenu.classList.add("active");
  menuToggle.classList.add("hide");
  document.body.style.overflow = "hidden";
});

closeBtn.addEventListener("click", () => {
  mobileMenu.classList.remove("active");
  menuToggle.classList.remove("hide");
  document.body.style.overflow = "auto";
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
      mobileMenu.classList.remove("active");
      menuToggle.classList.remove("hide");
      document.body.style.overflow = "auto";
  }
});

// /////////////

const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
        entry.target.classList.add("show");
        }
    });
    });

cards.forEach(card=>{
    observer.observe(card);
});