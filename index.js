let player = {
    name: "Niranjan",
    chips: 145
}

playerDetails = document.querySelector("#player-el")
console.log(playerDetails)
playerDetails.textContent = player.name + ": $" + player.chips  

let firstCard;
let secondCard;
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let messageEl = document.getElementById("message-el")
let message = ""
// let sumEl = document.getElementById("sum-el")//we'll use querySelector instead to be bit more specific about the element am selecting
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.getElementById("cards-el")  

function getRandomCard() {
    let rno = Math.floor(Math.random() * 13) + 1 //0.0000 to 12.999, after mul and add operations range is from 1 to 13
    if (rno > 10) {
        return 10
    } else if (rno === 1) {
        return 11
    } else {
        return rno
    }
}

function startGame() {
    firstCard = getRandomCard()
    secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    isAlive = true
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let index = 0; index < cards.length; index++) {
        cardsEl.textContent += cards[index] + " "
    }

    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you wanna pick one more card ?"
    } else if (sum === 21) {
        message = "You've got the blackJack"
        hasBlackJack = true
    } else {
        message = "You are out of the game"
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard() {
    let newCard = getRandomCard()
    cards.push(newCard)
    sum += newCard
    renderGame();
}