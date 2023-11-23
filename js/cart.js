import { getCartItems } from "./utils/getCartItems.js";

const itemsInCart = getCartItems();
const main = document.querySelector("main");
const cartHeader = document.querySelector(".shopping-cart-header");
const cartContainer = document.querySelector(".shopping-cart");
const totalSum =  document.querySelector(".total");


try {
cartContainer.innerHTML = "";

if(itemsInCart.length === 0) {
    cartContainer.innerHTML = `<p class="nofavs">No items in cart.</p>`
};


cartHeader.innerHTML += `<h1>Cart</h1>
                        <h4>${itemsInCart.length} item(s)</h4>`;

let total = 0;
itemsInCart.forEach(inCart => {


    cartContainer.innerHTML += `<li><a href="productpage.html?id=${inCart.id}">
                                    
                                        <div class="cartinfo">
                                        <img src="${inCart.image}" alt="${inCart.title} cover"></a>
                                        <h2>${inCart.title}</h2>
                                        <p>-Available for PS4, PS5, Nintendo Switch, XBOX One & XBOXSeries X</p>
                                        <p>-Instant download</p>
                                        </p>
                                        <p class="price">Price: $${inCart.price}</p>
                                        <p class="deleteitem"><i class="fa-regular fa-trash-can"></i>Remove ${inCart.title}</p>
                                    </div></li>`;
                                    
    let itemPrice = +inCart.price;
    total += itemPrice;
});

total = total.toFixed(2);

totalSum.innerHTML =    `<h3>Total</h3>
                        <h3>$${total}</h3>`;

 
} catch(error) {
    main.innerHTML = `<div class="error">We are so sorry, an error occured while loading this page.</div>`;
    console.log(error, `Sorry, an error occured`);
  };

