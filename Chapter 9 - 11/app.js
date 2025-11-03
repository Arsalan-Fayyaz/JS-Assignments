// Q1) Write a program to take “city” name as input from user. If 
// user enters “Karachi”, welcome the user like this: 
// “Welcome to city of lights”

// var userInput = prompt("Enter your city")
// if(userInput === "karachi"){
//     alert("Welcome to city of lights")
// }
// else{
//     alert("welcome to " + userInput)
// }

// Q2) Write a program to take “gender” as input from user. If the 
// user is male, give the message: Good Morning Sir. If the 
// user is female, give the message: Good Morning Ma’am. 

// var gender = prompt("Enter your Gender");
// if(gender === "male"){
//     alert("Good Morning Sir")
// }
// else{
//     alert("Good Morning Maam")
// }

// Q3) Write a program to take input color of road traffic signal 
// from the user & show the message according to this table: 

// var trafficSignal = prompt("Enter Signal Color");
// if(trafficSignal === "red"){
//     alert("Must Stop")
// }
// else if(trafficSignal === "yellow"){
//     alert("Ready to move")
// }
// else if(trafficSignal === "green"){
//     alert("Move Now")
// }
// else{
//     alert("invalid color")
// }

// Q4) Write a program to take input remaining fuel in car (in 
// litres) from user. If the current fuel is less than 0.25litres, 
// show the message “Please refill the fuel in your car” 

// var fuelCheck = Number(prompt("Enter your remaining fuel"));
// if(fuelCheck < 0.25){
//     alert("Please refill the fuel in your car")
// }
// else{
//     alert("Keep going you have enough fuel")
// }

// Q5) Write a program to take input the marks obtained in three 
// subjects & total marks. Compute & show the resulting 
// percentage on your page. Take percentage & compute 
// grade as per following table: 
// Show the total marks, marks obtained, percentage, grade & 
// remarks.

// var totalMarks = 300;
// var sub1 = Number(prompt("Enter marks is first subject"))
// var sub2 = Number(prompt("Enter marks is second subject"))
// var sub3 = Number(prompt("Enter marks is third subject"))
// var obtainedMarks = sub1 + sub2 + sub3;
// var percentage = (obtainedMarks/ totalMarks ) * 100;
// if(percentage >= 90){
//     document.writeln("Total Marks: " + totalMarks + "<br>")
//     document.writeln("Obtained Marks: " + obtainedMarks + "<br>")
//     document.writeln("percentage: " + percentage + "%" + "<br>")
//     document.writeln("Grade: A-one" + "<br>")
//     document.writeln("Excellent" + "<br>")
// }
// else if(percentage >= 70){
//     document.writeln("Total Marks: " + totalMarks + "<br>")
//     document.writeln("Obtained Marks: " + obtainedMarks + "<br>")
//     document.writeln("percentage: " + percentage + "%" + "<br>")
//     document.writeln("Grade: A" + "<br>")
//     document.writeln("Good" + "<br>")
// }
// else if(percentage >= 60){
//     document.writeln("Total Marks: " + totalMarks + "<br>")
//     document.writeln("Obtained Marks: " + obtainedMarks + "<br>")
//     document.writeln("percentage: " + percentage + "%" + "<br>")
//     document.writeln("Grade: B" + "<br>")
//     document.writeln("You need to improve" + "<br>")
// }
// else{
//     document.writeln("Total Marks: " + totalMarks + "<br>")
//     document.writeln("Obtained Marks: " + obtainedMarks + "<br>")
//     document.writeln("percentage: " + percentage + "%" + "<br>")
//     document.writeln("Grade: Fail" + "<br>")
//     document.writeln("Better luck next time" + "<br>")
// }

// Q6) Guess game: 
// Store a secret number (ranging from 1 to 10) in a variable. 
// Prompt user to guess the secret number. 
// a. If user guesses the same number, show “Bingo! Correct 
// answer”. 
// b. If the guessed number +1 is the secret number, show 
// “Close enough to the correct answer”.

// var secret = 6;
// var userguess = Number(prompt("Guess any number between 1 to 10"));
// if(secret === userguess){
//     alert("Bingo! Correct answer")
// }
// else if(secret === userguess + 1 ){
//     alert("Close enough to the correct answer")
// }
// else{
//     alert("Wrong Answer")
// }

// Q7) Write a program to check whether the given number is 
// divisible by 3. Show the message to the user if the number 
// is divisible by 3.

// var userNumber = Number(prompt("Enter number to check it's divisible by 3 or not"));
// if(userNumber % 3 === 0){
//     alert(userNumber + " is divisible by 3")
// }
// else{
//     alert(userNumber + " is not divisible by 3")
// }

// Q8) Write a program that checks whether the given input is an 
// even number or an odd number.

// var userInput = Number(prompt("Enter number to check it's even or odd"));
// if(userInput % 2 === 0){
//     alert(userInput + " is even number")
// }
// else{
//     alert(userInput + " is odd number")
// }



