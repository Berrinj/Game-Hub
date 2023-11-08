// import {heartIconChange} from "./wishlist.js";
//could not read classList properties?
import { getExistingFavs } from "./utils/favFunctions.js";
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const breadcrumbsPage = document.querySelector(".breadcrumbspage");

const url = "https://api.noroff.dev/api/v1/gamehub/" + id;

const productContainer = document.querySelector(".productpagecontainer");

const favorites = getExistingFavs();

async function getGame() {
    try {
    const response = await fetch(url);
    const result = await response.json();

    productContainer.innerHTML = ``;
    document.title = `Game Hub - Product Page - ${result.title}`;

    if (result.onSale === true) {
        result.price = result.discountedPrice; 
    };

    let cssClass = "far";

    const doesObjectExist = favorites.find(function(fav) {
        console.log(fav);

        return fav.id === result.id;
    });

    if (doesObjectExist) {
        cssClass = "fa-solid";
    };
    

    breadcrumbsPage.innerHTML += `<b class="breadcrumbspage">${result.title}</b>`;
    productContainer.innerHTML += `<div class"productpagecontainer">
                                    <div class="productquickinfo">
                                        <img class="mainimg" src="${result.image}" alt="${result.title} cover photo">
                                        <h1>${result.title}</h1>
                                        <p class="pp-p-one">${result.description}</p>
                                        <p class="availablefor">-Available for: PS4, PS5, Nintendo Switch, XBOX One & XBOX Series X</p>
                                        <p id="instantdownload">-Instant download</p>
                                        <p class="released">Released: ${result.released}</p>
                                        <h2>Price: $${result.price}</h2>
                                        <div class="cartbuyheart">
                                        <button class="cart">
                                        <img src="vector/cart.svg" alt="cart icon"></button>
                                        <a href="checkout.html" class="buy">
                                        <b>Buy Now</b>
                                        </a>
                                        <button class="heart">
                                        <i class="${cssClass} fa-heart fa-2xl gameheart" data-id="${result.id}" data-name="${result.title}"></i>
                                        </button>
                                    </div>
                                    </div>
                                </div>`;

        const favButton = document.querySelectorAll(".productpagecontainer i");
        favButton.forEach((button) => {
            button.addEventListener("click", heartIconChange);
        });
                            
        function heartIconChange() {
            // console.log(this);
            this.classList.toggle("fa-regular");
            this.classList.toggle("fa-solid");
     
            
            
            const idLocalStorage = this.dataset.id;
            const titleLocalStorage = this.dataset.name;

            // console.log(titleLocalStorage, idLocalStorage);
        
            const currentFavs = getExistingFavs();
            console.log(currentFavs);
        
        
            const productExists = currentFavs.find(function(fav) {
                return fav.id === idLocalStorage;
            });

            if (!productExists) {
                const product = {title: titleLocalStorage, id: idLocalStorage};
                currentFavs.push(product);
                saveFavorites(currentFavs);
            } else {
                const newFavs = currentFavs.filter((fav) => fav.id !== idLocalStorage);
                saveFavorites(newFavs);
            };
        
            console.log("does it exsits: ", productExists);
        
            console.log("id:", idLocalStorage);
        }
        
        getExistingFavs();

        function saveFavorites(favs) {
            localStorage.setItem("favorites", JSON.stringify(favs));
        };



    const addToCart = document.querySelector(".cart");

    addToCart.addEventListener("click", addingToCart);
    


    function addingToCart(add) {
        console.log("added to cart");
    };


} catch(error) {
    productContainer.innerHTML = `<div class="error">We are so sorry, an error occured while loading this page.</div>`;
    console.log(error, `Sorry, an error occured`);
}
};
getGame();




