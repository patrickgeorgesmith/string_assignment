// # String Exercises

// 1. `console.log` the first character of a string.

let str = "ashya"
// console.log(str[0])

// 2. `console.log` the length of a string.

// console.log(str.length)

// 3. `console.log` the last character of any string. 

console.log(str[str.length - 1])

// 4. Create a code block that takes a single string variable, and returns a copy of the string with the last letter capitalized. For example:

let name = "aaron"
let capitalized = name.slice(0, 4) + name[4].toUpperCase()
console.log(capitalized)

// ```js
// 'jimmy'
// // => 'jimmY'
// ```

// 5. Create a drEvil code block that will take a single number variable, and log the '<variableAmount> dollars',
// your code block should add '(pinky)' at the end of the amount if it's 1 million. For example:

let amount = 1000000
if (amount === 1000000) {
    console.log(amount + " dollars " + "(pinky)")
} else {
    console.log(amount + " dollars")
}


// ```js
// let amount = 10
// // => 10 dollars
// let amount = 1000000
// // =>  1000000 dollars (pinky)
// ```

// 6. Create a `verbing` code block. It should take a single string variable. If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing', in which case it should add 'ly' instead. If the string length is less than 3, it should leave it unchanged. 
// For example:

let verbing = "training"
if (verbing.endsWith("ing")) {
    console.log(verbing + "ly")
}else if (verbing.length >= 3) {
    console.log(verbing + "ing")
} else if (verbing.length < 3) {
    console.log(verbing)
}


// ```js
// verbing('box')
// // => 'boxing'
// verbing('train')
// // => 'training'
// verbing('swimming')
// // =>  'swimmingly'
// verbing('go')
// // =>  'go'
// ```
 
// 7. Create a `withoutLast` code block that takes a single string variable, and returns a copy of the string without the last word.

let withoutLast = "bad days"
// console.log(withoutLast.length)
// console.log(withoutLast.slice(0, 5))

let newWord = withoutLast.split(" ")
console.log (newWord)
let thirdWord = newWord[0]
console.log(thirdWord)


// ## Bonus Questions

// 1. Write a code block that adds a "#" to a string if the string has an odd number of characters, otherwise leave it as is.
// print/log the result

let testString = "You are hidden";
if (testString.length % 2 !== 0) {
    console.log(testString + "#")
} else {
    console.log(testString)
}

//     Examples:

//   ```js
//   let name = 'taq'  // should log 'taq#'
//   let name2 ='john' // should log 'john'
//   ```
// ___

// 2. Write a code block that prints/logs the 3rd to last characters of a string.
// If the string is not at least 3 characters long then log an error message.

let lyrics = "there"
let newWord1 = lyrics.split(" ")
if (newWord1.length >= 3) {
    console.log(newWord1[2])
} else {
    console.log("error message")
}
// <details>
//     <summary>
//         Hint
//     </summary>
//     It should work for strings of any length. 
// </details>

// Examples, for variables: 
// ```js
// let name1 = 'Taq' // Should log 'Taq'
// let sentence = 'He is Taq'
// Should log 'Taq'
// ```
// ___

// 3. Write a code block that prints/logs whether a string `x` starts with a vowel.

let vowel = "Ear were forgotten"
let var1 = vowel.split(" ")
console.log(var1)
let var2 = var1[0]
console.log(var2)
let var3 = var2[0].toLowerCase()
console.log(var3)


if (var3 === "a" || var3 === "e" || var3 === "i" || var3 === "o" || var3 === "u") {
  console.log("contains a vowel")
} else {
  console.log("does not contain a vowel")
}

// <details>
//   <summary>
//     Extra
//   </summary>

//   Make it [case insensitive](https://en.wikipedia.org/wiki/Case_sensitivity)

// </details>

// ___

// 4. Write a code block that given two strings, `str1` and `str2`, prints/logs a new string with `str2` mashed into the middle of `str1`

let str1 = "hello"
let str2 = "world"
let newWord2 = str1.slice(0, 3)
console.log(newWord2)
let newWord3 = str1.slice(3, 6)
console.log(newWord3)
console.log(newWord2 + str2 + newWord3)

// Examples:

//   - For `str1` = 'help' and `str2` = 'me'. Your program should log `'hemelp'`

//    - For `str1` = 'hello' and `str2` = 'world'. Your program should log `'helworldlo'`

// ___

// 5. Write a code block that prints/logs whether a string `x` has at least one vowel in it.

let string = "You are not forgotten"
let var13 = string.toLowerCase()
console.log(var13)
if (var13.includes('a') || var13.includes('e') || var13.includes('i') || var13.includes('o') || var13.includes('u'))){
 console.log("'" + var13 + "'" + " contains a vowel")
} else {
 console.log("'" + var13 + "'" + " does not contain a vowel")
}


// Examples:
//   - For `x` = 'taq'. Your program should log `'taq' has a vowel'`
//   - For `x` = 'dfghjkl'. Your program should log `'dfghjkl' does not have a vowel'`
//   - For `x` = '' Your program should log `'' does not have a vowel'`

// <details>
//   <summary>
//     Extra & Hint:
//   </summary>
  
//   - **Hint**: Abstain from using loops. Explore string methods.

//   - **Extra**: Make it [case insensitive](https://en.wikipedia.org/wiki/Case_sensitivity). So that for `x` = 'TAQ' it should log 
//   `'TAQ' has a vowel`
// </details>

// ___

// ### Practice Makes Perfect.
// Find at [CodingBat](https://codingbat.com/java/String-1) more problems/questions to keep practicing. You can pick which ones to do. You can ignore the fact that their solutions are supposed to be written in Java, I trust you that you can write a solution code block in JavaScript. Create a file `codingBatStrings.js` copy and paste the problem statement as a comment, underneath write your solution.

// > **Remember**: This are bonuses and extra points. You don't have to do them but if you do, you will just get better.

