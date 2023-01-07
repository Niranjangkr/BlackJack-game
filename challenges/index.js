// recap
/*//sorting orages and apples on theri respective shelf
let fruit = ["orange", "apple", "orange", "orange", "apple","orange","apple","orange"]
let appleShelf = document.getElementById("apple")
let orangeShelf = document.querySelector("#orange")

sortFruit()

function sortFruit(isApple){
    for(i = 0; i < fruit.length; i++){
        if (fruit[i] === "apple"){
            appleShelf.textContent += fruit[i] + " "
        }else if (fruit[i] === "orange"){
            orangeShelf.textContent += fruit[i] + " "
        }
    }
}*/


/*// rock papaer scisor

let hands = ["rock", "paper", "scisor"] 

function randomHands(){
    let index = Math.floor(Math.random() * 3)
    return hands[index]
}

let person1 = randomHands()
let person2 = randomHands()
console.log("person1: "+person1+"\n"+"Person2: "+person2)
if (person1 === "rock" && person2 === "scisor"){
    console.log("Person1 wins")
}else if (person1 === "paper" && person2 === "rock"){
    console.log("Person1 wins")
}else if (person1 === "scisor" && person2 === "paper"){
    console.log("Person1 wins")
}else if (person1 === person2){
    console.log("Match Draw")
}else{
    console.log("Person2 wins")
}*/


/*// logical operator
let dayOfMonth = 13
let weekDay = "Friday"

if(dayOfMonth === 13 && weekDay ==="Friday"){
    console.log("):")
}*/

/*//pop() push() unshift() shift()
let largestCountries = ["Tuvalu","India","USA","Indonesia", "Monaco"]
console.log(largestCountries)
largestCountries.pop()
largestCountries.push("Pakistan")
largestCountries.shift()
largestCountries.unshift("China")
console.log(largestCountries)
*/

/*// for loops and arrays
let largestCountries = ["China","India","USA","Indonesia", "Pakistan"]
console.log("The 5 largest Countries in the world")
for (let i = 0; i < largestCountries.length; i++){
    console.log(" - "+largestCountries[i])
}*/


/*//if else
let age = 18
if (age < 6){
    console.log("Free")
}else if(age < 18){ 
    console.log("child discount")
}else if(age < 27){
    console.log("student discount")
}else if(age < 67){
    console.log("Full price")
}else{
    console.log("senior citizen discount")
}
*/



/*//objects
let person = {
    name: "Niranjan Gaonkar",
    age: 21,
    country: "India",
    logData: function(){
        console.log(person.name+ " is "+person.age+" years old and lives in "+person.country);
    }
}

// function logData(){
//     console.log(person.name+ " is "+person.age+" years old and lives in "+person.country);
// }

person.logData()   */


/* //creating objects 

let castle = {
    name: "Von Neuman castle",
    place: "Mountain area, LA",
    lakeViewisThere: true,
    contact: 4243443,
    foodItemList: ["regional dish", "local cuisine", "French Noodles", "Ramen","sushi"]
}

console.log(castle.foodItemList)
let phone = castle["contact"]
console.log(phone)
console.log(castle["name"])
console.log(castle.foodItemList[castle.foodItemList.length - 1]) */

// let likeDocumentries = false
// let likeStartups = true

// if (likeDocumentries === true || likeStartups === true){
//     recommendMovie()
// }

// function recommendMovie(){
//     console.log("Watch FYRE Now")
// }

// let hasSolvedChallenge = false
// let hasHintsLeft = false

// if (!hasHintsLeft && !hasSolvedChallenge){
//     showSolution()
// }

// function showSolution(){
//     console.log("Showing the solution")
// }


// let hasCompletedCourse = true
// let givesCertificate = true
// if (hasCompletedCourse && givesCertificate){
//     generateCertificate()
// }

// function generateCertificate(){
//     console.log("generating certificate...")
// }

// function rollDice(){

//     return randomNumber = Math.floor(Math.random() * 7)
    
// }

// let dice = rollDice()
// console.log(dice)

// let randomNumber = Math.floor(Math.random() * 6) + 1
// console.log(randomNumber)


