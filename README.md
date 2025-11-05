

# Lab 5.1, Advanced DOM Manipulation

## Description
In this lab a shopping list application is made with html elements and JavaScript functionality.



## Running the program
To view use this lab, open index.html in a web browser.<br>
Add an item to the list by filling the input fields and clicking  <br>
Remove an item by clicking the Remove button. <br>
<br>

## Reflection Questions
> How did you dynamically create and append new elements to the DOM?

Creating new elements was accomplished with document.createElement("exampleElement").<br>
append() is used instead of appendChild() to append multiple elements at once.
<br>

> What steps did you take to ensure accurate updates to the total price?

Total price is updated any time an item is added or removed. Test cases are used to ensure correct summation.
<br>

> How did you handle invalid input for product name or price?

Input fields cannot be blank, otherwise returns an alert. Input field for price only accepts numbers. Prices are checked to make sure they are not negative.
<br>

> What challenges did you face when implementing the remove functionality?

Removing the item from the document is easy using item.remove(), however updating the cart array had to be managed. 
<br>