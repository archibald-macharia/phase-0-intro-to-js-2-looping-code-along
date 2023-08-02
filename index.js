// Code your solutions in this file
// Returns an array of thank you messages for each name 
const names = ["Charlie", "Sam","Ali"];
function writeCards(names){
    const thankYouMessages = [];

    for (let i=0; i<names.length; i++){
        const name = names[i];
        const message = `Thank you, ${name}, for the wonderful surprise gift!`;
        thankYouMessages.push(message);
    }
    return thankYouMessages;
}
const thankYouMessages = writeCards(names);
console.log(thankYouMessages);

// logs each number counting down starting from the number provided (10-0)
function countDown(numbers){
    while (numbers >= 0){
        console.log(numbers);
        numbers--;
    }
}
countDown(10);