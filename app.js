//Get the names of the two love birds", the submit button and display message

/* This can be refactored to reduce DOM manipulation */
const yourName = document.querySelector("#yourName").value;
const partnerName = document.querySelector("#partnerName").value;
const message = document.querySelector(".message");
const button = document.querySelector(".button");

/* event listener to calcuate love */
button.addEventListener("click",calculate);

function calculate(){
    // love calculation logic can go here
    let random =  Math.random() * 100;
    //the values of random can be round up to make it neater
// let numb = Math.floor

       // var lovers;
       random <= 25?message.innerHTML = `${yourName} and ${partnerName} dont get married you have a score of ${random}`:
       random <= 50 && random > 25?message.innerHTML = `${yourName} and ${partnerName} try later to marry you have a score of ${random}`:
       random <= 75 && random > 50?message.innerHTML = `${yourName} and ${partnerName} Please seek spiritual guidance you have a score of ${random}`:
       random <= 95 && random > 75? message.innerHTML = `${yourName} and ${partnerName} you can get married  you have a score of ${random}`:
       message.innerHTML = `Your both incompatible`
}
