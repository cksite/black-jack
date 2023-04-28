let pname = prompt("What is you Name");;

let player = {
    name:pname,
    chips: 0
    
}



let cards = [] 
let sum = 0;

let hasblackjack = false;
let isAlive = false;
let message = "";

let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");

// or both are Same
// let sumEl = document.querySelector("#sum-el");
let cardsEl = document.getElementById("cards-el");
 
let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $ " + player.chips; 




function getrandomcard() {
    let randomNumber = Math.floor(Math.random()*13) + 1;
    if(randomNumber === 1)
    {
        return 11;
    }
    else if(randomNumber > 10)
    {
        return 10;
    }
    else{
        return randomNumber;
    }
}


function StartGame() {
    let firstcard = getrandomcard();
    let secondcard = getrandomcard();
    cards = [firstcard,secondcard];
    sum = firstcard+secondcard;
    isAlive = true;
    hasblackjack = false;
    renderGame();
    
}

function renderGame(){
    cardsEl.textContent = "Cards: ";
    for(let i=0;i<cards.length;i++)
    {
        cardsEl.textContent += cards[i] + " ";
    }
    sumEl.textContent = "Sum: " + sum;

    if(sum<=20){
        message =player.name + " Do you want to draw a new card?";
    }
    else if(sum === 21){
        message =player.name + " you've got blackjack! ";
        hasblackjack = true;
        player.chips += 10;
        playerEl.textContent = player.name + ": $ " + player.chips;
       
    }
    else{
        message =player.name + " you are out of the game! please click start game";
        isAlive = false;
        
        
    }

    messageEl.textContent = message;
}



function newCard() {
    if(isAlive === true && hasblackjack == false)
    {
        let card = getrandomcard();
        sum += card;
        
        cards.push(card);
        renderGame();
    }
    
}

