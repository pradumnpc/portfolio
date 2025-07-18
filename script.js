// Starter JS for portfolio website
console.log('Portfolio script loaded.');

// Mobile navigation toggle
const navToggle = document.getElementById('nav-toggle');
const nav = document.getElementById('main-nav');
const navLinks = nav.querySelectorAll('a');

function toggleNav() {
  if (navToggle.checked) {
    nav.classList.add('open');
  } else {
    nav.classList.remove('open');
  }
}

navToggle.addEventListener('change', toggleNav);

// Close nav when a link is clicked (on mobile)
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 600) {
      navToggle.checked = false;
      nav.classList.remove('open');
    }
  });
});

// Highlight active nav link on scroll
const sections = document.querySelectorAll('main section');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 80;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute('id');
    }
  });
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
}); 