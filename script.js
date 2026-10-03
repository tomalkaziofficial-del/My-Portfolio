// SPA Navigation Logic
function navigateTo(viewId) {
    // 1. Hide all views
    const views = document.querySelectorAll('.page-view');
    views.forEach(view => view.classList.remove('active'));
    
    // 2. Show the targeted view
    const targetView = document.getElementById(viewId);
    if(targetView) {
        targetView.classList.add('active');
        window.scrollTo(0, 0); // Scroll to top when changing page
    }

    // 3. Update Bottom Nav active state
    const navItems = document.querySelectorAll('.bottom-nav .nav-item');
    navItems.forEach(item => item.classList.remove('active'));

    // Map views to bottom nav buttons
    const navMap = {
        'view-home': 'nav-home',
        'view-projects': 'nav-projects',
        'view-pages': 'nav-pages',
        'view-contact': 'nav-contact'
    };
    
    const activeNavId = navMap[viewId];
    if (activeNavId) {
        document.getElementById(activeNavId).classList.add('active');
    }
}


// Typing Animation
const textArray = ["CSE Graduate.", "AI/ML Enthusiast.", "Web Developer."];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingTextElement = document.querySelector('.typing-text');

function type() {
    if(!typingTextElement) return;
    const currentText = textArray[textIndex];
    
    if (isDeleting) {
        typingTextElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingTextElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
    }

    let typeSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentText.length) {
        typeSpeed = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % textArray.length;
        typeSpeed = 500;
    }

    setTimeout(type, typeSpeed);
}

document.addEventListener("DOMContentLoaded", function() {
    if(textArray.length) setTimeout(type, 1000);
});