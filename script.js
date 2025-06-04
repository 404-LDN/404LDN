// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('open');
});

// Smooth Scrolling for internal page links (e.g., from home to shop section)
// This will work if you have a link on the same page pointing to an ID
// For navigating between separate HTML files, standard href is used.
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        // Only prevent default if it's an internal hash link on the current page
        const targetId = this.getAttribute('href');
        if (targetId && document.querySelector(targetId)) {
            e.preventDefault();
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
            // Close mobile menu if open
            if (window.innerWidth <= 768) {
                const navLinks = document.querySelector('.nav-links');
                navLinks.classList.remove('active');
                document.querySelector('.hamburger').classList.remove('open');
            }
        }
    });
});

// Drop Countdown Timer (only runs on index.html)
// Check if the countdown elements exist on the page before trying to update them
if (document.getElementById("countdown")) {
    // Set the date and time for the next drop (YYYY-MM-DDTHH:MM:SS)
    const dropDate = new Date("2025-07-20T18:00:00").getTime(); // Example: July 20, 2025, 6:00 PM BST

    const x = setInterval(function() {
        const now = new Date().getTime();
        const distance = dropDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("days").innerHTML = String(days).padStart(2, '0');
        document.getElementById("hours").innerHTML = String(hours).padStart(2, '0');
        document.getElementById("minutes").innerHTML = String(minutes).padStart(2, '0');
        document.getElementById("seconds").innerHTML = String(seconds).padStart(2, '0');

        if (distance < 0) {
            clearInterval(x);
            document.getElementById("countdown").innerHTML = "<p>Drop is LIVE!</p>";
            // Optionally, change CTA text or redirect
            const ctaButton = document.querySelector('.cta-button');
            if (ctaButton) {
                ctaButton.textContent = "Shop Now!";
                ctaButton.href = "shop.html"; // Redirect to the shop page
            }
        }
    }, 1000);
}

// Hero Image Parallax Effect (subtle) - only applies to index.html
if (document.getElementById('home')) {
    window.addEventListener('scroll', function() {
        const homeSection = document.getElementById('home');
        const scrollPosition = window.pageYOffset;
        homeSection.style.backgroundPositionY = -scrollPosition * 0.2 + 'px'; // Adjust speed as needed
    });
}
