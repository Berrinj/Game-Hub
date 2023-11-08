export function saveFavorites(favs) {
    localStorage.setItem("favorites", JSON.stringify(favs));
};


export const favButton = document.querySelectorAll(".games-container i");

export const favoritesButton = favButton.forEach((button) => {
    button.addEventListener("click", heartIconChange);
});

export function heartIconChange() {
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
        const newFavs = currentFavs.filter((fav) => fav.id != idLocalStorage);
        saveFavorites(newFavs);
    };

    console.log("does it exsits: ", productExists);

    console.log("id:", idLocalStorage);
}
