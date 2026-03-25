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

// 
const sliders = document.querySelectorAll(".slider");

sliders.forEach((slider) => {

const cards = slider.querySelector(".cards");
const card = slider.querySelector(".card");
const left = slider.querySelector(".left");
const right = slider.querySelector(".right");
const container = slider.querySelector(".cards-container");

let scrollAmount = 0;

function getMoveAmount(){

const style = window.getComputedStyle(cards);
const gap = parseInt(style.gap);

return card.offsetWidth + gap;

}

right.onclick = () => {

const maxScroll = cards.scrollWidth - container.offsetWidth;

scrollAmount += getMoveAmount();

if(scrollAmount > maxScroll){
scrollAmount = maxScroll;
}

cards.style.transform = `translateX(-${scrollAmount}px)`;

};

left.onclick = () => {

scrollAmount -= getMoveAmount();

if(scrollAmount < 0){
scrollAmount = 0;
}

cards.style.transform = `translateX(-${scrollAmount}px)`;

};

});

// Animation

const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries)=>{

entries.forEach((entry)=>{

if(entry.isIntersecting){

const allCards = entry.target.parentElement.querySelectorAll(".card");

allCards.forEach((card,index)=>{

setTimeout(()=>{
card.classList.add("show");
}, index * 120);

});

observer.unobserve(entry.target);

}

});

},{
threshold:0.2
});

cards.forEach((card)=>{
observer.observe(card);
});

// Auto Slider
const slider = document.querySelectorAll(".slider");

sliders.forEach((slider)=>{

let interval;

const startAuto = ()=>{

interval = setInterval(()=>{

const right = slider.querySelector(".right");
right.click();

},4000);

};

const stopAuto = ()=>{

clearInterval(interval);

};


slider.addEventListener("mouseenter", startAuto);


slider.addEventListener("mouseleave", stopAuto);

});

// Qoute Section 
const quote = document.querySelector(".quote-text");

const quoteObserver = new IntersectionObserver((entries)=>{

entries.forEach((entry)=>{

if(entry.isIntersecting){
quote.classList.add("show");
}

});

},{
threshold:0.4
});

quoteObserver.observe(quote);