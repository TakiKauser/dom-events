// mannual approach

// const items = document.getElementsByClassName("item");
// for (const item of items){
//     // console.log(item);

//     // one way
//     /* item.addEventListener("click", function(){
//         // console.log("Remove this item.");
//         document.getElementById("item-container").removeChild(item);
//     }); */

//     // another way
//     item.addEventListener("click", function(event){
//         // console.log(event.target.parentNode);

//         event.target.parentNode.removeChild(event.target);
//     });
// }


// add item
document.getElementById("add-item").addEventListener('click', function () {
    const li = document.createElement("li");
    li.innerText = "Item Added";

    li.classList.add("item");

    const parent = document.getElementById("item-container");
    parent.appendChild(li);
});

// deligated
document.getElementById("item-container").addEventListener("click", function (event) {
    // console.log(event.target);
    event.target.parentNode.removeChild(event.target);
});