// Function to check if an element is in the viewport
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to add the visible class to elements in the viewport
function animateOnScroll() {
    const leftSpan = document.querySelector('.animated-left');
    const rightSpan = document.querySelector('.animated-right');

    if (isElementInViewport(leftSpan)) {
        leftSpan.classList.add('visible');
    }

    if (isElementInViewport(rightSpan)) {
        rightSpan.classList.add('visible');
    }
}

// Initial check and event listener for scroll
window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll); // Check on page load