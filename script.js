const productNameInput = document.getElementById('product-name'); // input field
const productPriceInput = document.getElementById('product-price'); // input field
const addProductButton = document.getElementById('add-product'); // add product button
const cart = document.getElementById('cart'); // unordered list
const totalPriceSpan = document.getElementById('total-price'); // span within h3

let totalPrice = 0;

myCart = [] // array containing the item objects
productCounter = 0 // product counter, helps index myCart

// Function to update the total price
function updateTotalPrice(amount) {
  totalPrice += amount;
  totalPriceSpan.textContent = totalPrice.toFixed(2);
}

// Function to remove an item
function removeItem(event) {
  const item = event.target.closest('li');
  const price = parseFloat(item.price);
  updateTotalPrice(-price);
  item.remove();
  myCartColl = document.getElementsByClassName("newLine")
  myCart = []
  for (i=0;i<myCartColl;i++) {
    myCart[i] = myCartColl[i]
  }
}

// Add Product button event listener
addProductButton.addEventListener("click", function () {
  if (productNameInput.value == "") return alert("enter a name")
  if (productPriceInput.value == "") return alert("enter a price")
  if (productPriceInput.value < 0) return alert("price cannot be negative")

  ++productCounter

  newLine = document.createElement("li") // contains item info and remove button
  newLine.setAttribute("class","newLine")
  newLine.price = productPriceInput.value
  newLine.productCount = productCounter

  newItem = document.createElement("div") // item name and price
  newItem.name = productNameInput.value
  newItem.innerHTML = newItem.name
  newItem.price = productPriceInput.value

  buttonRemove = document.createElement("button") // remove button
  buttonRemove.innerHTML = "Remove"
  buttonRemove.addEventListener("click", (event) => {
    removeItem(event)
  })

  buttonQuantityUp = document.createElement("button") // quantity up button 
  buttonQuantityUp.innerHTML = "+"

  buttonQuantityDown = document.createElement("button") // quantity down button
  buttonQuantityDown.innerHTML = "-"

  newLine.append(newItem, buttonRemove, buttonQuantityUp, buttonQuantityDown)
  myCart.push(newLine) // add the new object to the object array

  updateTotalPrice(Number(newItem.price)) // calculate total price

  productNameInput.value = ""
  productPriceInput.value = ""

  cart.innerHTML = ""
  for (i = 0; i < myCart.length; i++) { // re-render the cart
    cart.appendChild(myCart[i])
  }

})
