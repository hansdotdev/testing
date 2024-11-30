

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default click behavior
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth', // Enable smooth scrolling
                block: 'start', // Align to the start of the section
            });
        }
    });
});

// Highlight active section icon
const sections = document.querySelectorAll(".section");
const navLinks = document.querySelectorAll(".icon-navbar ul li");

window.addEventListener("scroll", () => {
    let currentSection = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 50) {
            currentSection = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {
        const anchor = link.querySelector("a");
        const href = anchor.getAttribute("href").replace("#", "");
        if (href === currentSection) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
});

// Type effect for text
const descriptions = [
    "beginner-level programmer and web developer",
    "photo and video editor",
    "UI/UX designer"
];

const dynamicText = document.querySelector(".dynamic-description");
const cursor = document.querySelector(".cursor");

let currentIndex = 0; 
let currentCharIndex = 0; 
let isDeleting = false;
let delay = 100; // Typing speed

function typeEffect() {
    const currentText = descriptions[currentIndex];

    // Typing characters
    if (!isDeleting) {
        dynamicText.textContent = currentText.substring(0, currentCharIndex++);
        if (currentCharIndex > currentText.length) {
            // Pause at the end of typing
            isDeleting = true;
            setTimeout(typeEffect, 2000); // Wait 2 seconds before deleting
            return;
        }
    }
    // Deleting characters
    else {
        dynamicText.textContent = currentText.substring(0, currentCharIndex--);
        if (currentCharIndex < 0) {
            // Move to the next text
            isDeleting = false;
            currentIndex = (currentIndex + 1) % descriptions.length;
        }
    }

    // Speed for typing and deleting
    setTimeout(typeEffect, isDeleting ? 50 : delay);
}

// Start the typing effect
typeEffect();

//Cursor blink effect
setInterval(() => {
    cursor.style.opacity = cursor.style.opacity === "1" ? "0" : "1";
}, 500);

// Transition effects
document.addEventListener("DOMContentLoaded", function () {
    const fadeInElements = document.querySelectorAll(".fade-in");

    const fadeInObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    entry.target.classList.remove("hidden"); // Ensure fade-out class is removed
                } else {
                    entry.target.classList.add("hidden");
                    entry.target.classList.remove("visible"); // Remove fade-in class when out of view
                }
            });
        },
        { threshold: 0.1 }
    );

    fadeInElements.forEach((el) => fadeInObserver.observe(el));
});

// Animation for skill images
const skills = document.querySelectorAll('.skills-container img');

const skillsObserverCallback = (entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            // Add 'visible' class when in view
            entry.target.classList.add('visible');
            entry.target.classList.remove('hidden');
        } else {
            // Add 'hidden' class when out of view
            entry.target.classList.remove('visible');
            entry.target.classList.add('hidden');
        }
    });
};

const skillsObserver = new IntersectionObserver(skillsObserverCallback, { threshold: 0.2 });

skills.forEach((skill) => {
    skillsObserver.observe(skill);
});

// Social icons animation
const socialIcons = document.querySelector('.social-icons');

const socialIconsObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            // Add 'visible' class when in view
            socialIcons.classList.add('visible');
        } else {
            // Remove 'visible' class when out of view
            socialIcons.classList.remove('visible');
        }
    });
}, { threshold: 0.1 });

socialIconsObserver.observe(socialIcons);


