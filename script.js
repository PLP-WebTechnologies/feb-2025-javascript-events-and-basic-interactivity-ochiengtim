 // Typewriter effect
const title = document.getElementById('title');
let txt = title.textContent;
let i = 0;
title.textContent = '';

function typeWriter() {
  if (i < txt.length) {
    title.textContent += txt.charAt(i);
    i++;
    setTimeout(typeWriter, 80);
  }
}
typeWriter();

// Form validation
const form = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const modal = document.getElementById('modal');
const closeModal = document.getElementById('closeModal');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  let valid = true;

  if (nameInput.value.trim() === '') {
    nameError.style.display = 'block';
    valid = false;
  } else {
    nameError.style.display = 'none';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailInput.value)) {
    emailError.style.display = 'block';
    valid = false;
  } else {
    emailError.style.display = 'none';
  }

  if (valid) {
    modal.style.display = 'block';
    form.reset();
  }
});

closeModal.onclick = () => {
  modal.style.display = 'none';
};

window.onclick = function (e) {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
};

// Hack Button Interactions
const hackBtn = document.getElementById('hackBtn');

hackBtn.addEventListener('mouseover', () => {
  hackBtn.style.boxShadow = '0 0 15px #00ffcc';
});

hackBtn.addEventListener('mouseout', () => {
  hackBtn.style.boxShadow = 'none';
});

hackBtn.addEventListener('dblclick', () => {
  hackBtn.textContent = ' SYSTEM BREACHED';
  hackBtn.style.background = 'red';
  hackBtn.style.color = 'white';
});

// Theme toggle
const toggle = document.getElementById('themeToggle');
toggle.addEventListener('change', () => {
  document.body.classList.toggle('dark');
});

