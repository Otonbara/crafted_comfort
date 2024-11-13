// Mobile Navigation Menu Toggle Functionality
function openNav() {
  document.getElementById("mobileNav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mobileNav").style.width = "0";
}

// Add event listener to hamburger menu
document.querySelector('.hamburger').addEventListener('click', () => {
  // Open mobile navigation menu
  openNav();
});

// Add event listener to close button
document.querySelector('.close-btn').addEventListener('click', () => {
  // Close mobile navigation menu
  closeNav();
});

const salesCounter = document.getElementById('SalesCounter');
const customerCounter = document.getElementById('customers');

// Define the animation function
function animateCounter(element, targetValue, duration) {
  // Set the initial value to 0
  let currentValue = 0;
  const increment = Math.ceil(targetValue / (duration / 5)); // Calculate the increment value

  // Animate the counter
  const intervalId = setInterval(() => {
    currentValue += increment;
    element.textContent = currentValue.toLocaleString(); // Format the value with commas

    if (currentValue >= targetValue) {
      clearInterval(intervalId);
    }
  }, 70); // Update every 10ms
}

animateCounter(salesCounter, 100, 50);
animateCounter(customerCounter, 600, 50);

const swiper = new Swiper('.swiper', {
  effect: 'slide',
  grabCursor: true,
  loop: true,
  speed: 600,
      autoplay: {
          delay: 3000,
          disableOnInteraction: false,
      },
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
  // Responsive breakpoints
  breakpoints: {
      // when window width is >= 320px
      320: {
          slidesPerView: 1,
          spaceBetween: 20
      },
      // when window width is >= 768px
      768: {
          slidesPerView: 2,
          spaceBetween: 30
      },
      // when window width is >= 1024px
      1024: {
          slidesPerView: 3,
          spaceBetween: 40
      }
  }
});

// Scroll Animation
document.addEventListener("DOMContentLoaded", function() {
  const h1 = document.querySelector('.hero h1');
  const options = {
      root: null,
      threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              h1.classList.add('animate');
              observer.unobserve(entry.target);
          }
      });
  }, options);

  observer.observe(h1);
});

document.addEventListener('DOMContentLoaded', function() {
  const aboutLeft = document.querySelector('.about-left');
  const aboutRight = document.querySelector('.about-right');

  function checkVisibility() {
      const windowHeight = window.innerHeight;
      const aboutLeftPosition = aboutLeft.getBoundingClientRect().top;
      const aboutRightPosition = aboutRight.getBoundingClientRect().top;

      // Check if about-left is in view
      if (aboutLeftPosition < windowHeight && aboutLeftPosition > 0) {
          aboutLeft.classList.add('visible');
      }

      // Check if about-right is in view
      if (aboutRightPosition < windowHeight && aboutRightPosition > 0) {
          aboutRight.classList.add('visible');
      }
  }

  window.addEventListener('scroll', checkVisibility);
  // Initial check in case the elements are already in view
  checkVisibility();
});

document.addEventListener('DOMContentLoaded', function() {
  const counterContainer = document.querySelector('.counter-container');
  const salesCounter = document.getElementById('SalesCounter');
  const customerCounter = document.getElementById('customers');
  
  let isCounterActivated = false; // Flag to prevent multiple activations

  function checkVisibility() {
      const windowHeight = window.innerHeight;
      const counterPosition = counterContainer.getBoundingClientRect().top;

      // Check if counter-container is in view
      if (counterPosition < windowHeight && counterPosition > 0) {
          counterContainer.classList.add('visible');

          // Start the counter if not already activated
          if (!isCounterActivated) {
              isCounterActivated = true;
              animateCounter(salesCounter, 100, 50); // Call your existing counter function
              animateCounter(customerCounter, 600, 50); // Call your existing counter function
          }
      }
  }

  window.addEventListener('scroll', checkVisibility);
  // Initial check in case the element is already in view
  checkVisibility();
});

document.addEventListener("DOMContentLoaded", function() {
  const productContainers = document.querySelectorAll('.prod-container');

  const options = {
      root: null, // Use the viewport as the container
      rootMargin: '0px',
      threshold: 0.1 // Trigger when 10% of the container is visible
  };

  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              // Add the 'animate' class to the container first
              entry.target.classList.add('animate');

              // Get the left and right divs
              const leftDiv = entry.target.querySelector('.prod-left');
              const rightDiv = entry.target.querySelector('.prod-right');

              // Add the 'animate' class to the left and right divs with a delay
              leftDiv.classList.add('animate');
              setTimeout(() => {
                  rightDiv.classList.add('animate');
              }, 300); // Adjust the delay as necessary

              // Stop observing after the animation is triggered
              observer.unobserve(entry.target);
          }
      });
  }, options);

  // Observe each product container
  productContainers.forEach(container => {
      observer.observe(container);
  });
});

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

// Function to add visibility class
function handleScroll() {
  const textItems = document.querySelectorAll('.text-item');
  const icons = document.querySelector('.icons');

  textItems.forEach(item => {
      if (isElementInViewport(item)) {
          item.classList.add('visible');
      }
  });

  if (isElementInViewport(icons)) {
      icons.classList.add('visible');
  }
}

// Listen for scroll events
window.addEventListener('scroll', handleScroll);
// Initial check in case elements are already in view
handleScroll();

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

document.addEventListener("DOMContentLoaded", function() {
  const infoContainer = document.querySelector('.info-container');

  function checkScroll() {
      const rect = infoContainer.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
          infoContainer.classList.add('visible');
      }
  }

  window.addEventListener('scroll', checkScroll);
  checkScroll(); // Check on load in case it's already in view
});