const about = document.getElementById("about");
let popUp = document.querySelector(".pop_up");
let closed = document.querySelector(".popup-close");

const ingredients = document.querySelectorAll(".ingredients")
let ingredientsBlock = document.querySelectorAll(".ingredients-block")



about.onclick = function (){
    popUp.style.display = "flex";
}

closed.onclick = function (){
    popUp.style.display = "none";
}

window.onclick = function (event){
    if (event.target === popUp){
        popUp.style.display = "none";
    }
}

ingredientsBlock.onclick = function(){
    
    ingredientsBlock.style.width = "400px";
}

console.log(ingredientsBlock)