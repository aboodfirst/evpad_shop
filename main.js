// Navigation Active Link
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("#navbar a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
      current = section.id;
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// Scroll to top on logo click
document.getElementById("logo").addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// Typing Animation Loop
const phrases = [
  "Welcome to EvPad Shop",
  "Level Up Your Setup",
  "Game On!",
  "Premium Gaming Accessories"
];

const typewriter = document.querySelector('.typewriter-text');
let i = 0;
let j = 0;
let currentPhrase = '';
let isDeleting = false;

function type() {
  currentPhrase = phrases[j];

  if (!isDeleting && i <= currentPhrase.length) {
    typewriter.textContent = currentPhrase.slice(0, i);
    i++;
    setTimeout(type, 120);
  } else if (isDeleting && i > 0) {
    typewriter.textContent = currentPhrase.slice(0, i - 1);
    i--;
    setTimeout(type, 70);
  } else {
    isDeleting = !isDeleting;

    if (!isDeleting) {
      j = (j + 1) % phrases.length;
      setTimeout(type, 300);
    } else {
      setTimeout(type, 3000);
    }
  }
}

window.addEventListener("load", () => {
  type(); // Starts typing immediately, no delay
}); 
// Product Data
const products = [
  {
    name: "Ajjaz AK820",
    price: "17.9 OMR",
    image: "images/ajazz-ak820.jpg",
    description: "The Ajjaz AK820 is a mechanical keyboard built for speed and comfort. Features: Volume wheel, Red switches, More than 18 different RGB effects, Size: 75%, (Custom keyboard), comes with keycap puller."
  },
  {
    name: "HXSJ V900",
    price: "14.9 OMR",
    image: "images/hsxj-keyboard.jpg",
    description: "HXSJ S700 Keyboard is a gaming keyboard. Built for performance and comfort. Features: Red switches , all accessories inside the box( more switches + Keycap Pullar), user manual for RGB lights and others."
  },
  {
    name: "HXJS S700",
    price: "8 OMR",
    image: "images/hsxj-mouse.jpg",
    description: "High-precision HXJS mouse with customizable DPI settings and ultra-lightweight design. Great for FPS and MOBA games. Features: 10 additional buttons ( programmable buttons), more than 13 Different RGB effects, clicky buttons ( with amazing sound 🎧), 12800 DPI"
  },
  {
    name: "Porsche Cyan Mousepad",
    price: "4 OMR",
    image: "images/porsche-mousepad.jpg",
    description: "Smooth cyan and white Porsche-inspired mousepad. Perfect surface for precision tracking and fast swipes."
  }
];

const productsGrid = document.getElementById('productsGrid');

products.forEach((product, index) => {
  const card = document.createElement('div');
  card.className = 'product-card';
  card.innerHTML = `
    <img src="${product.image}" alt="${product.name}" class="product-image" />
    <div class="product-info">
      <h3 class="product-name">${product.name}</h3>
      <p class="product-price">${product.price}</p>
    </div>
  `;
  card.addEventListener("click", () => showModal(index));
  productsGrid.appendChild(card);
});

// Modal Logic
const modal = document.getElementById("productModal");
const modalImg = document.getElementById("modalImage");
const modalName = document.getElementById("modalName");
const modalDesc = document.getElementById("modalDescription");
const closeBtn = document.querySelector(".close-btn");

function showModal(index) {
  const p = products[index];
  modal.style.display = "block";
  modalImg.src = p.image;
  modalName.textContent = p.name;
  modalDesc.textContent = p.description;
}

function closeModal() {
  modal.style.display = "none";
}

closeBtn.addEventListener("click", closeModal);
window.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});
