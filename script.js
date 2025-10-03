// === script.js ===

// Mobile Menu Toggle
const mobileMenu = document.querySelector('.mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            navLinks.classList.remove('active');
        }
    });
});

// Modal functionality
const activityCards = document.querySelectorAll('.activity-card');
const modals = document.querySelectorAll('.modal');
const closeButtons = document.querySelectorAll('.close-modal');

activityCards.forEach(card => {
    card.addEventListener('click', () => {
        const modalId = card.getAttribute('data-modal');
        const modal = document.getElementById(modalId);
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
});

closeButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal');
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
});

modals.forEach(modal => {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
});

// Form submission
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    alert(`Thank you, ${name}! Your message has been received. I'll get back to you soon at ${email}.`);
    contactForm.reset();
});

// Animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 1s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.skill-item, .activity-card, .contact-item').forEach(el => {
    observer.observe(el);
});

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(102, 126, 234, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
        header.style.backdropFilter = 'none';
    }
});
