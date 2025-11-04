const productNameInput = document.getElementById('product-name'); // input field
const productPriceInput = document.getElementById('product-price'); // input field
const addProductButton = document.getElementById('add-product'); // add product button
const cart = document.getElementById('cart'); // unordered list
const totalPriceSpan = document.getElementById('total-price'); // span within h3

let totalPrice = 0;

myCart = [] // array containing the item objects

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

// Add Product button event listener
addProductButton.addEventListener("click", function () {
  newLine = document.createElement("ul") // contains item info and remove button
  
  newItem = document.createElement("li") // item name and price
  newItem.name = productNameInput.value // give it name class
  newItem.innerHTML = newItem.name
  newItem.price = productPriceInput.value // give it a price class

  newButton = document.createElement("button") // remove button
  newButton.innerHTML = "Remove"

  newLine.append(newItem,newButton)
  myCart.push(newLine) // add the new object to the object array

  totalPrice += Number(newItem.price) // calculate total price
  totalPriceSpan.innerHTML = totalPrice

  productNameInput.value = ""
  productPriceInput.value = ""

  cart.innerHTML = ""
  for (i=0;i<myCart.length;i++) { // re-render the cart
    cart.appendChild(myCart[i])
    console.log(cart)
  }

})




