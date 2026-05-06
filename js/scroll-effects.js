// ======================================
// SCROLL REVEAL SYSTEM
// ======================================

const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const windowHeight = window.innerHeight;

  revealElements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;

    const revealPoint = 120;

    if (elementTop < windowHeight - revealPoint) {
      element.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();

// ======================================
// PARALLAX BACKGROUND EFFECT
// ======================================

const heroBackground = document.querySelector(".hero-bg");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  if (heroBackground) {
    heroBackground.style.transform = `
      translateY(${scrollY * 0.12}px)
      scale(1.05)
    `;
  }
});

// ======================================
// HERO ELEMENTS FLOAT
// ======================================

const heroElementsLayer = document.querySelector(".hero-elements");

window.addEventListener("mousemove", (e) => {
  if (!heroElementsLayer) return;

  const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
  const moveY = (e.clientY - window.innerHeight / 2) * 0.01;

  heroElementsLayer.style.transform = `
    translate(${moveX}px, ${moveY}px)
  `;
});

// ======================================
// SMOOTH IMAGE REVEAL
// ======================================

const images = document.querySelectorAll(".image-box img, .image-full img");

function imageReveal() {
  const triggerBottom = window.innerHeight * 0.9;

  images.forEach((image) => {
    const imageTop = image.getBoundingClientRect().top;

    if (imageTop < triggerBottom) {
      image.style.opacity = "1";
      image.style.transform = "translateY(0)";
    }
  });
}

images.forEach((image) => {
  image.style.opacity = "0";
  image.style.transform = "translateY(40px)";
  image.style.transition = "opacity 1s ease, transform 1s ease";
});

window.addEventListener("scroll", imageReveal);

imageReveal();

// ======================================
// SECTION BACKGROUND FADE
// ======================================

const sections = document.querySelectorAll(".section");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  sections.forEach((section) => {
    const offset = section.offsetTop;
    const height = section.offsetHeight;

    if (
      scrollY > offset - window.innerHeight / 1.2 &&
      scrollY < offset + height
    ) {
      section.style.opacity = "1";
    } else {
      section.style.opacity = "0.98";
    }
  });
});

// ======================================
// STEP CARD STAGGER SCROLL
// ======================================

const stepCards = document.querySelectorAll(".step");

function animateSteps() {
  const trigger = window.innerHeight * 0.88;

  stepCards.forEach((card, index) => {
    const cardTop = card.getBoundingClientRect().top;

    if (cardTop < trigger) {
      setTimeout(() => {
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
      }, index * 120);
    }
  });
}

stepCards.forEach((card) => {
  card.style.opacity = "0";
  card.style.transform = "translateY(50px)";
  card.style.transition = "opacity 0.8s ease, transform 0.8s ease";
});

window.addEventListener("scroll", animateSteps);

animateSteps();

// ======================================
// FLOATING DASHBOARD EFFECT
// ======================================

const floatingDashboard = document.querySelector(".floating-card");

window.addEventListener("scroll", () => {
  if (!floatingDashboard) return;

  const scrollY = window.scrollY;

  floatingDashboard.style.transform = `
    translateY(${Math.sin(scrollY * 0.01) * 8}px)
  `;
});

// ======================================
// BUTTON SCROLL GLOW
// ======================================

const glowButtons = document.querySelectorAll(".btn-primary");

window.addEventListener("scroll", () => {
  glowButtons.forEach((button) => {
    const rect = button.getBoundingClientRect();

    if (rect.top < window.innerHeight && rect.bottom > 0) {
      button.style.boxShadow = "0 22px 45px rgba(13, 99, 255, 0.35)";
    } else {
      button.style.boxShadow = "0 18px 35px rgba(13, 99, 255, 0.25)";
    }
  });
});

// ======================================
// FAQ REVEAL EFFECT
// ======================================

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item, index) => {
  item.style.transitionDelay = `${index * 0.08}s`;
});

// ======================================
// FOOTER FADE-IN
// ======================================

const footer = document.querySelector(".footer");

function footerReveal() {
  if (!footer) return;

  const footerTop = footer.getBoundingClientRect().top;

  if (footerTop < window.innerHeight - 100) {
    footer.style.opacity = "1";
    footer.style.transform = "translateY(0)";
  }
}

footer.style.opacity = "0";
footer.style.transform = "translateY(60px)";
footer.style.transition = "opacity 1s ease, transform 1s ease";

window.addEventListener("scroll", footerReveal);

footerReveal();
