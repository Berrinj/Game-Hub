const url = "https://api.noroff.dev/api/v1/gamehub/";

const cart = document.querySelector(".shopping-cart");

async function productsInCart() {
    try {
    const response = await fetch(url);
    const result = await response.json();


} catch (error) {
    cart.innerHTML = `an error occured`;
    console.log(error);
}
}