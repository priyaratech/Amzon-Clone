document.addEventListener('DOMContentLoaded', function() {
  const mainImage = document.getElementById('main-image');
  const thumbnails = document.querySelectorAll('.thumbnail');

  thumbnails.forEach(thumbnail => {
      thumbnail.addEventListener('click', function() {
          mainImage.src = this.src;
      });
  });

  const addToCartButton = document.getElementById('add-to-cart');
  const buyNowButton = document.getElementById('buy-now');

  addToCartButton.addEventListener('click', function() {
      const quantity = document.getElementById('quantity').value;
      alert(`Added ${quantity} item(s) to your cart.`);
  });

  buyNowButton.addEventListener('click', function() {
      alert('Proceed to checkout.');
  });
});
