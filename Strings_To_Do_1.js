// Strings To Do 1
// Write functions using the JavaScript language for all challenges. Use only a single JavaScript file for this assignment. 
// Do not use built-in methods (unless otherwise instructed). (.length is a property, and is allowed.)

// Remove Blanks
// Create a function that, given a string, returns all of that string’s contents, but without blanks.

// Examples:
// removeBlanks(" Pl ayTha tF u nkyM usi c ") => "PlayThatFunkyMusic"
// removeBlanks("I can not BELIEVE it's not BUTTER") => "IcannotBELIEVEit'snotBUTTER"

// RIOT
// R: I need to take in a string, and return the same string without blanks
// IO: If I input ("H e l l o!") I should get ("Hello")
// If I input ("hello"), I should get "hello"
// T: (""), (" ")
// Walk: Take in a string. Split the string into an array. Loop through the array, and if the current index is a blank,
// loop forwards through the array from the index of the blank, assigning each index the value of the one next, then
// set the length --, then continnue on through the first loop. Once looped, join and return the string

function removeBlanks(string) {
    if(string.length == 0){
        return string
    }
    else if(string.length == 1 && string[0] != " "){
        return string
    }
    let arrayToRemoveBlanks = []
    for(let idx = 0; idx < string.length; idx++) {
        arrayToRemoveBlanks.push(string[idx]);
    }
    for(let i = 0; i < arrayToRemoveBlanks.length; i++) {
        if(arrayToRemoveBlanks[i] == " "){
            for(let j = i; j < arrayToRemoveBlanks.length; j++){
                arrayToRemoveBlanks[j] = arrayToRemoveBlanks[j+1]
            }
            arrayToRemoveBlanks.length -=1
            i--
        }
    }
    return arrayToRemoveBlanks.join("");
}

const RBstring1 = removeBlanks(" Pl ayTha tF u nkyM usi c ")
const RBstring2 = removeBlanks("I can not BELIEVE it's not BUTTER")

console.log(RBstring1);
console.log(RBstring2);

// Get Digits
// Create a JavaScript function that given a string, returns the integer made from the string’s digits. 
// You are allowed to use isNaN() and Number()

// Examples:
// getDigits("abc8c0d1ngd0j0!8") => 801008
// getDigits("0s1a3y5w7h9a2t4?6!8?0") => 1357924680

// RIOT
// R: I have to take in a string and return an integer made from adding each integer to the end of the previous integer
// IO: If I input a string of letters and number, I should only recieve the numbers back
// T: ""," ","abc"
// WALK: I want to split the string into an array. I then want to loop through it, and if else check isNaN at each step.
// For every else, I will pass the value into a new array. I will then .join the array into a string, then I will set a new
// const var equal to Number(string). I will then return this var.

function getDigits(string) {
    const arrayFromString = [];
    for(let idx = 0; idx < string.length; idx++) {
        arrayFromString.push(string[idx]);
    }
    let newArrayContainingOnlyNumbers = [];
    for(let i = 0; i < arrayFromString.length; i++) {
        if(isNaN(arrayFromString[i]) == false){
            newArrayContainingOnlyNumbers.push(arrayFromString[i]);
        }
    }
    const integerFromCombinedNumbers = Number(newArrayContainingOnlyNumbers.join(""));
    return integerFromCombinedNumbers;
}

const GDstring1 = getDigits("abc8c0d1ngd0j0!8")
const GDstring2 = getDigits("0s1a3y5w7h9a2t4?6!8?0")

console.log(GDstring1)
console.log(GDstring2)

// Acronyms
// Create a function that, given a string, returns the string’s acronym (first letter of the word capitalized).
// You are allowed to use .split() and .toUpperCase()

// acronym(" there's no free lunch - gotta pay yer way. ") => "TNFL-GPYW". 
// acronym("Live from New York, it's Saturday Night!") => "LFNYISN".

// RIOT:
// R: I'm supposed to take in a string, capitalize the first letter of evey word, and return an array containing only the capitals
// IO: See above
// T: "", " ", "cake"
// WALK: I want to take in a string, use.split to split that string into an array based on spaces, then I want to capitalize
// every word, then I want to create a new array, then I want to loop through the first array and only pass into the new array
// the first letter of every word, then I want to join the array into a string, then return that string

function acronym(string) {
    const arrayFromString = string.split(" ").filter(word => word.length > 0);
    let capitalsArray = [];
    for(let i = 0; i < arrayFromString.length; i++) {
        capitalsArray.push(arrayFromString[i][0].toUpperCase())
        // This only pushes the capitalized first letters of words into the capitalsArray. 
        // If a word starts with a non-alphabetic character, nothing will be added to the capitalsArray for that word.
    }
    const acronymString = capitalsArray.join("");
    return acronymString;
}

const ACRNMstring1 = acronym(" there's no free lunch - gotta pay yer way. ")
const ACRNMstring2 = acronym("Live from New York, it's Saturday Night!")

console.log(ACRNMstring1)
console.log(ACRNMstring2)

// Count Non-Spaces
// Create a function that, given a string, returns the number of non-space characters found in the string. 

// Examples:
// countNonSpaces("Honey pie, you are driving me crazy") => 29
// countNonSpaces("Hello world !") => 11

// RIOT:
// R: I have to take in a string and return a count of all the non-space values in the array.
// IO: see examples
// T: "", " ", "abs"
// Walk: I want to loop through the string, and every time a char is not a space, add 1 to a count, then return the count

function countNonSpaces(string) {
    let countOfNotSpaces = 0;
    for(let i = 0; i < string.length; i++) {
        if(string[i] != " "){
            countOfNotSpaces++;
        }
    }
    return countOfNotSpaces;
}

const CNSstring1 = countNonSpaces("Honey pie, you are driving me crazy")
const CNSstring2 = countNonSpaces("Hello world !")

console.log(CNSstring1)
console.log(CNSstring2)

// Remove Shorter Strings
// Create a function that, given an array of strings and a numerical value,
// returns an array that only contains strings longer than or equal to the given value.

// Examples:
// removeShorterStrings(['Good morning', 'sunshine', 'the', 'Earth', 'says', 'hello'], 4) => 
// ['Good morning', 'sunshine', 'Earth', 'says', 'hello']
// removeShorterStrings(['There', 'is', 'a', 'bug', 'in', 'the', 'system'], 3) => ['There', 'bug', 'the', 'system']

// RIOT:
// R: I'm supposed to take in an array and an integer, and create a new array containing only the strings the same length
//  or longer than the integer
// IO: See above
// T: "", " "
// WALK: I will loop through the parameter array, and every time the string at that index has a length at or longer than the
// integer argument, I will push that string into the new array

function removeShorterStrings(array, shortArraysCheck) {
    let arrayWithShorterStringsRemoved = []
    for(let i = 0; i < array.length; i++) {
        if(array[i].length >= shortArraysCheck){
            arrayWithShorterStringsRemoved.push(array[i])
        }
    }
    return arrayWithShorterStringsRemoved;
}

RSSstring1 = removeShorterStrings(['Good morning', 'sunshine', 'the', 'Earth', 'says', 'hello'], 4)
RSSstring2 = removeShorterStrings(['There', 'is', 'a', 'bug', 'in', 'the', 'system'], 3)

console.log(RSSstring1)
console.log(RSSstring2)