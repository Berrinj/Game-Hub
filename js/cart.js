import { getCartItems } from "./utils/getCartItems.js";

const itemsInCart = getCartItems();
const cartContainer = document.querySelector(".shopping-cart");
const deleteItem = document.querySelectorAll("p.deleteitem");
const totalSum =  document.querySelector(".total");

// deleteItem.forEach((button) => {
//     button.addEventListener("click", removeItem);
// });
try {
cartContainer.addEventListener("click", function (event) {
    if (event.target.classList.contains("deleteitem")) {
        removeItem();
    }
});
cartContainer.innerHTML = "";
function removeItem() {
    
    console.log("item removed button works on click, that's how far I've come");
};

if(itemsInCart.length === 0) {
    cartContainer.innerHTML = `<p class="nofavs">No items in cart.</p>`
};


let total = 0;
itemsInCart.forEach(inCart => {
    
    cartContainer.innerHTML += `<a href="productpage.html?id=${inCart.id}">
                                    <img src="${inCart.image}" alt="${inCart.title} cover"></a>
                                        <div class="cartinfo">
                                        <h2>${inCart.title}</h2>
                                        <p>
                                        -Available for PS4, PS5, Nintendo Switch, XBOX One & XBOXSeries X 
                                        -Instant download
                                        </p>
                                        <p class="price">Price: ${inCart.price}</p>
                                        <p class="deleteitem">Remove ${inCart.title}</p>
                                    </div>`;
 let itemPrice = +inCart.price;
 total += itemPrice;
});

total = total.toFixed(2);
//  console.log(total);

 totalSum.innerHTML = `<h3>Total</h3>
                        <h3>${total}</h3>`;
 
} catch(error) {
    cartContainer.innerHTML = `<div class="error">We are so sorry, an error occured while loading this page.</div>`;
    console.log(error, `Sorry, an error occured`);
  };
