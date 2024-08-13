
"use strict";

var taxRate = 0.05;
var shippingRate = 15.0;
var fadeTime = 300;

document.querySelectorAll(".product-quantity input").forEach(function(quantityInput) {
quantityInput.addEventListener('change', function() {
updateQuantity(this);
});
});
document.querySelectorAll(".product-removal button").forEach(function(removeButton) {
removeButton.addEventListener('click', function() {
removeItem(this);
});
});

function recalculateCart() {
var subtotal = 0;

document.querySelectorAll(".product").forEach(function(product) {
subtotal += parseFloat(product.querySelector(".product-line-price").textContent);
});

var tax = subtotal * taxRate;
var shipping = subtotal > 0 ? shippingRate : 0;
var total = subtotal + tax + shipping;

var totalsValue = document.querySelector(".totals-value");
totalsValue.style.display = "none";
document.querySelector("#cart-subtotal").textContent = subtotal.toFixed(2);
document.querySelector("#cart-tax").textContent = tax.toFixed(2);
document.querySelector("#cart-shipping").textContent = shipping.toFixed(2);
document.querySelector("#cart-total").textContent = total.toFixed(2);
var checkout = document.querySelector(".checkout");
if (total == 0) {
checkout.style.display = "none";
} else {
checkout.style.display = "block";
}
totalsValue.style.display = "block";
}

function updateQuantity(quantityInput) {

var productRow = quantityInput.parentElement.parentElement;
var price = parseFloat(productRow.querySelector(".product-price").textContent);
var quantity = quantityInput.value;
var linePrice = price * quantity;

var productLinePrice = productRow.querySelector(".product-line-price");
productLinePrice.style.display = "none";
productLinePrice.textContent = linePrice.toFixed(2);
recalculateCart();
productLinePrice.style.display = "block";
}

function removeItem(removeButton) {

var productRow = removeButton.parentElement.parentElement;
productRow.style.display = "none";
productRow.remove();
recalculateCart();
}


// xe chay
const orderButton = document.querySelector('.order');
orderButton.addEventListener('click', function() {
    orderButton.classList.add('animate');
    setTimeout(function() {
        orderButton.classList.remove('animate');
    }, 10000);
});



    