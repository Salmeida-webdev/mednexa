// ======================================
// HERO FLOATING ANIMATION
// ======================================

const floatingCard = document.querySelector(".floating-card");

if (floatingCard) {
  let floatDirection = 1;

  setInterval(() => {
    floatingCard.style.transform = `translateY(${floatDirection * -10}px)`;

    floatDirection *= -1;
  }, 2500);
}

// ======================================
// IMAGE HOVER GLOW EFFECT
// ======================================

const imageBoxes = document.querySelectorAll(".image-box, .image-full");

imageBoxes.forEach((box) => {
  box.addEventListener("mousemove", (e) => {
    const rect = box.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    box.style.background = `
      radial-gradient(
        circle at ${x}px ${y}px,
        rgba(13, 99, 255, 0.08),
        transparent 45%
      )
    `;
  });

  box.addEventListener("mouseleave", () => {
    box.style.background = "transparent";
  });
});

// ======================================
// STAGGER ANIMATION
// ======================================

const staggerItems = document.querySelectorAll(
  ".step, .cards-mini div, .stats div",
);

staggerItems.forEach((item, index) => {
  item.style.transitionDelay = `${index * 0.08}s`;
});

// ======================================
// HERO TEXT FADE-IN
// ======================================

window.addEventListener("load", () => {
  const heroText = document.querySelector(".hero-text");
  const heroImage = document.querySelector(".hero-image");

  if (heroText) {
    heroText.style.opacity = "1";
    heroText.style.transform = "translateX(0)";
  }

  if (heroImage) {
    heroImage.style.opacity = "1";
    heroImage.style.transform = "translateX(0)";
  }
});

// ======================================
// SCROLL IMAGE PARALLAX
// ======================================

const parallaxImages = document.querySelectorAll(".image-box img");

window.addEventListener("scroll", () => {
  const scrollTop = window.pageYOffset;

  parallaxImages.forEach((img) => {
    const speed = 0.03;

    img.style.transform = `translateY(${scrollTop * speed}px)`;
  });
});

// ======================================
// BUTTON GLOW INTERACTION
// ======================================

const primaryButtons = document.querySelectorAll(".btn-primary, .btn-nav");

primaryButtons.forEach((button) => {
  button.addEventListener("mouseenter", () => {
    button.style.boxShadow = "0 24px 45px rgba(13, 99, 255, 0.4)";
  });

  button.addEventListener("mouseleave", () => {
    button.style.boxShadow = "0 18px 35px rgba(13, 99, 255, 0.25)";
  });
});

// ======================================
// CARD HOVER TILT EFFECT
// ======================================

const cards = document.querySelectorAll(".step, .cards-mini div, .stats div");

cards.forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = (y / rect.height - 0.5) * -6;
    const rotateY = (x / rect.width - 0.5) * 6;

    card.style.transform = `
      perspective(1000px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      translateY(-4px)
    `;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = `
      perspective(1000px)
      rotateX(0deg)
      rotateY(0deg)
      translateY(0)
    `;
  });
});

// ======================================
// WHATSAPP BUTTON FLOAT
// ======================================

const whatsappButton = document.querySelector(".whatsapp-float");

if (whatsappButton) {
  setInterval(() => {
    whatsappButton.classList.toggle("pulse-effect");
  }, 2000);
}

// ======================================
// FADE-IN ON LOAD
// ======================================

window.addEventListener("DOMContentLoaded", () => {
  document.body.style.opacity = "1";
});

// ======================================
// SECTION TITLE EFFECT
// ======================================

const sectionTitles = document.querySelectorAll(".section h2");

sectionTitles.forEach((title) => {
  title.addEventListener("mouseenter", () => {
    title.style.letterSpacing = "-0.03em";
  });

  title.addEventListener("mouseleave", () => {
    title.style.letterSpacing = "-0.055em";
  });
});

// ======================================
// TRUST LOGOS FLOAT
// ======================================

const trustSection = document.querySelector(".trust img");

if (trustSection) {
  let direction = 1;

  setInterval(() => {
    trustSection.style.transform = `
      translateY(${direction * -4}px)
    `;

    direction *= -1;
  }, 3000);
}
