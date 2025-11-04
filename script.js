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
  // input validation // if name is empty string or price is not a number
  // we alert the user and return early// return
  //https://www.shecodes.io/athena/549-how-to-use-an-alert-prompt-with-the-if-statement-in-javascript
  // https://stackoverflow.com/questions/24449471/javascript-alert-when-customer-fill-in-the-wrong-price
  if (name === "") {
    alert("Put product name");
    return;
  }
  // price validation // if price is NaN or less than or equal to 0
  if (!price) {
    alert("Need a valid price.");
    return;
  }
  // Create list item // li element// ref : mdn web docs // https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
  const item = document.createElement("li");
  item.className = "cart-item";
  item.dataset.price = price;
  item.innerHTML = name + " — $" + price.toFixed(2); // toFixed(2) method to format number to 2 decimal places
// Create remove button
  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove";
item.appendChild(removeBtn);
// 
  cart.appendChild(item); // add item to cart
  updateTotalPrice(price); // update total price
  productNameInput.value = ""; // clear input fields
  productPriceInput.value = ""; // clear input fields
  productNameInput.focus();// set focus back to product name input
  // When user clicks "Remove" button // we call removeItem function
  removeBtn.onclick = removeItem;
}
// When user clicks "Add Product" button // we call addProduct function // ref: mdn web docs // https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/onclick
addProductButton.onclick = addProduct;
// When user clicks "Remove" button // we call removeItem function