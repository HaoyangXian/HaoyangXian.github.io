// main.js - Minimal interactive logic
document.addEventListener("DOMContentLoaded", () => {
    console.log("Welcome to Haoyang Xian's academic portfolio.");
    
    // Future expansion: Add smooth scrolling for navigation links if a sticky nav is added later.
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});