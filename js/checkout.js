import { getCartItems } from "./utils/getCartItems.js";

const main = document.querySelector("main");
const productContainer = document.querySelector(".checkout-items");
const itemsInCart = getCartItems();

productContainer.innerHTML = "";

try {

if(itemsInCart.length === 0) {
    productContainer.innerHTML = `<p>No items in cart.</p>`;
};

itemsInCart.forEach(inCart => {

productContainer.innerHTML += `<div class="checkout-items">
                                <img src="${inCart.image}" alt="${inCart.title} cover" class="checkout-img">
                                <p><b>Title:</b>${inCart.title}</p>
                                <p><b>Price:</b>${inCart.price}</p>
                                <hr>
                                </div>`;
});
} catch (error) {
        main.innerHTML = `<div class="error">We are so sorry, an error occured while loading this page.</div>`;
        console.log(error, `Sorry, an error occured`);
};