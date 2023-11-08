import { getExistingFavs } from "./utils/favFunctions.js";
const favorites = getExistingFavs();

const favoritesContainer = document.querySelector(".wishlistgames");
const noMoreItems = document.querySelector(".nomoreitems");

if(favorites.length === 0) {
    favoritesContainer.innerHTML = `<p class="nofavs">No favorites to show here.</p>`
    noMoreItems.innerHTML = "";
};

favorites.forEach(favorite => {
    
    favoritesContainer.innerHTML += `<div class="wishlist1">
    <img src="${favorite.image}">
                                        <div class="nameheart">
                                            <h2>${favorite.title}</h2>
                                            <i class="fa fa-heart fa-xl favheart"></i>
                                        </div>
                                        
                                        <p>
                                            -Available for PS4, PS5, Nintendo Switch, XBOX One & XBOX
                                            Series X -Instant download
                                        </p>
                                        <h3>Price: ${favorite.price}</h3>
                                        <button class="wishlist-button">Buy Now</button>
                                        <button class="wishlist-button">Add to cart</button>
                                    </div>`
});

