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


productCounter = 0

// Add Product button event listener
addProductButton.addEventListener("click", function () {
  if (productNameInput.value == "") return alert("enter a name")
  if (productPriceInput.value == "") return alert("enter a price")
  if (productPriceInput.value < 0) return alert("price cannot be negative")

  ++productCounter

  newLine = document.createElement("ul") // contains item info and remove button
  newLine.price = productPriceInput.value
  newLine.productCount = productCounter
  newItem = document.createElement("li") // item name and price
  newItem.name = productNameInput.value // give it name class
  newItem.innerHTML = newItem.name
  newItem.price = productPriceInput.value // give it a price class

  buttonRemove = document.createElement("button") // remove button
  buttonRemove.innerHTML = "Remove"
  buttonRemove.addEventListener("click", (event) => {
    totalPrice -= Number(event.target.closest("ul").price)
    totalPriceSpan.innerHTML = totalPrice
    myCart.splice(event.target.closest("ul").productCounter, 1)
    event.target.closest("ul").remove()
  })

  buttonQuantityUp = document.createElement("button") // quantity up button 
  buttonQuantityUp.innerHTML = "+"
  // buttonQuantityUp.addEventListener("click", )

  buttonQuantityDown = document.createElement("button") // quantity down button
  buttonQuantityDown.innerHTML = "-"
  // buttonQuantityDown.addEventListener("click", )

  newLine.append(newItem, buttonRemove, buttonQuantityUp, buttonQuantityDown)
  myCart.push(newLine) // add the new object to the object array

  totalPrice += Number(newItem.price) // calculate total price
  totalPriceSpan.innerHTML = totalPrice

  productNameInput.value = ""
  productPriceInput.value = ""

  cart.innerHTML = ""
  for (i = 0; i < myCart.length; i++) { // re-render the cart
    cart.appendChild(myCart[i])
  }

})
