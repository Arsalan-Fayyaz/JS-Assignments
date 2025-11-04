// Q1) Write a program that takes a character (number or string) 
// in a variable & checks whether the given input is a 
// number, uppercase letter or lower case letter. (Hint: ASCII 
// codes:- A=65, Z=90, a=97, z=122).

// var character = prompt("Enter a character");
// if(character.length !== 1){
//     alert("Please Enter only one character")
// }
// else{
//     var ascii = character.charCodeAt(0)

//     if(ascii >= 48 && ascii <= 57){
//         alert("Input is a Number")
//     }
//     else if(ascii >= 65 && ascii <= 90){
//         alert("Input is an Uppercase character")
//     }
//     else if(ascii >= 97 && ascii <= 122){
//         alert("Input is a Lowercase character")
//     }
//     else{
//         alert("The input is not a number or letter")
//     }
// }

// Q2) Write a JavaScript program that accept two integers and 
// display the larger. Also show if the two integers are equal.

// var num1 = Number(prompt("Enter first number"))
// var num2 = Number(prompt("Enter Second number"))
// if(num1 > num2){
//     alert(num1 + " Is Larger")
// }
// else if(num1 < num2){
//     alert(num2 + " Is Larger")
// }
// else{
//     alert("Both are equal")
// }

// Q3) Write a program that takes input a number from user & 
// state whether the number is positive, negative or zero.

// var number = Number(prompt("Enter a number:"));
// if (number > 0) {
//   alert("The number is positive.");
// } else if (number < 0) {
//   alert("The number is negative.");
// } else {
//   alert("The number is zero.");
// }


// Q4) Write a program that takes a character (i.e. string of 
// length 1) and returns true if it is a vowel, false otherwise.

// var character = prompt("Enter a character");
// if(character.length !== 1){
//     alert("Please Enter only one character");
// }
// else{
//     var vowel = character.toLowerCase();
//     if(vowel === "a" || vowel === "e" ||vowel === "i" ||vowel === "o" ||vowel === "u"){
//         alert(true)
//     }
//     else{
//         alert(false)
//     }
// }


// Q5) Write a program that 
// a. Store correct password in a JS variable. 
// b.  Asks user to enter his/her password 
// c.  Validate the two passwords: 
// i. Check if user has entered password. If not, then 
// give message “ Please enter your password” 
// ii. Check if both passwords are same. If they are 
// same, show message “Correct! The password you 
// entered matches the original password”. Show 
// “Incorrect password” otherwise. 

// var password = "arsalan";
// var enterPass = prompt("Enter your password");
// enterPass = enterPass.toLowerCase();
// if(!enterPass){
//     alert("Please enter your password")
// }
// else if(password === enterPass){
//     alert("Correct! The password you entered matches the original password")
// }
// else{
//     alert("Incorrect password")
// }

// Q6) Write a program that takes time as input from user in 24 
// hours clock format like: 1900 = 7pm. Implement the 
// following case using if, else & else if statements.

// var userTime = Number(prompt("Enter Time"));
// if(userTime >= 0 && userTime < 1200){
//     alert("Good Morning!")
// }
// else if(userTime >= 1200 && userTime < 1700){
//     alert("Good Afternoon!")
// }
// else if(userTime >= 1700 && userTime < 2100){
//     alert("Good Evening!")
// }
// else{
//     alert("Good Night!")
// }



