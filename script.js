// Mobile Menu Toggle
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const closeMenu = document.getElementById('closeMenu');
const mobileBackdrop = document.getElementById('mobileBackdrop');

function openMenu() {
    mobileMenu.classList.add('active');
    mobileBackdrop.classList.add('active');
    hamburger.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeMenuFn() {
    mobileMenu.classList.remove('active');
    mobileBackdrop.classList.remove('active');
    hamburger.classList.remove('active');
    document.body.style.overflow = '';
}

hamburger.addEventListener('click', function(e) {
    e.stopPropagation();
    openMenu();
});

closeMenu.addEventListener('click', function(e) {
    e.stopPropagation();
    closeMenuFn();
});

mobileBackdrop.addEventListener('click', closeMenuFn);

const mobileLinks = mobileMenu.querySelectorAll('a');
mobileLinks.forEach(link => {
    link.addEventListener('click', closeMenuFn);
});

mobileMenu.addEventListener('touchstart', function(e) {
    if (!mobileMenu.classList.contains('active')) {
        e.stopPropagation();
    }
}, { passive: true });

// Hero Slideshow
function initSlideshow(container) {
    const slides = container.querySelectorAll('.hero-slide');
    if (!slides.length) return;
    let current = 0;
    setInterval(() => {
        slides[current].classList.remove('active');
        current = (current + 1) % slides.length;
        slides[current].classList.add('active');
    }, 4000);
}

document.querySelectorAll('.hero-slideshow').forEach(initSlideshow);

// WhatsApp Form Submission
document.getElementById('consultationForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('userName').value;
    const phone = document.getElementById('userPhone').value;
    const service = document.getElementById('userService').value;
    const message = document.getElementById('userMessage').value;

    let whatsappMessage = `Hi, my name is ${name}. I need help with ${service}. My number is ${phone}.`;

    if (message.trim() !== '') {
        whatsappMessage += ` Additional details: ${message}`;
    }

    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/918669291713?text=${encodedMessage}`, '_blank');
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Floating WhatsApp button
const whatsappFloat = document.getElementById('whatsappFloat');

function toggleFloatButton() {
    if (window.scrollY > 300) {
        whatsappFloat.classList.remove('opacity-0', 'translate-y-8', 'pointer-events-none');
        whatsappFloat.classList.add('opacity-100', 'translate-y-0', 'pointer-events-auto');
    } else {
        whatsappFloat.classList.add('opacity-0', 'translate-y-8', 'pointer-events-none');
        whatsappFloat.classList.remove('opacity-100', 'translate-y-0', 'pointer-events-auto');
    }
}

window.addEventListener('scroll', toggleFloatButton);
toggleFloatButton();