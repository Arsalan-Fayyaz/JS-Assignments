// Q1) Declare an empty array using JS literal notation to store 
// student names in future. 

// var studentNames = [];

// Q2) Declare and initialize a strings array.

//var stringArray = ["Arsalan","Amna","Eman","Bisma"]

// Q3)  Declare and initialize a numbers array. 

//var numbersArray = [1,2,3,4,5]

// Q4) Declare and initialize a boolean array. 

//var boolArray = [true,false]

// Q5) Declare and initialize a mixed array. 

//var MixedArray = [1,"Arsalan",true]

// Q6) Declare and Initialize an array and store available 
// education qualifications in Pakistan (e.g. SSC, HSC, BCS, 
// BS, BCOM, MS, M. Phil., PhD). Show the listed 
// qualifications in your browser like:

// var education = ["SSC","HSC","BCS","BS","BCOM","MS","PhD"]
// document.writeln("1) ", education[0] + "<br>") 
// document.writeln("2) ", education[1] + "<br>") 
// document.writeln("3) ", education[2] + "<br>") 
// document.writeln("4) ", education[3] + "<br>") 
// document.writeln("5) ", education[4] + "<br>") 
// document.writeln("6) ", education[5] + "<br>") 
// document.writeln("7) ", education[6] + "<br>") 

// Q7)  Write a program to store 3 student names in an array.Take 
// another array to store score of these three students. 
// Assume that total marks are 500 for each student, display 
// the scores & percentages of students like: 

// var studentNames = ["Arsalan", "Maaz", "Rohail"]
// var studentMarks = [400, 410, 420]
// var totalMarks = 500;

// document.writeln("Score of ", studentNames[0], " is ", studentMarks[0], ". Percentage: ", (studentMarks[0] / totalMarks) * 100, "%"+ "<br>")
// document.writeln("Score of ", studentNames[1], " is ", studentMarks[1], ". Percentage: ", (studentMarks[1] / totalMarks) * 100, "%"+ "<br>")
// document.writeln("Score of ", studentNames[2], " is ", studentMarks[2], ". Percentage: ", (studentMarks[2] / totalMarks) * 100, "%"+ "<br>")

// Q8) Initialize an array with color names. Display the array 
// elements in your browser. 

// var colorsArray = ["red","green","blue","orange","white"]

// a. Ask the user what color he/she wants to add to the 
// beginning & add that color to the beginning of the array. 
// Display the updated array in your browser. 

// var colorsArray = ["red","green","blue","orange","white"]
// var addColorBeg = prompt("What color do you want to add at begining.")
// colorsArray.unshift(addColorBeg) 
// document.writeln(colorsArray)

// b. Ask the user what color he/she wants to add to the end 
// & add that color to the end of the array. Display the 
// updated array in your browser. 

// var colorsArray = ["red","green","blue","orange","white"]
// var addColorend = prompt("What color do you want to add at end.")
// colorsArray.push(addColorend) 
// document.writeln(colorsArray)

// c. Add two more color to the beginning of the array. 
// Display the updated array in your browser. 

// var colorsArray = ["red","green","blue","orange","white"]
// var addColor1Beg = prompt("What first color at begining.")
// colorsArray.unshift(addColor1Beg) 
// var addColor2Beg = prompt("What second color at begining.")
// colorsArray.unshift(addColor2Beg) 
// document.writeln(colorsArray)

// d. Delete the first color in the array. Display the updated 
// array in your browser. 

// var colorsArray = ["red","green","blue","orange","white"]
// colorsArray.shift()
// document.writeln(colorsArray)

// e. Delete the last color in the array. Display the updated 
// array in your browser. 

// var colorsArray = ["red","green","blue","orange","white"]
// colorsArray.pop()
// document.writeln(colorsArray)

// f. Ask the user at which index he/she wants to add a color 
// & color name. Then add the color to desired 
// position/index. . Display the updated array in your 
// browser. 

// var colorsArray = ["red","green","blue","orange","white"];
// var index = +prompt("At which index do you want to add a color? (0 to " + colorsArray.length + ")");
// var colorName= prompt("Enter color name you want to add: ");

// colorsArray.splice(index,0,colorName);
// document.writeln("Updated Array: ", colorsArray)

// g. Ask the user at which index he/she wants to delete 
// color(s) & how many colors he/she wants to delete. Then 
// remove the same number of color(s) from user-defined 
// position/index. . Display the updated array in your 
// browser.

// var colorsArray = ["red","green","blue","orange","white"];
// var index = +prompt("At which index do you want to delete a colors? (0 to " + colorsArray.length + ")");
// var delcolor= +prompt("How many colors you want to delete");

// colorsArray.splice(index,delcolor);
// document.writeln("Updated Array: ", colorsArray)

