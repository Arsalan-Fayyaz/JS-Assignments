// Q1) What will be the output in variables a, b & result after 
// execution of the following script:


// var a = 2, b = 1; 
// var result = --a - --b + ++b + b--; 

// Explain the output at each stage: 
// --a;                    output is: 1
// --a - --b;              output is: 1 - 0
// --a - --b + ++b;        output is: 1 - 0 + 1
// --a - --b + ++b + b--;  output is: 1 - 0 + 1 + 1 = 3 final output

// Q2) Write a program that takes input a name from user & 
// greet the user.

// var greet = prompt("Enter your name: ");
// alert("Welcome " + greet);

// Q4) Take 
// a) Take three subjects name from user and store them in 3 
// different variables. 
// b) Total marks for each subject is 100, store it in another 
// variable. 
// c) Take obtained marks for first subject from user and 
// stored it in different variable.  
// d) Take obtained marks for remaining 2 subjects from user 
// and store them in variables. 
// e) Now calculate total marks and percentage and show the 
// result in browser like this.(Hint: user table)


// a) Take 3 subjects from user
  var sub1 = prompt("Enter first subject name:");
  var sub2 = prompt("Enter second subject name:");
  var sub3 = prompt("Enter third subject name:");

  // b) Total marks for each subject
  var totalMarks = 100;

  // c) Take obtained marks for each subject
  var mark1 = Number(prompt("Enter obtained marks for " + sub1 + ":"));
  var mark2 = Number(prompt("Enter obtained marks for " + sub2 + ":"));
  var mark3 = Number(prompt("Enter obtained marks for " + sub3 + ":"));

  // Calculate totals and percentages
  var grandTotal = totalMarks * 3;
  var obtainedTotal = mark1 + mark2 + mark3;
  var percentage = (obtainedTotal / grandTotal) * 100;

  // d) Display result in table format
  document.write("<table border='1' cellspacing='0' cellpadding='5'>");
  document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr>");
  document.write("<tr><td>" + sub1 + "</td><td>" + totalMarks + "</td><td>" + mark1 + "</td><td>" + (mark1 / totalMarks * 100).toFixed(2) + "%</td></tr>");
  document.write("<tr><td>" + sub2 + "</td><td>" + totalMarks + "</td><td>" + mark2 + "</td><td>" + (mark2 / totalMarks * 100).toFixed(2) + "%</td></tr>");
  document.write("<tr><td>" + sub3 + "</td><td>" + totalMarks + "</td><td>" + mark3 + "</td><td>" + (mark3 / totalMarks * 100).toFixed(2) + "%</td></tr>");
  document.write("<tr><th>Total</th><th>" + grandTotal + "</th><th>" + obtainedTotal + "</th><th>" + percentage.toFixed(2) + "%</th></tr>");
  document.write("</table>");