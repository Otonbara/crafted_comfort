let cartCount = 0;
let cartItems = []; // Array to hold cart items

function addToCart(productName, productImage) {
    cartCount++;
    cartItems.push({ name: productName, image: productImage }); // Store product as an object with name and image
    document.getElementById('cart-count').innerText = cartCount;
    document.getElementById('cart-count-mobile').innerText = cartCount;
    alert(`${productName} has been added to your cart!`);
}

function openProductModal(productName, productDescription) {
    document.getElementById('modal-product-title').innerText = productName;
    document.getElementById('modal-product-description').innerText = productDescription;
    document.getElementById('product-modal').style.display = 'block'; // Show the product modal
}

function closeProductModal() {
    document.getElementById('product-modal').style.display = 'none'; // Hide the product modal
}

function openCartModal() {
    const cartModal = document.getElementById('cart-modal');
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');

    // Clear previous cart items
    cartItemsContainer.innerHTML = '';

    // Display cart items with images
    cartItems.forEach((item, index) => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('cart-item');

        // Create the image element
        const itemImage = document.createElement('img');
        itemImage.src = item.image; // Set the image source to the product's image
        itemImage.alt = item.name; // Set alt text as the product name
        itemImage.classList.add('cart-item-image');

        // Create the name element
        const itemName = document.createElement('span');
        itemName.textContent = item.name;

        // Create remove button
        const removeButton = document.createElement('button');
        removeButton.classList.add('remove-button');
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', function() {
            removeItemFromCart(index);
        });

        // Append image, name, and remove button to item
        itemElement.appendChild(itemImage);
        itemElement.appendChild(itemName);
        itemElement.appendChild(removeButton);

        cartItemsContainer.appendChild(itemElement); // Add item to the cart modal
    });

    cartTotal.textContent = `Total Items: ${cartCount}`;
    cartModal.style.display = 'block'; // Show the modal
}

function closeCartModal() {
    const cartModal = document.getElementById('cart-modal');
    cartModal.style.display = 'none'; // Hide the modal
}

function removeItemFromCart(index) {
    cartItems.splice(index, 1); // Remove the item from the array
    cartCount--; // Decrease cart count
    document.getElementById('cart-count').innerText = cartCount;
    document.getElementById('cart-count-mobile').innerText = cartCount;
    openCartModal(); // Refresh the cart modal to reflect changes
}

function clearCart() {
    cartItems = [];
    cartCount = 0;
    document.getElementById('cart-count').innerText = cartCount;
    document.getElementById('cart-count-mobile').innerText = cartCount;
    openCartModal(); // Refresh the cart modal after clearing the cart
}

function checkout() {
    alert("Proceeding to checkout!");
    closeCartModal(); // Close modal after checkout
}

// Add event listener to the cart icon
document.querySelector('.cart-icon').addEventListener('click', openCartModal);
document.getElementById('cart-icon-mobileview').addEventListener('click', openCartModal);

// Scroll Animation
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
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        if (isElementInViewport(card)) {
            card.classList.add('visible');
        }
    });
}

// Initial check and event listener for scroll
window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll); // Check on page load