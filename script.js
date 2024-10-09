// Select the hamburger button and the mobile menu
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
const menuLinks = document.querySelectorAll('.menu-link');

// Toggle the mobile menu when the hamburger button is clicked
hamburger.addEventListener('click', () => {
    // Check if the menu is currently hidden
    if (mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.remove('hidden');
        mobileMenu.style.maxHeight = mobileMenu.scrollHeight + 'px'; // Set max height
    } else {
        mobileMenu.style.maxHeight = '0'; // Collapse
        setTimeout(() => mobileMenu.classList.add('hidden'), 300); // Hide after transition
    }
});

// Close the mobile menu when a link is clicked
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.style.maxHeight = '0'; // Collapse
        setTimeout(() => mobileMenu.classList.add('hidden'), 300); // Hide after transition
    });
});
