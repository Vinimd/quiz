const button = document.querySelector("footer button");

function result() {

    const main = document.querySelector("main");
    const button = document.querySelector("button")

    const answers = document.querySelectorAll("[name=teste]");
    let chosenAnswer = 0;
    
    for(let element of answers)
    if(element.checked){
        chosenAnswer = element.value;
    }
    if((chosenAnswer == 1 )||(chosenAnswer == 2)||(chosenAnswer == 4)){
        alert("Você errou");
    }else{
        alert("Você acertou");
    }

    button.classList.add("invisible")
    main.classList.add("no__clicks")

}

button.addEventListener("click",result);