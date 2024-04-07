// Toggle Navbar

let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("fa-xmark");
  navbar.classList.toggle("active");
};

//Scroll Section Active link

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};

//Sticky Navbar

let header = document.querySelector("header");
header.classList.toggle("sticky", window.scrollY > 100);

//Remove Toggle Icon and Navbar

menuIcon.classList.remove("fa-xmark");
navbar.classList.remove("active");

// Common options for ScrollReveal
const commonOptions = {
  duration: 2000,
  delay: 200,
  distance: "80px",
};

// Initialize ScrollReveal
ScrollReveal().reveal(".home-content, heading", {
  ...commonOptions,
  origin: "top",
});
ScrollReveal().reveal(
  ".home-img, .services-container, .portfolio-box, .contact form",
  { ...commonOptions, origin: "bottom" }
);
ScrollReveal().reveal(".home-content h1, .about-img", {
  ...commonOptions,
  origin: "left",
});
ScrollReveal().reveal(".home-content p, .about-content", {
  ...commonOptions,
  origin: "right",
});

//Typed Js

const typed = new Typed(".multiple-text", {
  strings: ["Web Developer", "Frontend Developer",],
  typeSpeed: 70,
  backSpeed: 70,
  backDelay: 1000,
  loop: true,
});
