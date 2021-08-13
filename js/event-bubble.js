// li
document.getElementById("third-item").addEventListener("click", function(){
    console.log("clicked");
    // event.stopImmediatePropagation();
})
document.getElementById("third-item").addEventListener("click", function(){
    console.log("clicked2");
    event.stopImmediatePropagation();
})
document.getElementById("third-item").addEventListener("click", function(){
    console.log("clicked3");
    // event.stopPropagation();
})

// ul
document.getElementById("list-container").addEventListener("click", function(){
    console.log("ul clicked");
})

// section
document.getElementById("section-container").addEventListener("click", function(){
    console.log("section clicked");
})