/* ===============================
   MOBILE MENU TOGGLE
================================= */
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-links a");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

/* Close menu when link clicked (mobile fix) */
navItems.forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});


/* ===============================
   SMOOTH SCROLL
================================= */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({ behavior: "smooth" });
    });
});


/* ===============================
   ACTIVE NAV LINK ON SCROLL
================================= */
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navItems.forEach(link => {
        link.classList.remove("active-link");
        if (link.getAttribute("href").includes(current)) {
            link.classList.add("active-link");
        }
    });
});


/* ===============================
   TYPING EFFECT (Improved)
================================= */
const roles = ["Front-end Web Developer", "Python Developer", "UI Designer"];
let roleIndex = 0;
let charIndex = 0;
const typingElement = document.querySelector(".typing");

function typeEffect() {
    if (charIndex < roles[roleIndex].length) {
        typingElement.textContent += roles[roleIndex][charIndex];
        charIndex++;
        setTimeout(typeEffect, 80);
    } else {
        setTimeout(eraseEffect, 1200);
    }
}

function eraseEffect() {
    if (charIndex > 0) {
        typingElement.textContent = roles[roleIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseEffect, 40);
    } else {
        roleIndex = (roleIndex + 1) % roles.length;
        setTimeout(typeEffect, 400);
    }
}

typeEffect();


/* ===============================
   SCROLL REVEAL ANIMATION
================================= */
const hiddenElements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.2
});

hiddenElements.forEach(el => observer.observe(el));


/* ===============================
   THEME TOGGLE WITH SAVE
================================= */
const toggleBtn = document.getElementById("theme-toggle");

/* Load saved theme */
if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light-mode");
    toggleBtn.textContent = "🌙";
} else {
    toggleBtn.textContent = "☀️";
}

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
        localStorage.setItem("theme", "light");
        toggleBtn.textContent = "🌙";
    } else {
        localStorage.setItem("theme", "dark");
        toggleBtn.textContent = "☀️";
    }
});


/* ===============================
   NAVBAR SHADOW ON SCROLL
================================= */
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.classList.add("nav-shadow");
    } else {
        navbar.classList.remove("nav-shadow");
    }
});


/* ===============================
   SCROLL PROGRESS BAR
================================= */
const progressBar = document.createElement("div");
progressBar.classList.add("progress-bar");
document.body.appendChild(progressBar);

window.addEventListener("scroll", () => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;

    const scrollPercent = (scrollTop / scrollHeight) * 100;
    progressBar.style.width = scrollPercent + "%";
});
