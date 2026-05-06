// ===============================
// HEADER SCROLL EFFECT
// ===============================

const header = document.getElementById("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 40) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// ===============================
// MOBILE MENU
// ===============================

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

// CLOSE MENU ON LINK CLICK

const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });
});

// ===============================
// FAQ ACCORDION
// ===============================

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  const button = item.querySelector("button");

  button.addEventListener("click", () => {
    const isActive = item.classList.contains("active");

    faqItems.forEach((faq) => {
      faq.classList.remove("active");
    });

    if (!isActive) {
      item.classList.add("active");
    }
  });
});

// ===============================
// ACTIVE NAVIGATION
// ===============================

const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", () => {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 120;
    const sectionId = current.getAttribute("id");

    const navLink = document.querySelector(`.nav-menu a[href*="${sectionId}"]`);

    if (!navLink) return;

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      navLink.classList.add("active-link");
    } else {
      navLink.classList.remove("active-link");
    }
  });
});

// ===============================
// FLOATING EFFECT HERO IMAGE
// ===============================

const heroImage = document.querySelector(".hero-image");

window.addEventListener("mousemove", (e) => {
  if (!heroImage) return;

  const x = (window.innerWidth / 2 - e.pageX) / 40;
  const y = (window.innerHeight / 2 - e.pageY) / 40;

  heroImage.style.transform = `translate(${x}px, ${y}px)`;
});

// ===============================
// BUTTON RIPPLE EFFECT
// ===============================

const buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {
  button.addEventListener("mouseenter", () => {
    button.style.transform = "translateY(-3px)";
  });

  button.addEventListener("mouseleave", () => {
    button.style.transform = "translateY(0)";
  });
});

// ===============================
// PARALLAX EFFECT
// ===============================

const heroElements = document.querySelector(".hero-elements");

window.addEventListener("scroll", () => {
  const scrollTop = window.pageYOffset;

  if (heroElements) {
    heroElements.style.transform = `translateY(${scrollTop * 0.08}px)`;
  }
});

// ===============================
// PAGE LOADER EFFECT
// ===============================

window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});

// ===============================
// SMOOTH REVEAL INITIALIZATION
// ===============================

document.querySelectorAll(".reveal").forEach((el, index) => {
  el.style.transitionDelay = `${index * 0.08}s`;
});
