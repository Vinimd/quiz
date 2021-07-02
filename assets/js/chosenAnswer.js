const form = document.querySelector("form");
const chosenAnswer = document.querySelectorAll('[name=teste]');

function chosen() {

    const chosenAnswer = document.querySelectorAll('[name=teste]');

    chosenAnswer.forEach(function removeRed(element){
        
        if(element.parentElement.classList.contains("change__background")){
            element.parentElement.classList.remove("change__background")
        }
    });

    
    for (let value of chosenAnswer) {
        if (value.checked == true) {

            value.parentElement.classList.add("change__background")


        }
    }


}

form.addEventListener("click",chosen)