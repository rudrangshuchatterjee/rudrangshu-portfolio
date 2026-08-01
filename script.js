
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    if(navLinks.classList.contains("active")){
        menuToggle.innerHTML = "✕";
    }else{
        menuToggle.innerHTML = "☰";
    }
menuToggle.addEventListener("click", () => {
    console.log("Menu clicked!");

    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
        menuToggle.textContent = "✕";
    } else {
        menuToggle.textContent = "☰";
    }
});
});
// ==========================
// Typing Animation
// ==========================

const words = [
    "Aspiring Web Developer",
    "Learning Python",
    "AI Enthusiast",
    "Future Software Engineer"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingElement = document.getElementById("typing");

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!isDeleting) {
        typingElement.textContent = currentWord.substring(0, charIndex++);
    } else {
        typingElement.textContent = currentWord.substring(0, charIndex--);
    }

    let speed = 100;

    if (isDeleting) speed = 50;

    if (!isDeleting && charIndex === currentWord.length + 1) {
        speed = 1500;
        isDeleting = true;
    }

    if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();
// ==========================
// Scroll Reveal Animation
// ==========================

const hiddenElements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }

    });

});

hiddenElements.forEach((el) => observer.observe(el));