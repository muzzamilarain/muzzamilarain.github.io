// Mobile Menu Toggle
const btn = document.getElementById('mobile-menu-btn');
const menu = document.getElementById('mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-link');

btn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});

// Close mobile menu when a link is clicked
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.add('hidden');
    });
});

