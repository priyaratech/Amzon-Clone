
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function goToProductPage() {
  window.location.href = 'product.html';
}
function goToProductPage1() {
  window.location.href = 'product1.html';
}

function addToCart(product) {
  const productExists = cart.find(item => item.id === product.id);
  if (productExists) {
    productExists.quantity++;
  } else {
    cart.push({...product, quantity: 1});
  }
  updateLocalStorage();
  updateCartCount();
  alert('Product added to cart');
}

function updateCart() {
  const cartItems = document.getElementById('cartItems');
  const summary = document.getElementById('summary');

  if (!cartItems || !summary) {
    return; 
  }

  cartItems.innerHTML = '';
  summary.innerHTML = '';

  let totalPrice = 0;
  let totalItems = 0;

  cart.forEach((item, index) => {
    cartItems.innerHTML += `
      <div class="cart-item">

      <div class="main-image">
      <div class="image"><img src="${item.image}" alt="" height="250" width="250"></div>
    </div>

    <div class="main-topic">  
        <div class="product-name">${item.name}</div>
        <div class="price">₹${item.price}</div>
        <div class="original-price">₹${item.originalPrice}</div>
        <div class="in-stock">${item.inStock ? 'In stock' : 'Out of stock'}</div>
        <div class="options">
          Colour: ${item.colour}<br>
          Size: ${item.size}<br>
          Style Name: ${item.styleName}<br>
          Qty: <input type="number" class="quantity-input" value="${item.quantity}" min="1" max='20' onchange="updateQuantity(${index}, this.value)"><br>
          <a href="#" onclick="deleteItem(${index}); return false;">Delete</a> |
          <a href="#" onclick="saveForLater(${index}); return false;">Save for later</a> |
          <a href="#" onclick="seeMoreLikeThis(${index}); return false;">See more like this</a> |
          <a href="#" onclick="shareProduct(${index}); return false;">Share</a>
        </div> 
        <div class="total-border">
        <div class="subtotal">Subtotal (${item.quantity} item): ₹${item.price * item.quantity}</div>
      </div>
      </div>
  </div>

    `;

    totalPrice += item.price * item.quantity;
    totalItems += item.quantity;
  });

  summary.innerHTML = `
    <div class="summary-item summary">
      <div class="subtotal">Subtotal (${totalItems} items): ₹${totalPrice}</div>
      <div class="item">
        <input type="checkbox" id="gift">
        <label for="gift">This order contains a gift</label>
      </div>

      <button class="btn">Proceed to Buy</button>

  <div class="item">
    <div>EMI Available</div>
  </div>

</div>
  `;
  
}


function updateLocalStorage() {
  localStorage.setItem('cart', JSON.stringify(cart));
}


function updateCartCount() {
  const cartCount = cart.reduce((count, item) => count + item.quantity, 0);
  document.getElementById('cart-count').textContent = cartCount;
}

function deleteItem(index) {
  cart.splice(index, 1);
  updateLocalStorage();
  updateCart();
  updateCartCount();
}


function updateQuantity(index, quantity) {
  cart[index].quantity = parseInt(quantity, 10);
  updateLocalStorage();
  updateCart();
}


function updateTotalPrice() {
  const totalPrice = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  document.getElementById('totalPrice').textContent = `₹${totalPrice}`;
}


function saveForLater(index) {
  
}

function seeMoreLikeThis(index) {
  
}

function shareProduct(index) {
  
}

window.onload = () => {
  updateCartCount();
  const currentPage = window.location.pathname.split('/').pop();
  if (currentPage === 'cart.html') {
    updateCart();
  }
}