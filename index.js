var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var randomPrice = Math.floor(Math.random()*100);
 var newItem = {
   itemName: item,
   itemPrice: randomPrice
};
cart.push(newItem);
return newItem.itemName + ' has been added to your cart.';
}

function viewCart() {
  var viewCartMessage;
  var i = 0;
  var cartIndex = cart.length - 1;
  if (cart.length === 0) {
    viewCartMessage = 'Your shopping cart is empty.';
  } else if (cart.length === 1) {
      viewCartMessage = `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
    } else {
  viewCartMessage = `In your cart, you have`
  while (i < cartIndex) {
  viewCartMessage + ` ${cart[i].itemName} at ${cart[i].itemPrice},`;
  i++; 
  }
  viewCartMessage + ` ${cart[cartIndex].itemName} at $${cart[cartIndex].itemPrice}.`;
  }
  return viewCartMessage;
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
