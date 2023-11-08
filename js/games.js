import { getExistingFavs } from "./utils/favFunctions.js";

export const url = "https://api.noroff.dev/api/v1/gamehub/";

export const gameContainer = document.querySelector(".games-container");

export const gamesRow = document.querySelector(".gamesrow");

export const priceBox = document.querySelector(".price-box");

const favorites = getExistingFavs();

async function getGames() {

    try {
    const response = await fetch(url);
    const result = await response.json();

    gamesRow.innerHTML = "";

    for(let i = 0; i < result.length; i++){

        let cssClass = "far";

        if (result[i].onSale === true) {
            result[i].price = result[i].discountedPrice;
        };

        const doesObjectExist = favorites.find(function(fav) {

            return fav.id === result[i].id;
        });

        console.log(doesObjectExist);

        if (doesObjectExist) {
            cssClass = "fa-solid";
        };

        gamesRow.innerHTML += `<a href="productpage.html?id=${result[i].id}">
                                    <div class="games-container">
                                    <img class="productimg" src="${result[i].image}">
                                    <h3>${result[i].title}</h3>
                                    <p>-Available for PS4, XBOX One and PC</p>
                                    <p>-instant download</p>
                                    <div class="price-box">
                                    <h4>$${result[i].price}</h4>
                                    </div>
                                    </a>
                                    <i class="${cssClass} fa-heart fa-2xl" data-id="${result[i].id}" data-name="${result[i].title}" data-image="${result[i].image}" data-price="${result[i].price}"></i>
                                    </div>
                                    `
                                    
    };

    const favButton = document.querySelectorAll(".games-container i");

    favButton.forEach((button) => {
        button.addEventListener("click", heartIconChange);
    });

    function heartIconChange() {
        this.classList.toggle("fa-regular");
        this.classList.toggle("fa-solid");
 
        
        
        const idLocalStorage = this.dataset.id;
        const titleLocalStorage = this.dataset.name;
        const imageLocalStorage = this.dataset.image;
        const priceLocalStorage = this.dataset.price;

        // console.log(titleLocalStorage, idLocalStorage);
    
        const currentFavs = getExistingFavs();
        console.log(currentFavs);
    
    
        const productExists = currentFavs.find(function(fav) {
            return fav.id === idLocalStorage;
        });

        if (!productExists) {
            const product = {title: titleLocalStorage, id: idLocalStorage, image: imageLocalStorage, price: priceLocalStorage};
            currentFavs.push(product);
            saveFavorites(currentFavs);
        } else {
            const newFavs = currentFavs.filter((fav) => fav.id != idLocalStorage);
            saveFavorites(newFavs);
        };
    
        console.log("does it exsits: ", productExists);
    
        // console.log("id:", idLocalStorage);
    }

    getExistingFavs();
    
    function saveFavorites(favs) {
        localStorage.setItem("favorites", JSON.stringify(favs));
    };
    

    } catch (error) {
        gamesRow.innerHTML = `<div class="error">We are so sorry, an error occured while loading this page.</div>`;
        console.log(error, `Sorry, an error occured`);
    };
    // finally {
    //     console.log("Thi");
    // }

};

getGames();


// function errorMessage(message) {
//     message = `An error occured`;
// }


