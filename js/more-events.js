document.getElementById("delete-btn").addEventListener("click", function(){
    document.getElementById("secret-info").style.display = "none";
})

// focus
document.getElementById("delete-confirm").addEventListener("focus", function(){
    // console.log("focused");
    document.body.style.backgroundColor = "darkred";
})

// blur
document.getElementById("delete-confirm").addEventListener("blur", function(){
    // console.log("blur");
    document.body.style.backgroundColor = "gray";
})

/* 
// keydown
document.getElementById("delete-confirm").addEventListener("keydown", function(){
    const deleteField = document.getElementById("delete-confirm");
    console.log(deleteField.value);
}) 
*/

/* 
// keypress
document.getElementById("delete-confirm").addEventListener("keypress", function(){
    const deleteField = document.getElementById("delete-confirm");
    console.log(deleteField.value);
}) 
*/

// keyup
document.getElementById("delete-confirm").addEventListener("keyup", function(event){
    // const deleteField = document.getElementById("delete-confirm");
    // console.log(deleteField.value);
    const deleteButton = document.getElementById("delete-btn");
    if(event.target.value == "Delete"){
        deleteButton.removeAttribute("disabled");
    }
    else{
        deleteButton.setAttribute("disabled", true);
    }
})

// change
document.getElementById("delete-confirm").addEventListener("change", function(){
    const deleteField = document.getElementById("delete-confirm");
    // console.log(deleteField.value);
})