const productNameInput = document.getElementById('product-name');
const productPriceInput = document.getElementById('product-price');
const addProductButton = document.getElementById('add-product');
const cart = document.getElementById('cart');
const totalPriceSpan = document.getElementById('total-price');
 
let totalPrice = 0;
 
// Function to update the total price
function updateTotalPrice(amount) {
  totalPrice += amount;
  totalPriceSpan.textContent = totalPrice.toFixed(2);
}
 
// Function to remove an item
function removeItem(event) {
  const item = event.target.closest('li');
  const price = parseFloat(item.dataset.price);
  updateTotalPrice(-price);
  item.remove();
}

// Add a product to the cart // main function 
// ref: mdn web docs // https://developer.mozilla.org/en-US/docs/Web/API/Element/closest
// Add a product to the cart
function addProduct() { // main function
  const name = productNameInput.value; // get product name
  const price = Number(productPriceInput.value); // convert string to number
  //
  if (name === "") {
    alert("Put product name");
    return;
  }
