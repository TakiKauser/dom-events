// handle seagreen button with just a function
function bgSeagreen(){
    document.body.style.backgroundColor = "seagreen";
}

// handle bsteelblue button by setting funtion accessing with id
const steelblueButton = document.getElementById("bg-steelblue");
// just set the name of the function
steelblueButton.onclick = bgSteelblue;

function bgSteelblue(){
    document.body.style.backgroundColor = "steelblue";
}

// handle sienna button using anonymous function
const siennaButton = document.getElementById("bg-sienna");
// anonymous function
siennaButton.onclick = function() {
    document.body.style.backgroundColor = "sienna";
}

// handle by using event listner
const grayButton = document.getElementById("bg-gray");

grayButton.addEventListener('click', bgGray);

function bgGray(){
    document.body.style.backgroundColor = "gray";
}

// add event listener
const darkredButton = document.getElementById("bg-darkred");
// console.log(darkredButton);
darkredButton.addEventListener("click", function () {
    document.body.style.backgroundColor = "darkred";
})

// shortcut event listener
document.getElementById("bg-orangered").addEventListener("click", function () {
    document.body.style.backgroundColor = "orangered";
})