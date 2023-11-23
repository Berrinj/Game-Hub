import { getExistingFavs } from "./utils/favFunctions.js";
import { getCartItems } from "./utils/getCartItems.js";

const favorites = getExistingFavs();

const main = document.querySelector("main");
const favoritesContainer = document.querySelector(".wishlistgames");
const noMoreItems = document.querySelector(".nomoreitems");
const cartNumberOfItems = document.querySelector(".cart-status");

const currentCartItems = getCartItems();

try {

    cartNumberOfItems.innerHTML = `<p class="cart-status">${currentCartItems.length} item(s)</p>`;

if(favorites.length === 0) {
    favoritesContainer.innerHTML = `<p class="nofavs">No favorites to show here.</p>`
    noMoreItems.innerHTML = `<p class="nofavs">No favorites to show here. Go add some and spoil yourself, you deserve it!</p>`;
};

favoritesContainer.innerHTML = "";

favorites.forEach(favorite => {
    
    favoritesContainer.innerHTML += `<li><div class="wishlist1">
                                        <a href="productpage.html?id=${favorite.id}">
                                        <img src="${favorite.image}">
                                        </a>
                                        <div class="nameheart">
                                            <h2>${favorite.title}</h2>
                                            <i class="fa fa-heart fa-xl favheart"></i>
                                        </div>
                                        
                                        <p>
                                            -Available for PS4, PS5, Nintendo Switch, XBOX One & XBOX
                                            Series X -Instant download
                                        </p>
                                        <h3>Price: ${favorite.price}</h3>
                                        <button class="wishlist-button">Remove item</button>
                                        <button class="wishlist-button">Add to cart</button>
                                    </div></li>`

});

} catch(error) {
    main.innerHTML = `<div class="error">We are so sorry, an error occured while loading this page.</div>`;
    console.log(error, `Sorry, an error occured`);
}
