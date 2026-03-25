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

// validation
document.addEventListener("DOMContentLoaded", function(){

  const form = document.getElementById("enquireForm");

  const nameInput = document.getElementById("name");
  const phoneInput = document.getElementById("phone");

  const nameError = document.getElementById("nameError");
  const phoneError = document.getElementById("phoneError");

  const addressInput = document.getElementById("address");
  const addressError = document.getElementById("addressError");

  form.addEventListener("submit", function(e){

    e.preventDefault();

    let valid = true;

    const nameRegex = /^[a-zA-Z\s]+$/;
    const phoneRegex = /^[0-9]+$/;
    const addressRegex = /^[a-zA-Z0-9\s,-\/]+$/;

    nameError.textContent = "";
    phoneError.textContent = "";
    addressError.textContent = "";

    // Name validation
    if(!nameRegex.test(nameInput.value.trim())){
      nameError.textContent = "Name must contain letters only";
      valid = false;
    }

    // Phone validation
    if(!phoneRegex.test(phoneInput.value.trim())){
      phoneError.textContent = "Phone must contain numbers only";
      valid = false;
    }

    // Address validation
    if(!addressRegex.test(addressInput.value.trim())){
      addressError.textContent = "Address must contain letters and numbers only";
      valid = false;
    }

    // Watsapp
    if(valid){

      const name = nameInput.value;
      const phone = phoneInput.value;
      const address = addressInput.value;
      const vision = document.getElementById("vision").value;

      const message = `Hello Zeze Cakes
      Name: ${name}
      Phone: ${phone}
      Address: ${address}
      Order: ${vision}`;

      const encodedMessage = encodeURIComponent(message);

      const whatsappNumber = "201017158284";

      const url = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

      window.location.href = url;

    }

  });

});