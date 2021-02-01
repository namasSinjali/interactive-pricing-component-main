const planToggle = document.querySelector(".toggle-switch input");
const pageviewsCount = document.querySelector("#pageviews-count span");
const pageviewsSlider = document.querySelector("#pageviews-slider");
const pageviewsPrice = document.querySelector("#pageviews-price span");

const PRICELIST = { //in $ per months
    "10K": 8,
    "50K": 12,
    "100K": 16,
    "500K": 24,
    "1M": 36
}

const PRICE_DATA = [
    {viewcount: "10K", price: 8},
    {viewcount: "50K", price: 12},
    {viewcount: "100K", price: 16},
    {viewcount: "500K", price: 24},
    {viewcount: "1M", price: 36},
]

pageviewsSlider.addEventListener("change", e => {
    let val = e.target.value;
    
    pageviewsCount.textContent = PRICE_DATA[val].viewcount;
    changePrice(val);
})

planToggle.addEventListener("change", e =>{
    changePrice();
})

function changePrice(val = pageviewsSlider.value){
    let price = (planToggle.checked) ? PRICE_DATA[val].price*.75 : PRICE_DATA[val].price
    price = Math.round(price*100).toString();
    price = "$" + price.slice(0, -2) + "." + price.slice(-2);
    pageviewsPrice.textContent = price;
}
