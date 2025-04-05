document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');

    mobileMenuBtn.addEventListener('click', () => {
        navMenu.classList.toggle('show');
    });

    // Dark mode toggle
    const darkModeToggle = document.querySelector('.dark-mode-toggle');
    const body = document.body;

    if (localStorage.getItem('darkMode') === 'enabled') {
        body.classList.add('dark-mode');
        darkModeToggle.textContent = '☀️';
    }

    darkModeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('darkMode', 'enabled');
            darkModeToggle.textContent = '☀️';
        } else {
            localStorage.setItem('darkMode', null);
            darkModeToggle.textContent = '🌙';
        }
    });

    // Hero section functionality
    const heroVideo = document.querySelector('.hero-video');
    const ctaButton = document.querySelector('.hero-content .cta-btn');

    heroVideo.addEventListener('loadeddata', () => {
        heroVideo.play().catch(error => {
            console.log("Auto-play was prevented:", error);
        });
    });

    ctaButton.addEventListener('click', () => {
        const nextSection = document.querySelector('.hero').nextElementSibling;
        if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth' });
        }
    });

    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const heroContent = document.querySelector('.hero-content');
        if (heroContent) {
            heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });

    // Set footer year
    document.getElementById('year').textContent = new Date().getFullYear();

    // Initialize AOS
    AOS.init();
});
function subscribe() {
    alert("Stay tuned! You'll get notified.");
}

function scrollLeft() {
    document.getElementById("carousel").scrollBy({ left: -300, behavior: 'smooth' });
}

function scrollRight() {
    document.getElementById("carousel").scrollBy({ left: 300, behavior: 'smooth' });
}

// Auto-scroll to the left every 5 seconds
setInterval(() => {
    scrollLeft();
}, 3000);