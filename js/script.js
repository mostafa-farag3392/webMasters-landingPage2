function animateValue(id, start, end, duration) {
    let range = end - start;
    let current = start;
    let increment = end > start ? 1 : -1;
    let stepTime = Math.abs(Math.floor(duration / range));
    let obj = document.getElementById(id);
    let timer = setInterval(function() {
        current += increment;
        obj.innerText = current;
        if (current == end) {
            clearInterval(timer);
        }
    }, stepTime);
}

function startCountersAnimation() {
    animateValue("projectsCounter", 0, 400, 2000); // Adjust duration as needed
    animateValue("clientsCounter", 0, 600, 2000); // Adjust duration as needed
    animateValue("stylesCounter", 0, 100, 2000);   // Adjust duration as needed
}

// Start animation when the page is fully loaded
window.addEventListener('load', startCountersAnimation);





// Function to scroll to the top of the page
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Show or hide the scroll-to-top button based on scroll position
window.addEventListener('scroll', function() {
    var scrollToTopButton = document.getElementById('scrollToTopBtn');
    if (window.scrollY > 300) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});