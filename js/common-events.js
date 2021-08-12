// using function
function handleJustFunctionClick(){
    const clickingMethod = document.getElementById("clicking-method");
    clickingMethod.innerText= "Function!";
}

// event listener
document.getElementById("handle-event").addEventListener("click", function(){
    const clickingMethod = document.getElementById("clicking-method");
    clickingMethod.innerText = "Event Listner!";
})

// direct
document.getElementById("update-btn").addEventListener("click", function(){
    const inputField = document.getElementById("input-field");
    // console.log(inputField.value);

    const clickingMethod = document.getElementById("clicking-method");

    clickingMethod.innerText = inputField.value ;

    inputField.value = "";
})