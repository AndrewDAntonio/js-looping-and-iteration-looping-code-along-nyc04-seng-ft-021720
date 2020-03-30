// Code your solutions in this file
function writeCards(arr, event) {
    let thankYous = []
    for (let i = 0; i < arr.length; i++) {
        thankYous.push(`Thank you, ${arr[i]}, for the wonderful surprise gift!`);
    }
    return thankYous;
}

function countDown(num) {
    let i = 0;
    while(i <= num) {
        console.log(num - i);
        i++
    }
}