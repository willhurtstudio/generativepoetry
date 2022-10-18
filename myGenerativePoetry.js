// this is a string, it has quotation marks at the start and end
let opening = "Once upon a time "

// these are arrays of strings
let article = ["I ", "He ", "She ", "They ", "We "]

let verbs = ["Ate ", "Talked ", "Walked ", "Forgot ", "Reminisced "]

let adjectives = ["violently", "slowly", "directly", "softly"]


// console.log displays content in the console
console.log(opening + randomStringFromArray(article) + randomStringFromArray(verbs) + randomStringFromArray(adjectives))


// this is a for loop, it will run the code in curly brackets 10 times
for(let i = 0; i < 10; i++){
    console.log(opening + randomStringFromArray(article) + randomStringFromArray(verbs) + randomStringFromArray(adjectives))
}

// this is a function to return a random string from an array of strings
function randomStringFromArray(inputArray){
    let randomNumber = Math.floor(Math.random()*inputArray.length)
    return inputArray[randomNumber]
}