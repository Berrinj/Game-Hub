const url = "https://api.noroff.dev/api/v1/gamehub/";

const gameContainer = document.querySelector(".games-container");

const gamesRow = document.querySelector(".gamesrow");

const priceBox = document.querySelector(".price-box");

async function ratedEighteen() {
    try {
    const response = await fetch(url);
    const result = await response.json();

    gamesRow.innerHTML = "";

    const ageRatingToTarget = "18+";
        const filteredAge = result.filter(age => age.ageRating === ageRatingToTarget);
        console.log(filteredAge);

    for (let i = 0; i < filteredAge.length; i++){

            gamesRow.innerHTML += `<a href="productpage.html?id=${filteredAge[i].id}">
            <div class="games-container">
            <img class="productimg" src="${filteredAge[i].image}">
            <h3>${filteredAge[i].title}</h3>
            <p>-Available for PS4, XBOX One and PC</p>
            <p>-instant download</p>
            <div class="price-box">
            <h4>${filteredAge[i].price}</h4>
            </div>
            </a>`
    }
} catch (error) {
    console.log(error);
}
  

}

ratedEighteen();