// let randomNumber = Math.floor(Math.random() * 6)
// console.log(randomNumber)// range is now from 0 to 5

// let randomNumber = Math.random() * 6 //here range is from 0 to 5.9999 (not inclusive of 6 )
// console.log(randomNumber)

// let flooredNumber = Math.floor(5.9999999)
// console.log(flooredNumber)// Math.floor rounds of the decimal number to the lower integer value it. Simply speaking it removes the decimal numbers
 

// //Math.random()
// let randomNumber = Math.random()
// console.log(randomNumber)

/*
what does Math.random do: It generates a number randomly between 0 and 1 (not inclusive of 1)
May be It divides a number in a cyclic range and incrementing the range values alternatively 
Its not completely random it just looks random to us humans its very hard to generate complete random num
*/ 

// // for loop to render content in p tag 
// let sentence = ["Hello ", "My ", "Name ", "is ", "Niranjan", ", am ", 21]
// let greetingEl = document.getElementById("greeting-el")

// for (let i = 0; i < sentence.length; i++){
//     greetingEl.textContent += sentence[i]
// }

// //return values

// let player1time = 137
// let player2time =134 

// function fastestTime(){
//     if (player1time < player2time){
//         return player1time 
//     }else if (player1time > player2time){
//         return player2time
//     }else{
//         return player1time
//     }
// }

// function totalRaceTime(){
//     return player1time + player2time
// }
// console.log(totalRaceTime())


////if else


// let firstCard = 10
// let secondCard = 11

// let sum = firstCard + secondCard
// // console.log(sum)

// if (sum < 21){
//     console.log("Do you wanna pick another card!")
// }else if(sum === 21){
//     console.log("Wohooo you'hv got a blackjack")
// }else{
//     console.log("you'r out of the game!")
// }

// let age = 22;
// if (age >= 21){
//     console.log("Welcome to the club")
// }else{
//     console.log("Sorry! You cannot enter the club")
// }

// let age = 10
// if (age < 100){
//     console.log("you are not eligible")
// }else if (age > 100){
//     console.log("you are not eligible now ! you already got one!!")
// }else{
//     console.log("Cogratulations!! here's your gift card")
// }

// if (100 == "100"){
//     console.log("hello")
// }
/*triple equals is more strict than double equals and so we mostly use triple equals sign 
if you use double equals it converts a number to a string if theres different type in both side which makes it less strict
if (100 == "100")--> this will be true although its a string but if you use triple equal then it will be false */


// // Boolean 
// console.log(4 == 3)//false
// console.log(5 > 2)// true
// console.log(12 > 12)// false
// console.log(3 < 0)//false
// console.log(3 >= 3)//true
// console.log(11 <= 11) //true
// console.log(3 <= 2) //false

// let featuredList = ["Check out my Netflix clone", "Here's my source code", "I've just relaunched my portflolio"]
// console.log(featuredList[0])

// let skills = ["Java", "HTMl", "css", "JavaScript","C", "C++", "Python"] 

// console.log(skills[1])
// console.log(skills[2])
// console.log(skills[skills.length - 1])
// console.log(featuredList.length)

// let mySelf = ["Niranjan", 21, iLikePizza = false]
// for (let i = 0; i < mySelf.length; i++){
//     console.log(mySelf[i])
// }

// let cards = [6, 4]
// console.log(cards)
// console.log(typeof(cards)) //Arrays are actually of object type
// cards.push(7)
// console.log(cards)

// let Message = [
//     "Hey, how's its going",
//     "Am great, Thank You! how are you?",
//     "Am great, Thankk You! how are you?",
//     "All good, Been working on my portfolio lately." 
// ]

// let newMessage = "same here!"
// Message.push(newMessage)
// // console.log(Message)
// // Message.pop(newMessage)
// // console.log(Message)

// for (let i = 0; i < Message.length; i++){
//     console.log(Message[i])
// }

// //for loop

// for (let count = 10; count < 21; count++){
//     console.log(count)
// }

// for (let i = 10; i <= 100; i += 10){
//     console.log(i)
// }

// let cards = [7, 3, 9]
// for (let i = 0; i <  cards.length; i++){
//     console.log(cards[i])
// }

