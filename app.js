         
                 // CHAPTER: 01   ALERT


// 1. Write a script to greet your website visitor using JS alert
// box

 alert("JavaScript box");



 // 2. Write a script to display following message on your web
 // page:
 alert("Erro! please enter valid password");
 
 // 3. Write a script to display following message on your web
 // page: (Hint : Use line break)
 
 
 alert("Welcome to JS Land...\n Happy Coding!");
 
 // 4. Write a script to display following messages in sequence
 
 
 alert("Welcome to JS Land...");
 
 alert("Happy Coding! \n ");
 
 
 // 5. Generate the following message through browser’s
 // developer console:
 
 alert("Hello...I can run through my web brower's concole");
 
 
 
 
 
 
 
 // CHAPTER : 02 VARIABLES AND STRINGSS
 
 
 
 
 
 
 // 1. Declare a variable called username.
 // 2. Declare a variable called myName & assign to it a string
 // that represents your Full Name.
 
 
 
 var username = "ramsha";
 var myname = "naseer";
 console.log(username,myname);
 
 
 // 3. Write script to
 // a) Declare a JS variable, titled message.
 // b) Assign “Hello World” to variable message
 // c) Display the message in alert box.
 
 var message;
 message = "hello world";
 console.log(message);
  alert(message);
 
 
 //  4. Write a script to save student’s bio data in JS variables and
 //  show the data in alert boxes.
 
  var name = "anna jack";
  var age = "20 years old";
  var course = "Certified Mobile Application Development";
 
  alert(name);
  alert(age);
  alert(course);
 
 
 //  5. Write a script to display the following alert using one JS
 //  variable:
 
 
 alert( "pizza\npizz\npiz\npi\np");  
 
 
 
 
 //  6. Declare a variable called email and assign to it a string that
 //  represents your Email Address(e.g. example@example.com).
 //  Show the blow mentioned message in an alert box.(Hint: use
 //  string concatenation)
  
  
  var message = "my email address is ";
   var email = "@example.com";
   var banger = "!";
   var fullemail = message + email + banger;
   alert(fullemail);
 
 
 //   7. Declare a variable called book & give it the value “A
 // smarter way to learn JavaScript”. Display the following
 // message in an alert box:
 
 
 var book = "I am trying to learn from the ";
 var book2 = "Book A smarter way to learn javascript";
 var fullbook = book + book2;
 alert(fullbook);
 
 // 8. Write a script to display this in browser through JS
 
 var text = "Yah! I can write HTML content through Javascript";
 document.write(text);
 
 
 // 9. Store following string in a variable and show in alert and
 // browser through JS
 // “▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”
 
 var x = "“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
 document.getElementById("demo").innerHTML = x; 
 alert(x);
 
 
 
 
 
 
 
 
 // CHAPTER:03 VARIABLE FOR NUMBERS
 
 
 
 
 
 
 
 // 1. Declare a variable called age & assign to it your age. Show
 // your age in an alert box.
 
 
 var age = prompt("what is your age ");
 alert(" i am " + age + " years old " );
 
 
 // 2. Declare & initialize a variable to keep track of how many
 // times a visitor has visited a web page. Show his/her
 // number of visits on your web page. For example: “You
 // have visited this site N times”.
 
 var visit = "you have visited this site 14 times"
 alert(visit);
 
 
 // 3. Declare a variable called birthYear & assign to it your
 // birth year. Show the following message in your browser:
 
 
 var birth = "My birthday year is 1990 <br> ";
 var year  = " Data type of my declared variable is number";
 
 document.getElementById("birthyear").innerHTML = birth + year;
 
 
 
 // 4. A visitor visits an online clothing store
 // www.xyzClothing.com . Write a script to store in variables
 // the following information:
 // a. Visitor’s name
 // b. Product title
 // c. Quantity i.e. how many products a visitor wants to
 // order
 // Show the following message in your browser: “John
 // Doe ordered 5 T-shirt(s) on XYZ Clothing store”.
 
 
 var visitor =("<b> John Doe </b> ordered ");
 var Product =(" <b> 5 T-shirt(s) </b>");
 var Quantity =("on <a> www.xyzClothing.com </a> clothing store");
 
 document.getElementById("mart").innerHTML = visitor + " " + Product + " " + Quantity;
 
 
 
 
 
 // // CHAPTER: 04 VARIABLE NAMES:LEGAL ILLEGAL
 
 
 
 
 
 
 // 1. Declare 3 variables in one statement.
 
 
 
 var heading = "<h1>Rules for naming JS variables </h1> <br> "
 
 var variable1 = "Variable names can only contain, number , $";
 var variable2 = " and _ for example :";
 var variable3 = " $my_1stVariable";
 
 document.write(heading + variable1 + variable2 + variable3)
 
 
 // 2. Declare 5 legal & 5 illegal variable names.
 
 var text1 = " <br>  \n Variable must begin with a  ";
 var legal1 = "letter, ";
 var legal2 = " $";
 var legal3 = "_ . For example $name,_name or name";
 
 document.write(text1 + legal1 + legal2 + legal3)
 
 
 
 // 3. Display this in your browser
 // a) A heading stating “Rules for naming JS variables”
 // b) Variable names can only contain ______, ______,
 // ______ and ______.
 // For example $my_1stVariable
 // c) Variables must begin with a ______, ______ or
 // _____. For example $name, _name or name
 // d) Variable names are case _________
 // e) Variable names should not be JS _________
 
 var case1 = "<br>  Variable names are case";
 var case2 = "sensitive";
 document.write (case1 + case2)
 
 
 var word1 = "<br> variable names should not be JS ";
 var word2 = "keyword";
 document.write (word1 + word2)
 
 
 
 
 
 
 // CHAPTER:05 MATHS EXPRESSION
 
 
 
 
 
 // 1. Write a program that take two numbers & add them in a
 // // new variable. Show the result in your browser.
 
 
 var popnumber = "<br> <b> Sum of 3 and 5 is </b> \n";
 var num1 = 3;
 var num2 = 5;
 var Sum = num1 + num2;
 
 document.write(popnumber + Sum);
 
 
 // 2. Repeat task1 for subtraction, multiplication, division &
 // modulus.
 
 
 var popnumber = "<br> <b> Sum of 3 and 5 is </b> \n";
 var num1 = 3;
 var num2 = 5;
 var Sum = num1 + num2;
 
 document.write(popnumber + Sum);
 
 
 
 var popnumber = "<br> <b> Sum of 3 and 5 is </b> \n";
 var num1 = 3;
 var num2 = 5;
 var Sub = num1 - num2;
 
 document.write(popnumber + Sub);
 
 
 
 var popnumber = "<br> <b> Sum of 3 and 5 is </b> \n";
 var num1 = 3;
 var num2 = 5;
 var mul = num1 * num2;
 
 document.write(popnumber + mul);
 
 
 var popnumber = "<br> <b> Sum of 3 and 5 is </b> \n";
 var num1 = 3;
 var num2 = 5;
 var div = num1 / num2;
 
 document.write(popnumber + div);
 
 
 
 var popnumber = "<br> <b> Sum of 3 and 5 is </b> \n";
 var num1 = 3;
 var num2 = 5;
 var mod = num1 %  num2;
 
 document.write(popnumber + mod);
 
 
 // 3. Do the following using JS Mathematic Expressions
 // a. Declare a variable.
 // b. Show the value of variable in your browser like “Value
 // after variable declaration is: ??”.
 // c. Initialize the variable with some number.
 // d. Show the value of variable in your browser like “Initial
 // value: 5”.
 // e. Increment the variable.
 // f. Show the value of variable in your browser like “Value
 // after increment is: 6”.
 // g. Add 7 to the variable.
 // h. Show the value of variable in your browser like “Value
 
 
 
 
 var a = " <br><br><br> Value after variable declaration is undefines \n";
 var b = "<br> inital value: \n 5 <br>";
 
 document.write( a + b ) ;
 
 
 
 
 
 var i = "value after increment is: \n" ;
 var r = 5;
 document.write(i + ++r);
 
 
 var w = "<br>Value after addition is: \n";
 var x = 5;
 var y = 8;
 var z = x + y;
 document.write(w + z);
 
 
 
 
 var a = "<br>Value after decrement is : \n";
 var b = 13;
  document.write(a + --b );
 
 
 
 
 
  var h = "<br>ِThe remaineder is: \n";
  var g = 0;
  document.write(h + g);
 
 
 
 //  4. Cost of one movie ticket is 600 PKR. Write a script to
 //  store
 //  ticket price in a variable & calculate the cost of buying 5
 //  tickets
 //  to a movie. Example output:
 
 
 var c = "\n<br>Total cost to buy 5 tickets to a movie is \n";
 var t = 5;
 var f = 600;
 var m = t * f;
 
 document.write(c + m);
 
 
 // 5. Write a script to display multiplication table of any
 // number in your browser. E.g
 
 
 var n = "<br><br><b>Table of 2</b> <br>";
 document.write(n);
         var t =  9;
         for (var a = 1; a <= 10; a++) {
 
       document.write( "<br>"+ a +"*"+ t + "=" + a*t + "<br>" + "<br>")
 }
 
 
 
 // 6. The Temperature Converter: It’s hot out! Let’s make a
 // converter based on the steps here.
 // a. Store a Celsius temperature into a variable.
 // b. Convert it to Fahrenheit & output “NNoC is NNoF”.
 // c. Now store a Fahrenheit temperature into a variable.
 // d. Convert it to Celsius & output “NNoF is NNoC”.
 
 
 
 function cToF(celsius) 
 {
   var cTemp = celsius;
   var cToFahr = cTemp * 9 / 5 + 32;
   var message = cTemp+'\xB0C is ' + cToFahr + ' \xB0F.';
     document.write(message + "<br>");
 }
 
 function fToC(fahrenheit) 
 {
   var fTemp = fahrenheit;
   var fToCel = (fTemp - 32) * 5 / 9;
   var message = fTemp+'\xB0F is ' + fToCel + '\xB0C.';
     document.write(message);
 } 
 cToF(60);
 fToC(45);
 
 
 
 // 7. Write a program to implement checkout process of a
 // shopping cart system for an e-commerce website. Store
 // the following in variables
 
 
 var p = "Price of item 1 is ";
 var cost1 = 650;
 document.write("<br>"+"<br>"+ p + cost1);
 
 
 var k = "Price of item 2 is";
 var cost2 = 650 * 2;
 document.write("<br>" + k + cost2);
 
 
 var b =" Ordered quantity of item 1";
 var cost3 = "3";
 
 document.write("<br>" + b + cost3);
 
 
 
 
 
 var h =" Ordered quantity of item 2";
 var cost4 = 3 *2;
 
 document.write("<br>" + h + cost4);
 
 
 
 var d ="  Shipping charges \n";
 var c = 300;
 
 document.write("<br>" + d + c);
 
 
 
 
 
 var w = "Total cost of your order is ";
 var sum = (cost1 + cost2 + cost3 + cost4);
 document.write("<br>" + w + sum);
 
 
 
 
 // 8. Store total marks & marks obtained by a student in 2
 // variables. Compute the percentage & show the result in
 // your browser
 
 
 var mark = "<h1>MARK SHEET</h1>"
 var marks1 =" Total marks ";
 var n =  980;
 
 document.write("<br>" +"<br>"+mark+ marks1 + n);
 
 
 
 var mark2 =" Marks obtained ";
 var num =  804;
 
 document.write("<br>" + mark2 + num);
 
 
 var per = " percentage \n";
 var t =( n / num )% 100;
  document.write("<br>" + per + t + "%");
 
 
 //  9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a
 //  script to convert the total currency to Pakistani Rupees.
 //  Perform all calculations in a single expression.
 //  (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
 //  and 1 Saudi Riyal = 28 Pakistani Rupee)
 
 
 
 var heading ="<h1>Currency in PKR</h1>";
 
 var text = "Total Currency in PKR: ";
  var us = 104.80 ;
 var d = 10;
 var k = d * us; 
  var sau =  28;
  var l = 25;
  var w = l * sau;
  
  var a = k + w ;
 
  document.write("<br>" + "<br>"+ "<br>"+ heading +text + a )
 
 
 
 //  10. Write a program to initialize a variable with some
 // number and do arithmetic in following sequence:
 
  var add = 5 + 5;
  var mul = 10 * 10;
  var div = 100 / 2;
 var t = add ;
 var e = mul ;
 var p = div;
 
   document.write("<br>"+"<br>"+"<br>" +"add \n"+ t +"<br>" +"mul \n"+ e +"<br>"+"div \n"+ p);
 
 
 
 
   // 1. The Age Calculator: Forgot how old someone is?
   // Calculate it!
 
 
 var cal = "<h1>Age Calculator</h1>";
   var year = "Current Year: ";
   var d = 2019;
 
   var birth = "Bith Year: ";
   var y = 1992;
 
   var age = "Your Age is: ";
   var ans = d - y;
   document.write("<br>"+ cal + year + d +"<br>"+ birth + y +"<br>"+ age + ans);
 
 
 
   // 12. The Geometrizer: Calculate properties of a circle.
   // a. Store a radius into a variable
 
 
   var geo = "<h1>The Geometrizer</h1>";
   var rad = "Radius of a circle: ";
   var v = 20 ;
   var cir = "The circumference is: ";
   var p = v * 3.142 * 2;
 
   var area = "The area is: ";
 var l = 3.142 * 400;
 
 document.write("<br>" + geo +"<br>"+ rad + v +"<br>"+ cir + p +"<br>"+ area + l  )
 
 
 
 // 13. The Lifetime Supply Calculator: Ever wonder how
 // much a “lifetime supply” of your favorite snack is?
 // Wonder no more.
 
 
 var i = "<h1>The Lifetime Supply Calculator</h1>";
 var fav = "Favourite Snack: Chocolate chip";
 var current = "Current age: ";
 var c = 15;
 var es ="Estimated Maximum Age: ";
 var b = 65;
 var snack =" Amount of snacks per day: ";
 var m = 3;
 var q = m * b;
 var x = "You will need ";
 var cho =" chocolate chip to last  you until the ripe old age of 65"; 
 
 document.write("<br>" + i + fav +"<br>" + current + c +"<br>" + es + b + "<br>" +
 snack + m +"<br>" + x + q + cho );
 
 
 
 // CHAPTER: 06-09 MATHS EXPRESSION
 
 
 // 1. Write a program to take a number in a variable, do the
 // required arithmetic to display the following result in your
 // browser:
 
 
 
 
 
 var txt1= "<h1>RESULT</h1>the value of a is:10 ";
 document.write("<br>"+txt1);
 
 var txt2 = "the value of ++a is: ";
 var f = 1;
 var d = "now the value od ++a is: ";
 document.write("<br>" +"<br>" +txt2 + f + "<br>" + d + ++f);
 
 
 var txt2 = "the value of a++ is: ";
 var f = 1;
 var d = "now the value od a++ is: ";
 document.write("<br>" +"<br>" +txt2 + f + "<br>" + d + f++);
 
 
 var txt2 = "the value of --a is: ";
 var f = 1;
 var d = "now the value of --a is: ";
 document.write("<br>" +"<br>" +txt2 + f + "<br>" + d + --f);
 
 var txt2 = "the value of a-- is: ";
 var f = 1;
 var d = "now the value of a-- is: ";
 document.write("<br>" +"<br>" +txt2 + f + "<br>" + d + f--);
 
 
 
 // 2. What will be the output in variables a, b & result after
 // execution of the following script:
 
 var a = 2, b = 1;
 var result = --a ;
 document.write("<br>"+"<br>"+"<br>"+"--a result is: "+result);
 
 var a = 2, b = 1;
 var result = --a - --b;
 document.write("<br>"+"--a - --b result is: "+result);
 
 
 var a = 2, b = 1;
 var result = --a - --b + ++b;
 document.write("<br>"+"--a - --b + ++b result is: "+result);
 
 
 
 var a = 2, b = 1;
 var result = --a - --b + ++b + b--;
 document.write("<br>"+"--a - --b + ++b + b--  result is: "+result);
 
 
 
 // 3..Write a program that takes input a name from user &
 // greet the user
 
 var name= prompt("Enter your name ");
 alert( name +"\n" + "Good Evening");
 
 
 // 5. Write a program to take input a number from user &
 // display it’s multiplication table on your browser. If user
 // does not enter a new number, multiplication table of 5
 // should be displayed by default.
 
 
 var user= prompt("Enter any table number");
 var a =1;
 for( var a =1; a<=10; a++){
 
 document.write("<br>" +"<br>" + user + "*" + a + "=" + (user * a)  );
 
 }
 
 
 // 6. Take
 // a) Take three subjects name from user and store them in 3
 // different variables.
 // b) Total marks for each subject is 100, store it in another
 // variable.
 // c) Take obtained marks for first subject from user and
 // stored it in different variable.
 // ALERTS | JAVASCRIPT
 // Page 3 of 3
 // d) Take obtained marks for remaining 2 subjects from user
 // and store them in variables.
 // e) Now calculate total marks and percentage and show the
 // result in browser like this.(Hint: user table)
 
 
 var heading = "<h1>SUBJECT</h1>";
 var sub1 = prompt("Enter first subject name");
 var sub2 = prompt("Enter second subject name");
 var sub3 = prompt("Enter third subject name");
 
 
 document.write("<br>" + heading + sub1 +"<br>"+ sub2 +"<br>"+ sub3);
 
 
 var heading = "<h1>TOTAL MARKS</h1>";
 var sub1 = ("Total marks: ");
 var sub2 = ("Total marks: ");
 var sub3 = ("Total marks: ");
 var n = 650;
 
 
 document.write("<br>" + heading + sub1 +n+"<br>"+ sub2 +n +"<br>"+ sub3 + n);
 
 
 
 var heading = "<h1>OBTAINED MARKS</h1>";
 var sub4 = prompt("obtained marks of first subject: ");
 var sub5 = prompt("obtained marks of first subject: ");
 var sub6 = prompt("obtained marks of first subject: ");
 
 document.write("<br>" + heading + sub4 +"<br>"+ sub5  +"<br>"+ sub6 );
 
 
 
 
 var heading ="<h1>PERCENTAGE</h1>";
 var per1 = (n/sub4) % 100;
 var per2= (n/sub5) % 100;
 var per3 = (n/sub6) % 100;
 
 
 document.write("<br>" +heading)
 
 document.write(per1+" %"+ "<br>");
 
 document.write(per2+ "%"+ "<br>");
 
 document.write(per3+ "%"+ "<br>");
 
 
 
 
 
 // CHAPTER:09-1 USER INPUT AND CONDITIONAL STATMENT
 
 // 1. Write a program to take “city” name as input from user. If
 // user enters “Karachi”, welcome the user like this:
 // “Welcome to city of lights”
 
 
 var city =prompt("Enter your city name");
 if ( city =="karachi"){
 
   document.write("<h1>Welcome to city lights</h1>")
 }
 
 else {
 document.write("other city")
 
 }
 
 
 // 2. Write a program to take “gender” as input from user. If the
 // user is male, give the message: Good Morning Sir. If the
 // user is female, give the message: Good Morning Ma’am.
 
 
 var gender =prompt("Enter your gender");
 if(gender == "female"){
 document.write("<h1>Good morning Ma'm</h1>")
 
 
 }
 
 else {
   document.write("<h1>Good morning Sir</h1>")
 }
 
 
 // 3. Write a program to take input color of road traffic signal
 // from the user & show the message according to this table:
 
 
 var color =prompt("Enter color of traffic signal");
 if(color === "red"){
   document.write("<br>" + "<h2>must stop</h2>")
 }
 
 else if (color === "Yellow"){
   document.write("<br>" + "<h2>reday to move</h2>")
 }
 else if(color === "green"){
   document.write("<br>" + "<h2>move now</h2>")
 }
 
 else {
 
   document.write("invalid try again")
 }
 
 
 
 // 4. Write a program to take input remaining fuel in car (in
 //   litres) from user. If the current fuel is less than 0.25litres,
 //   show the message “Please refill the fuel in your car”
   
 
 var fuel = prompt("Enter remaining fuel in the car(in litres)");
 
 if (fuel < 0.25 ){
   document.write("<br>"+"Please refill the fuel in your car")
 }
 
 else{
   document.write("enough")
 }
 
 
 // 5. Run this script, & check whether alert message would be
 // displayed or not. Record the outputs
 
  var a = 4;
 if (++a === 5){
 alert("given condition for variable a is true");
 
 
 }
  var b = 82;
 if (b++ === 83){
 alert("given condition for variable b is true");
 }
  var c = 12;
 if (c++ === 13){
 alert("condition 1 is true");
 }
 if (c === 13){
 alert("condition 2 is true");
 }
 if (++c < 14){
 alert("condition 3 is true");
 }
 if(c === 14){
 alert("condition 4 is true");
 }
  var materialCost = 20000;
 var laborCost = 2000;
 var totalCost = materialCost + laborCost;
 if (totalCost === laborCost + materialCost){
 alert("The cost equals");
 }
  if (true){
 alert("True");
 }
 if (false){
 alert("False");
 }
 if("car" < "cat"){
   alert("car is smaller than cat");
   }
 
 
 //   6. Write a program to take input the marks obtained in three
 // subjects & total marks. Compute & show the resulting
 // percentage on your page. Take percentage & compute
 // grade as per following table:
 
 var heading = "<h1>MARK SHEET</h1>"
 var mark7 = prompt("Enter first sub marks obtained");
 var mark8 =prompt("Enter second sub marks obtained");
 var mark9 = prompt("Enter third sub marks obtained");
 var ob = mark7+ mark8 + mark9;
 document.write("<br>"+heading +"Marks obtained: " + ob +"<br>");
 var total = 300;
 document.write("<br>" + "Total marks" + total);
 var per = ob/total % 100;
 document.write("<br>" + "percentage" + per);
 
 var per = ob/total % 100;
 if ( per > 80){
   document.write("A-one")
 }
 
 else if (per > 70){
   document.write("A")
 }
  else if (per > 60 ){
    document.write("B")
  }
 else if (per < 60 ){
   document.write("fail")
 }
 
 
 
 
 // 7. Guess game:
 // Store a secret number (ranging from 1 to 10) in a variable.
 // Prompt user to guess the secret number.
 // a. If user guesses the same number, show “Bingo! Correct
 // answer”.
 // b. If the guessed number +1 is the secret number, show
 // “Close enough to the correct answer”.
 
 
 
 var secret = prompt("Guess the secret number");
 if (secret == 4){
 
   document.write("<br>" + "Bingo!")
 }
 
 else if (secret == 3) {
   document.write("<br>" +" “Close enough to the correct answer”")
 }
 
 else{
   document.write("<br>" + "Wrong Answer")
 }
 
 
 
 // 8. Write a program to check whether the given number is
 // divisible by 3. Show the message to the user if the number
 // is divisible by 3.
 
 
 
 var value_number = Number(prompt("Enter a Number : "));
  
 if(value_number % 3 == 0)
 {
 document.write("<font face='arial' size='4'> ");
             document.write("<br>"+"The number " +value_number+
             " is divisible by 3. </font>");
 }
 else
 {
 document.write("<font face='arial' size='4'> ");
             document.write("<br>"+"The number " + value_number+ 
             " is not divisible by 3. </font>");
 }
 
 // 9. Write a program that checks whether the given input is an
 // even number or an odd number.
 
 var num_user= prompt("Enter any number to check even or odd");
 if (num_user % 2 === 0)
 {
   document.write("<font face='arial' size='4'> ")
 document.write("<br>"+ num_user  + " " + "is even  </font>")
 }
 else {
   document.write("<font face='arial' size='4'> ")
   document.write("<br>"+ num_user + " " + "is odd  </font>")
 }
 
 
 
 // 10. Write a program that takes temperature as input and
 // shows a message based on following criteria
 // a. T > 40 then “It is too hot outside.”
 // b. T > 30 then “The Weather today is Normal.”
 // c. T > 20 then “Today’s Weather is cool.”
 // d. T > 10 then “OMG! Today’s weather is so Cool.”
 
 
 var T = prompt("Enter temperature");
 if (T > 40 ){
   document.write("<br>"+"It is too hot outside.")
 }
 
 else if (T > 30){
   document.write("<br>"+"The Weather today is normal.")
 }
 else if(T > 20){
   document.write("<br>"+"Today's Weather is cool.")
 }
 
 else if(T > 10){
   document.write("<br>"+"OMG! Today's Weather is so cool")
 }
 
 else {
   document.write("<br>"+"Please enter corrent temperature")
 }
 
 
 
 // 1. Write a program to create a calculator for +,-,*, / & %
 // using if statements. Take the following input:
 // a. First number
 // b. Second number
 // c. Operation (+, -, *, /, %)
 // Compute & show the calculated result to user.
 
 
 var first_num= prompt("Enter first number");
 var Operation = prompt("Enter operator");
 var second_num= prompt("Enter second number");
 
 console.log(first_num + Operation + second_num);
 if (Operation === "+"){
 alert( (+first_num)  + (+second_num) )
 
 }
 
 else if (Operation === "-"){
   alert(first_num  - second_num)
   
   }
 
 else if (Operation === "*"){
   alert(first_num  * second_num)
   
   }
 
   else if (Operation === "/"){
     alert(first_num  / second_num)
     
     }
 
     else if (Operation === "%"){
       alert(first_num  / second_num * 100 + "%")
       
       }
     
 
 
 
 
 
       // CHAPTER: 12 - 13 IF…ELSE & ELSE IF STATEMENT, TESTING SET OF CONDITION
 
 
 
 
 
 //       1. Write a program that takes a character (number or string)
 // in a variable & checks whether the given input is a
 // number, uppercase letter or lower case letter. (Hint: ASCII
 // codes:- A=65, Z=90, a=97, z=122).
 
 
 var ch = prompt("Enter any character");
 
 
 if (ch>=65 && ch<=90){
     alert("Character is a capital letter")
 }
     else if (ch>=97 && ch<=122)
   {
     alert("Character is a small letter")
   }
     else if (ch>=48 && ch<=57){
   alert("Character is a digit")
 }
     else if ((ch>0 && ch<=47)||(ch>=58 && ch<=64)||
                (ch>=91 && ch<=96)||(ch>=123 && ch<=127)){
             alert("Character is a special symbol")
 
   }
 
 
 
               //  2. Write a JavaScript program that accept two integers and
               //  display the larger. Also show if the two integers are equal.
 
 
               var input1 = prompt("Enter first number:");
               var input2 = prompt("Enter second number:");
 
 if (input1 == input2) {
     console.log(input1 + " is equal to " + input2);
 } else if (input1 > input2) {
     console.log(input1 + " is larger than " + input2);
 } else {
     console.log(input1 + " is lesser than " + input2);
 }
 
 
 // 3. Write a program that takes input a number from user &
 // state whether the number is positive, negative or zero.
 
 
 var inp =prompt("Enter any number");
 
 if (inp >= 0){
 console.log(inp + "is positive")
 
 }
 else{
   console.log(inp + "is negative")
 } 
 
 
 // 4. Write a program that takes a character (i.e. string of
 //   length 1) and returns true if it is a vowel, false otherwise
   
 
 var char = prompt("Enter any character");
 if (char  === "a"){
   console.log(char +" "+"vowel")
 }
 else if (char  === "e"){
   console.log(char +" "+"vowel")
 }
 
 else if (char  === "i"){
   console.log(char +" "+"vowel")
 }
 else if (char  === "o"){
   console.log(char +" "+"vowel")
 }
 
 else if (char  === "u"){
   console.log(char +" "+"vowel")
 }
 
 else {
   console.log(char +" " +"is not vowel (false)")
 }
 
 
 
 // 5. Write a program that
 // a. Store correct password in a JS variable.
 // b. Asks user to enter his/her password
 // c. Validate the two passwords:
 // i. Check if user has entered password. If not, then
 // give message “ Please enter your password”
 // ii. Check if both passwords are same. If they are
 // same, show message “Correct! The password you
 // entered matches the original password”. Show
 // “Incorrect password” otherwise
 
 
 
 var pswd = prompt("Enter you pasword")
 if(pswd === "meowmeow"){
   console.log("Correct pasword");
 }
 else{
   console.log("incorrect pasword");
 }
 
 
 
 // 6. This if/else statement does not work. Try to fix it:
 
 
 var greeting;
 var hour = 13;
 if (hour < 18) {
 alert ("Good day");
 }
 else{
 alert("Good evening");
 }
 
 
 
 // 7. Write a program that takes time as input from user in 24
 // hours clock format like: 1900 = 7pm. Implement the
 // following case using if, else & else if statements
 
 
 
 var time = prompt("Enter time");
 if(time >= 0000 && time < 1200){
 console.log("Good Morning");
 }
 else if (time >= 1200 && time < 1700){
   console.log("Good afternoon");
 }
 else if (time >= 1700 && time < 2100){
   console.log("Good evening");
 }
  else if (time >=2100 && time <= 2359){
     console.log("Good night");
  }
 
 
 //  CHAPTER: 14-16 ARRAYS
 
 // 1. Declare an empty array using JS literal notation to store
 // student names in future.
 
 
 var student_name=[];
 
 var fruits = ["ramsha", "omamima","abad","uniba","maha"];
 document.write("<br>"+"<br>"+fruits);
 
 
 // 2. Declare an empty array using JS object notation to store
 // student names in future.
 
 
 var student_name=[];
 
 var fruits = ["ramsha", "omamima","abad","uniba","maha"];
 document.write("<br>"+"<br>"+fruits);
 
 
 
 // 3. Declare and initialize a strings array.
 
 
 var color = ["red", "green", "blue", "yellow", "white"];
 document.write("<br>"+"<br>"+color);
 
 // 4. Declare and initialize a numbers array.
 var points = ["40", "100", "1", "5", "25", "10"];
 console.log(points);
 
 
 // 5. Declare and initialize a boolean array.
 var boolean =["true","false"]
 console.log("<br>"+"<br>"+boolean);
 
 // 6. Declare and initialize a mixed array.
 var family = ["Meow", "momo", ["bella", "maggiee", "john"]];
 console.log(family);
 
 
 // 7. Declare and Initialize an array and store available
 // education qualifications in Pakistan (e.g. SSC, HSC, BCS,
 // BS, BCOM, MS, M. Phil., PhD). Show the listed
 // qualifications in your browser like:
 
 var heading =  "Qualification";
 var qua= ["SSC", "<br>" , "HSC" , "<br>" , "BCS" , "<br>" , "BS" , "<br>", "BCOM" , "<br>" , "MS"," <br>","M.Phil"," <br>","PhD"];
 
 document.write("<br>"+ heading +"<br>"+ qua);
 
 
 // 8. Write a program to store 3 student names in an array.Take
 // another array to store score of these three students.
 // Assume that total marks are 500 for each student, display
 // the scores & percentages of students like:
 
 
 var student= ["ramsha","meow","jenny"];
 var score = ["320","230","480"];
 var t = 500/320 * 100;
 var o =500/230 * 100;
 var q =500/480 *100;
 document.write("<br>"+"score of ramsha is"+" " + score[0] +" "+"percentage:"+" "+ t+ "%");
 document.write("<br>"+"score ofmeow is"+" " + score[1] +" "+"percentage:"+" "+ o+ "%");
 document.write("<br>"+"score of jenny is"+" " + score[2] +" "+"percentage:"+" "+q + "%");
 
 
 
 // 9. Initialize an array with color names. Display the array
 // elements in your browser.
 
 var color= ["red","green","blue","brown","grey","black"];
 document.write("<br>"+color);
 
 var choice = prompt("Want any color?");
 color.unshift(choice);
 document.write("<br>"+color);
 
 color.unshift("pink","light blue");
 document.write("<br>"+color);
 
 color.shift("red");
 document.write("<br>"+color);
 
 color.pop();
 document.write("<br>"+color);
 
 var wish=prompt("Add changes ?");
 
 color.unshift(wish);
 document.write("<br>"+color);
 
 color.shift(wish);
 document.write("<br>"+color);
 
 color.pop();
 document.write("<br>"+color);
 
 
 
 // 10. Write a program to store student scores in an array &
 // sort the array in ascending order using Array’s sort
 // method.
 
 
 var arr = ["<br>"+"Score of students:"+" "+"320", "230", "480", "120"]
 
 document.write(arr);
 
 var arr = ["<br>"+"Ordered Score of students:"+" "+"320", "230", "480", "120"]
 document.write(arr.sort());
 
 
 
 // 1. Write a program to initialize an array with city names.
 // Copy 3 array elements from cities array to selectedCities
 // array.
 
 var cit ="<br>Cities list";
 var list =["Karachi"+" "+ "lahore"+" "+"islamabad"+" "+"quetta"+" "+"peshawar"];
 document.write(cit+"<br>"+ list);
 
 var sel = "Selected cities list";
 let selectcities=['Karachi','Quetta']
 document.write("<br>"+sel +"<br>"+selectcities);
 
 
 // 12. Write a program to create a single string from the
 // below mentioned array:
 
 
 var a = ["this", "is", "my","cat"];
 document.write(a.join()); 
 
 
 // 13. Create a new array. Store values one by one in such a way
 // that you can access the values in the order in which they
 // were stored. (FIFO-First In First Out)
 
 
 var val = "Device";
 var seq = ["keyboard"+"mouse"+"printer"+"monitor"];
 document.write("<br>"+val+"<br>" + seq[0],seq[1],seq[2],seq[3]);
 
 
 
 
 
 // CHAPTER:17-20 ARRAY AND LOOP
 
 
 // 1. Declare and initialize an empty multidimensional array.
 // (Array of arrays)
 
 var arr1 = ["ABC", 24, 18000];
 var arr2 = ["EFG", 30, 30000];
 var arr3 = ["IJK", 28, 41000];
 var arr4 = ["EFG", 31, 28000];
 var arr5 = ["EFG", 29, 35000];
 var salary = [arr1, arr2, arr3, arr4, arr5];  
 for(var i = 0; i < salary.length; i++) { 
     document.write(salary[i] + "<br>"); 
 }
 
 
 
 // 2. Declare and initialize a multidimensional array
 // representing the following matrix:
 
 
 var arr1 = [0, 1, 2, 3];
 var arr2 = [1, 0 , 1 ,2];
 var arr3 = [2, 1 , 0, 1];
 var salary = [arr1, arr2, arr3];  
 for(var i = 0; i < salary.length; i++) { 
     document.write(salary[i] + "<br>"); 
 }
 
 
 // 3. Write a program to print numeric counting from 1 to 10.
 
 var arr_1 =[1];
 var arr_2 =[2];
 var arr_3 =[3];
 var arr_4 =[4];
 var arr_5 =[5];
 var arr_6 =[6];
 var arr_7 =[7];
 var arr_8 =[8];
 var arr_9 =[9];
 var arr_10 =[10];
 
 var salary = [arr_1,arr_2,arr_4,arr_5,arr_6,arr_7,arr_8,arr_9,arr_10];  
 for(var i = 0; i < salary.length; i++) { 
     document.write(salary[i] + "<br>"); 
 }
 
 
 
 
 // 4. Write a program to print multiplication table of any
 // number using for loop. Table number & length should be
 // taken as an input from user.
 
 
 
 var user= prompt("Enter any table number");
 var a =1;
 for( var a =1; a<=15; a++){
 
 document.write("<br>" +"<br>" + user + "*" + a + "=" + (user * a)  );
 
 }
 
 // 5. Write a program to print items of the following array
 // using for loop:
 // fruits = [“apple”, “banana”, “mango”, “orange”,
 // “strawberry”]
 
 var fruits1= ["apple"];
 var fruits2=["banana"];
 var fruits3=["mango"];
 var fruits4=["orange"];
 var fruits5=["strawberry"];
 
 document.write("<br>"+fruits1+fruits2+fruits3+fruits4+fruits5);
 
 
 // 6. Generate the following series in your browser. See
 // example output.
 
 
 var a =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
 var b=[10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
 var c=[0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
 var d =[1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
  var e =[2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
 
  document.write(a,b,c,d,e);
 
 
 
 
 
 7.//  Write a program to enable “search by user input” in an
 // array.
 
 var inputArray = [];
 var size = 5; 
 
 for(var i=0; i<size; i++) {
     
 
     inputArray[i] = prompt('Enter Element ' + (i+1));
 }
 
 
 console.log(inputArray);
 
 
 // 8. Write a program to identify the largest number in the
 // given array.
 
 
 var array = [3 , 6, 2, 56, 32, 5, 89, 32];
 var largest= 0;
 
 for (i=0; i<=largest;i++){
     if (array>largest) {
         var largest=array[i];
     }
 }
 
 console.log(largest);
 
 
 // 9. Write a program to identify the smallest number in the
 // given array.
 // A = [24, 53, 78, 91, 12]
 
 public class SmallestInArrayExample{  
   public static int getSmallest(int[] a, int total){  
   int temp;  
   for (int i = 0; i < total; i++)   
           {  
               for (int j = i + 1; j < total; j++)   
               {  
                   if (a[i] > a[j])   
                   {  
                       temp = a[i];  
                       a[i] = a[j];  
                       a[j] = temp;  
                   }  
               }  
           }  
          return a[0];  
   }  
   public static void main(String args[]){  
   int a[]={1,2,5,6,3,2};  
   int b[]={44,66,99,77,33,22,55};  
   System.out.println("Smallest: "+getSmallest(a,6));  
   System.out.println("Smallest: "+getSmallest(b,7));  
   }}  
 
 
 
 
              // CHAPTER:21-25

//       1. Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.


var first_name= prompt("Enter your first name");
var second_name= prompt("Enter your last name");
var fullName = first_name +" "+ second_name;
alert(fullName);


// 2. Write a program to take a user input about his favorite
// mobile phone model. Find and display the length of user
// input in your browser.


var text= ['My favorite mobile phone is: '];
var fav_mob= prompt('Enter your fav mobile phone model');
document.write(text + fav_mob);
var length = " : " + fav_mob.length;
document.write(length);



// 3. Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser .

var name = ["pakistani"];
var ind =name.indexOf('n');
console.log(ind);



// 4. Write a program to find the last index of letter “l” in the
// word “Hello World” and display the result in your browser

var message = ['Hello, World'];
var last =message.lastIndexOf("l");
document.write(message + last);


// 5. Write a program to find the character at 3rd index in the
// word “Pakistani” and display the result in your browser.

var str = 'pakistani';
var res = str.charAt(3);
document.write('String:'+ str + 'character at index: ' + res);



// 6. Repeat Q1 using string concat() method.


var first_name= prompt("Enter your first name");
var second_name= prompt("Enter your last name");
var fullName = first_name.concat(second_name);
document.write(fullName);



// 7. Write a program to replace the “Hyder” to “Islam” in the
// word “Hyderabad” and display the result in your browser.

var city='hyderabad';
var res = city.replace('hydera','islama');
document.write(res);



// 8. Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.

var message = "“Ali and Sami are best friends. They play cricket and football together.”";
var change = message.replace(/and/g, "&");
document.write(change);



// 9. Write a program that converts a string “472” to a number
// 472. Display the values & types in your browser.

var strg = "472";
var z = Math.floor(strg);
document.write(z);


// 10. Write a program that takes user input. Convert and
// show the input in capital letters.

var text = "peanut";
var upper =text.toUpperCase();
document.write(upper);


// 11. Write a program that takes user input. Convert and
// show the input in title case.

var inp = prompt('Enter any word');
var tit = inp.charAt(0).toUpperCase(0) + inp.slice(1);
document.write(tit);



// 12. Write a program that converts the variable num to
// string.

var num = 35.36 ;
var str = num.toString();
console.log(str);


// 13. Write a program to take user input and store username
// in a variable. If the username contains any special symbol
// among [@ . , !], prompt the user to enter a valid username.
// For character codes of [@ 


function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
  }


// 14. You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array. After searching, prompt the user whether the given
// item is found in the list or not.


var a = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];
var n = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am");

for (var i = 0 ; i <= a.length; a++){

if (i[a] <= n){

    document.write(n+'is available at index'+ a.indexOf(a)+'in our bakery');
}

else{
    document.write("We are sorry."+ n + "is not available is our bakery");
}
}



// 16. Write a program to convert the following string to an
// array using string split method.
// Display the elements of array in your browser.


var example = "u \n n \n i \n v \n e \n r \n s \n t\n o\n\nf\nk\na\nr\na\nc\nh\ni";
var tokens = example.split(/\s+/g);

console.log(tokens.length);
for(var x = 0; x < tokens.length; x++){
   console.log(tokens[x]);
}

// 17. Write a program to display the last character of a user
// input.

var a = 'pakistani';
var b = a.charAt(8);
document.write(b);


// 18. You have a string “The quick brown fox jumps over the
// lazy dog”. Write a program to count number of
// occurrences of word “the” in given string.


var temp = "The quick brown fox jumps over the lazy dog";
var count = (temp.match(/the/g) || []).length;
console.log(count);



           // CHAPTER# 26-30




//   1. Write a program that takes a positive integer from user &
//   display the following in your browser.
//   a. number
//   b. round off value of the number
//   c. floor value of the number
//   d. ceil value of the number
                 


var num1 = 3.456;
document.write(num);
var num2 = Math.round(num1);
document.write('number: ' + num2);
var num3 = Math.floor(num1);
document.write('round off value: ' + num3);
var num4 = Math.ceil(num1);
document.write('ceil value:' + num4);


// 2. Write a program that takes a negative floating point
// number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number



var num5 = -2.673;
document.write(num);
var num6 = Math.round(num5);
document.write('number: ' + num5);
var num7 = Math.floor(num1);
document.write('round off value: ' + num5);
var num8 = Math.ceil(num1);
document.write('ceil value:' + num5);





// 3. Write a program that displays the absolute value of a
// number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5

var value= -4;
var abs =Math.abs(-4);
console.log("abs");


// 4. Write a program that simulates a dice using random()
// method of JS Math class. Display the value of dice in your
// browser.:

var diceRoll = Math.floor( Math.random() * 6 ) +4;
document.write('You rolled a ' + diceRoll + "<br>");
var diceRoll = Math.floor( Math.random() * 7 ) +6;
document.write('You rolled a ' + diceRoll);


// 5. Write a program that simulates a coin toss using random()
// method of JS Math class. Display the value of coin in your
// browser

var x = Math.floor((Math.random() * 6) + 1);
var y = Math.floor((Math.random() * 6) + 1);
if (x === 2){
    document.write('<br>'+ x +'random coin value: Heads');
}

else if (y === 1){
    document.write('<br>'+ x +'random coin value: tails');

}



// 6. Write a program that shows a random number between 1
// and 100 in your browse


var random = Math.floor((Math.random() * 100) + 1);
document.write('random number between 1 and 100: '+random+ '<br>');


// 7. Write a program that asks the user about his weight. Parse
// the user input and display his weight in your browser.
// Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms



var a = prompt('Enter your weight in kilograms');
var weight1 = 50;
var random1 = Math.floor((Math.random() * 100) + 1);
var weight2 = 50;
var random2= Math.floor((Math.random() * 100) + 1);
var weight3 = 50.2;
var random3 = Math.floor((Math.random() * 100) + 1);
var weight4 = 50.4;
var random4 = Math.floor((Math.random() * 100) + 1);

if (a === weight1){
    document.write('The weight of user is ' + random1 + '<br>');

}
 else if(a === weight2){
    document.write('The weight of user is ' + random2 + '<br>');

 }

 else if(a === weight3){
    document.write('The weight of user is ' + random3 + '<br>');

 }

 else if(a === weight4){
    document.write('The weight of user is ' + random4 + '<br>');

 }



//  8. Write a program that stores a random secret number from
// 1 to 10 in a variable. Ask the user to input a number
// between 1 and 10. If the user input equals the secret
// number, congratulate the user.




 var y = Math.floor(Math.random() * 10 + 1); 
      
 var guess = 1; 
       
var x = prompt('Enter a number between 1 to 10')
if(x == y) 
{     
    alert("CONGRATULATIONS!!! YOU GUESSED IT RIGHT IN "
            + guess + " GUESS "); 
} 
else if(x > y) 

{     
    guess++; 
    alert("OOPS SORRY!! TRY A SMALLER NUMBER"); 
} 
else
{ 
    guess++; 
    alert("OOPS SORRY!! TRY A GREATER NUMBER") 
} 






          // CHAPTER# 31-34





  //   1. Write a program that displays current date and time in
 //   your browser.

var a = new Date();
document.write(a);


// 2. Write a program that alerts the current month in words.
// For example December.


var a = new Date();
var b = a.toString();
var c = b.slice(4,8);
document.write('Current month: ' + c);



// 3. Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show
// Sun.

var a = new Date();
var b = a.toString();
var c = b.slice(0,3);
document.write('Today is ' + c);



// 4. Write a program that displays a message “It’s Fun day” if
// its Saturday or Sunday today

var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var nameOfToday = dayNames[dayNames];
var x = 'sun';
var y = 'sat';
if (nameOfToday === x){
    document.write('its fun day')
}
else if(nameOfToday === y){
    document.write('its fun day')
}
else{
    document.write('Its not fun day'+nameOfToday);
}

// 5. Write a program that shows the message “First fifteen
// days of the month” if the date is less than 16th of the month
// else shows “Last days of the month”.



var d =new Date();
var e =d.getDate();
if (e > 16  ){
    document.write('Last days of the month');
}
else{
    document.write('first fiften days of the month'+ e);
}


// 6. Write a program that determines the minutes since
// midnight, Jan. 1, 1970 and assigns it to a variable that
// hasn't been declared beforehand. Use any variable you like
// to represent the Date object.

var current = new Date();
document.write('Current date: '+ current +'<br>');

var miliSecond = current.getTime();
document.write('Elapsed miliseconds since january 1, 1970: '+" "+ miliSecond);

var new_1 = new Date("July 21, 1970 ");
var min = current.getSeconds();
document.write(min);


// 7. Write a program that tests whether it's before noon and
// alert “Its AM” else “its PM”.

var date_new = new Date();
var hour = date_new.getHours();

if (hour >= 12){
    document.write("am")
}
document.write("pm")

// 8. Write a program that creates a Date object for the last day
// of the last month of 2020 and assigns it to variable named
// laterDate.


var late_date = new Date("dec 31, 2020");
document.write('Later date:'+ " "+ late_date);


// 9. Create a date object of the starting date of this Ramadan
// and alert the number of days past since 1st Ramadan?
// Note: 1st Ramadan was on June 18, 2015



var date_ramdan = new Date( "June 18, 2015");
var change_days = date_ramdan / (1000 * 60 * 60 * 24);
var round_off = Math.floor(change_days);
document.write(round_off + " " + 'days have passed since 1st Ramdan, 2015 ');




// 10. Write a program that displays in your browser the
// seconds that elapsed between the reference date and the
// beginning of 2015.

var ref = new Date("dec 05, 2015");
document.write('On reference date '+ ref);

var currSecs = ref.getSeconds();
document.write(currSecs + ' ' + 'seconds had passed since beginning of 2015');



// 11. Create a Date object for the current date and time.
// Extract the hours, reset the date object an hour ahead and
// finally display the date object in your browser.

var current_date = new Date();
document.write('current date: ' + current_date);

var new_day = new Date("Jun 18 2020 10:41:51");
var diff = current_date - new_day;
document.write(diff + " hours ago, it was sat" + current_date);


// 12. Write a program that creates a date object and show the
// date in an alert box that is reset to 100 years back?

var current_date = new Date("dec 05 2015");
document.write('current date: ' + current_date);

var new_day = new Date("dec 05 1915");
var diff = current_date - new_day;
document.write(diff + " years back, it was " + current_date);



// 13. Write a program to ask the user about his age. Calculate
// and show his birth year in your browser.

var dob = new Date (prompt("Enter your date of birth" , "jan 1 1980"));
var dobmili = dob.getTime();
var today  = new Date();
var todaymili = today.getTime();
var diff = todaymili - dobmili;
var accuage =(diff/ (1000*60*60*24*30*12));
document.write(accuage);

var d = new Date( prompt("enter your age"));
  var n = d.getFullYear(new Date);

// 14. Write a program to generate your K-Electric bill in your
// browser. All the amounts should be rounded off to 2
// decimal places. Display the following fields:
// a. Customer Name
// b. Current Month
// DATE METHODS | JAVASCRIPT
// Page 5 of 5
// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date)


var Customer_Name = "ABC Customer";

var d = new Date();
var currentMonth = d.getMonth();
document.write("customer name: " + Customer_Name +"<br>" +"month: " + currentMonth +"<br>");

var unit = "Number of units: ";
var unit_num = 410;
document.write(unit + unit_num +"<br>") ;

var chrg = "Charge per units: ";
var charges_unit = 16;
document.write(chrg + charges_unit+ "<br>");

var net_amount = "Net Amount Payable (within due Date): ";
var sum = unit_num * charges_unit;
document.write(net_amount +' ' + sum + "<br>");

var late = "Late payment surcharge: ";
var late_charges = 350;
document.write(late + late_charges + "<br>");

var gross_amount = "Gross Amount payable(After Dua Date): ";
var amount_payable =sum + late_charges;
document.write(gross_amount + amount_payable);





            // CHAPTER# 35-38




   // 1. Write a function that displays current date & time in your
   // browser.

   var a = new Date()
function date_time(){

  return a;
}
document.write(date_time(a));


// 2. Write a function that takes first & last name and then it
// greets the user using his full name.


var firstName = prompt("Enter your first name");
var lastName = prompt("Enter your last name");
function full_name(){

return firstName + lastName;

}

alert(full_name(firstName + lastName));



// 3. Write a function that adds two numbers (input by user)
// and returns the sum of two numbers.

var firstNum = prompt("Enter first number");
var secondNum = prompt("Enter second number");

function add(){

    return firstNum + secondNum;

}

document.write(add());


// 4. Calculator:
// Write a function that takes three arguments num1, num2
// & operator & compute the desired operation. Return and
// show the desired result in your browser.

function calc(num1, opera, num2){
    if (opera === '+'){
        return num1 + num2
    }
    else if (opera === '='){
        return num1 - num2
    }
    else if (opera === '*'){
      return num1 * num2
    }
    else if (opera === '/'){
      return num1 / num2
    }
else{
    return "incorrect"
}
}
 var result1 = calc(2,"+",9);
 var result2 = calc(8,"-",3);
 var result3 = calc(5,"*",7);
 var result4 = calc(5,"/",10);

 document.write(result1);
 document.write(result2); 
 document.write(result3);
 document.write(result4);
 

//  5. Write a function that squares its argument.


function square(){
var x = 5;
}
var x_squared = Math.pow(x,2);
document.write(x_squared);



// 6. Write a function that computes factorial of a number.


function factorial(x) { 

  if (x === 0)
 {
    return 1;
 }
  return x * factorial(x-1);
         
}
console.log(factorial(5));


// 7. Write a function that take start and end number as inputs
// & display counting in your browser.


function count(){
for (i = 0; i < 10; i++) {
    console.count();
  }
}
document.write(count(i));


// 8. Write a nested function that computes hypotenuse of a
// right angle triangle. 

function hypotenuse(a, b) {
    function square(x) { return x*x; }
    return Math.sqrt(square(a) + square(b));
 }
 function secondFunction() {
    var result;
    result = hypotenuse(1,2);
    document.write ( result );
 }


//  9. Write a function that calculates the area of a rectangle.
//  A = width * height
//  Pass width and height in following manner:
// i. Arguments as value
// ii. Arguments as variables


var length = prompt("Enter a whole number for the length of your rectangle.");
        var width = prompt("Enter a whole number for the width of your rectangle.");
        function area(length, width) {
            return length * width;
        }
        function perimeter(length, width) {
            return 2*( length + width);
        }
        
        document.write('The area of your rectangle is ' + area(length, width));         
        document.write('The perimeter of your rectangle is ' + perimeter(length, width));



//         10. Write a JavaScript function that checks whether a passed
// string is palindrome or not?


function palindrome(str) {
    return true;
  }
  palindrome("madam");



//   11. Write a JavaScript function that accepts a string as a
// parameter and converts the first letter of each word of the
// string in upper case.


function capital_letter(str) 
{
    str = str.split(" ");

    for (var i = 0, x = str.length; i < x; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    }

    return str.join(" ");
}

console.log(capital_letter("'the quick brown fox"));



// Write a JavaScript function that accepts a string as a
// parameter and find the longest word within the string. 


function longest_string(str)
{
  var array1 = str.match(/\w[a-z]{0,}/gi);
  var result = array1[0];

  for(var x = 1 ; x < array1.length ; x++)
  {
    if(result.length < array1[x].length)
    {
    result = array1[x];
    } 
  }
  return result;
}
console.log(longest_string('Web Development Tutorial'));


// 13. Write a JavaScript function that accepts two arguments, a
// string and a letter and the function will count the number of 
// function occurrences of the specified letter within the string.
// Sample arguments : 'JSResourceS.com', 'o'

function count(str, letter) 
{
 var letter_Count = 0;
 for (var position = 0; position < str.length; position++) 
 {
    if (str.charAt(position) == letter) 
      {
      letter_Count += 1;
      }
  }
  return letter_Count;
}

console.log(count('w3resource.com', 'o'));



// 14. The Geometrizer
// Create 2 functions that calculate properties of a circle, using
// the definitions here.

function calcCircumference(){
    var circleRadius = parseInt(prompt("Please enter the radius of circle:"));
    var circumferenceOfCircle = 2 * Math.PI * circleRadius;
   document.write("Circumference of circle is: " + circumferenceOfCircle);
    
}

calcCircumference();


function circleArea(radius) {
    let area = Math.PI * (radius * radius);
    console.log(area);
    console.log(Math.round(area*100)/100);
}
 
circleArea(5);
 
 
 
 
 
 
 
 
 
 
 
 
 
         
         // CHAPTER# 38-44

// 1. Write a custom function power ( a, b ), to calculate the value of
// a raised to b.
function raisedValue(){
var a =prompt("enter first value");
var b = prompt("enter second value");
console.log(Math.pow(a, b))
}
raisedValue()


// 2. Any year is entered through the keyboard. Write a function to
// determine whether the year is a leap year or not.

function leapYear() {
    let year = prompt("enter year");
    let answer;
    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
        answer = "leap year";
    } else {
        answer = "not a leap year";
    }
    console.log(answer);
}
 

leapYear();



// 3. If the lengths of the sides of a triangle are denoted by a, b, and
// c, then area of triangle is given by
// area = S(S − a)(S − b)(S − c)
// where, S = ( a + b + c ) / 2
// Calculate area of triangle using 2 functions

function input(){
    var a = prompt("enter value of a ")
    var b = prompt("enter value of b")
    var c = prompt("enter value of c ")
var s = (a+b+c) / 2;
console.log(s)
var area =  Math.sqrt(s*((s-a)*(s-b)*(s-c)));
console.log(area)
}
input();


// 4. Write a function that receives marks received by a student in 3
// subjects and returns the average and percentage of these
// marks. there should be 3 functions one is the mainFunction
// and other are for average and percentage. Call those functions
// from mainFunction and display result in mainFunction.

var stud1 =parseInt(prompt("Enter first student marks"));
var stud2 =parseInt(prompt("Enter second student marks"));
var stud3 =parseInt(prompt("Enter third student marks"));
   var obtMarks = stud1+stud2+stud3;
var total= 300;
function Mainfunction(){

    console.log("student"+" "+stud1+" " +"student"+" "+ stud2+" " +"student"+" "+ stud3)
 console.log(obtMarks)
}
Mainfunction()

function percentage(){

    var per= obtMarks*100/total;
console.log (per)
}
percentage()

function average(){
  
    var averageMarks = obtMarks / 3 ;
console.log(averageMarks)
}
average()

// 5. You have learned the function indexOf. Code your own custom
// function that will perform the same functionality. You can code
// for single character as of now.

function indexOf(){

var str = "hello world,Live as if you were to die tomorrow";
var n = str.indexOf("were");

console.log(n)
}

indexOf()


// 6. Write a function to delete all vowels from a sentence. Assume
// that the sentence is not more than 25 characters long.

function delVowel(){
    var strings = ["That which does not kill us makes us stronger.” "];

    strings = strings.map(function (string) {
        return string.replace(/[aeiou]/g, '');
    });
    
    console.log(strings);
}
delVowel()


// 7. Write a function with switch statement to count the number of
// occurrences of any two vowels in succession in a line of text.
// For example, in the sentence

function findOccurrences() {
    var str = "Pleases read this application and give me gratuity";
    var count = 0;

    switch (str) {
        case 'a':
            count++;
        case 'A':
            count++
        case 'e':
        case 'E':
        case 'i':
        case 'I':
        case 'o':
        case 'O':
        case 'u':
        case 'U':
           console.log (1);
        default:
            console.log(0);
    }
}

findOccurrences();



// 8. The distance between two cities (in km.) is input through the
// keyboard. Write four functions to convert and print this
// distance in meters, feet, inches and centimeters.


var dist=prompt("Enter distance between two cities(in km)");

function meter(){

    var meter= dist*1000;
console.log(meter)
}
meter()

function feet(){
    var feet = dist*3280.84;
    console.log(feet)
}
feet()


function inches(){
    var inch= dist*39370.1;
    console.log(inch)
}
inches()

function centimeter(){
    var centimeter= dist*100000
console.log(centimeter)
}
centimeter();


// . A cashier has currency notes of denominations 10, 50 and
// 100. If the amount to be withdrawn is input through the
// keyboard in hundreds, find the total number of currency notes
// of each denomination the cashier will have to give to the
// withdrawer.
function currencyDenomination() {
    var cash = +prompt("Enter cash (in hundreds): ");
    var hundred = cash / 100;
    var fifty = cash / 50;
    var ten = cash / 10;
    console.log(hundred)
    console.log(fifty)
    console.log(ten)
}
currencyDenomination()


        // CHAPTER# 43-48
// 1. Show an alert box on click on a link.

function display(){
    alert("hello world")
}
display();
// 2. Display some Mobile images in browser. On click on an
// image Show the message in alert to user.


// kindly see answer in html section


// 3. Display 10 student records in table and each row should contain a delete
// button. If you click on a button to delete a record, entire row should be
// deleted. 
function del(){
var table = document.getElementById("tables");
table.deleteRow(-1);
}
del()


// 4. Display an image in browser. Change the picture on mouseover and set the
// first picture on mouseout.


// kindly see answer in html section



// 5. Show a counter in browser. Counter should increase on click on increase
// button and decrease on click on decrease button. And show updated counter
// value in browser.
var i = 0;
function buttonClick() {
    document.getElementById('inc').value = ++i;
}
var o = 0;
function decreaseClick(){
    document.getElementById('dec').value= --o;
}



                   // CHAPTER# 49-52

// 1. Create a signup form and display form data in your web
// page on submission.

function  getValue(){
    var txt= document.getElementById("user_input").value
    var txt2= document.getElementById("pass").value
    var txt3 = document.getElementById("rep").value
    document.getElementById('display').innerHTML= txt+txt2+txt3

}


// 2. Suppose in your webpage there is content area in which
// you have entered your item details, but user can only see
// some details on first look. When user clicks on “Read
// more” button, full detail of that particular item will be
// displayed. 

 function morePara() {
     var expParagraph = "If you want to build a ship, don't drum up people to collect wood and don't assign them tasks and work, but rather teach them to long for the endless immensity of the sea.The duty of rhetoric is to deal with such matters as we deliberate upon without arts or systems to guide us, in the hearing of persons who cannot take in at a glance a complicated argument or follow a long chain of reasoning.People go on about places like Starbucks being unpersonal and all that, but what if that's what you want? I'd be lost if people like that got their way and there was nothing unpersonal in the world. I like to know that there are big places without windows where no one gives a shit. You need confidence to go into small places with regular customers... I'm happiest in the Virgin Megastore and Borders and Starbucks and Pizza Express, where no one gives a shit and no one knows who you are. My mum & dad are always going on about how soulless those places are, and I'm like Der. That's the point.People go on about places like Starbucks being unpersonal and all that, but what if that's what you want? I'd be lost if people like that got their way and there was nothing unpersonal in the world. I like to know that there are big places without windows where no one gives a shit. You need confidence to go into small places with regular customers... I'm happiest in the Virgin Megastore and Borders and Starbucks and Pizza Express, where no one gives a shit and no one knows who you are. My mum & dad are always going on about how soulless those places are, and I'm like Der. That's the point."
       document.getElementById("para").innerHTML = expParagraph;
     }
    


//      3. In previous assignment you have created a tabular data
// using javascript. Let’s modify that. Create a form which
// takes student’s details and show each student detail in
// table. Each row of table must contain a delete button and
// an edit button. On click on delete button entire row should
// be deleted. On click on edit button, a hidden form will
// appear with the values of that row.



function edit_row(no)
{
 document.getElementById("edit_button"+no).style.display="none";
 document.getElementById("save_button"+no).style.display="block";
	
 var name=document.getElementById("name_row"+no);
 var country=document.getElementById("country_row"+no);
 var age=document.getElementById("age_row"+no);
	
 var name_data=name.innerHTML;
 var country_data=country.innerHTML;
 var age_data=age.innerHTML;
	
 name.innerHTML="<input type='text' id='name_text"+no+"' value='"+name_data+"'>";
 country.innerHTML="<input type='text' id='country_text"+no+"' value='"+country_data+"'>";
 age.innerHTML="<input type='text' id='age_text"+no+"' value='"+age_data+"'>";
}

function save_row(no)
{
 var name_val=document.getElementById("name_text"+no).value;
 var country_val=document.getElementById("country_text"+no).value;
 var age_val=document.getElementById("age_text"+no).value;

 document.getElementById("name_row"+no).innerHTML=name_val;
 document.getElementById("country_row"+no).innerHTML=country_val;
 document.getElementById("age_row"+no).innerHTML=age_val;

 document.getElementById("edit_button"+no).style.display="block";
 document.getElementById("save_button"+no).style.display="none";
}

function delete_row(no)
{
 document.getElementById("row"+no+"").outerHTML="";
}

function add_row()
{
 var new_name=document.getElementById("new_name").value;
 var new_country=document.getElementById("new_country").value;
 var new_age=document.getElementById("new_age").value;
	
 var table=document.getElementById("data_table");
 var table_len=(table.rows.length)-1;
 var row = table.insertRow(table_len).outerHTML="<tr id='row"+table_len+"'><td id='name_row"+table_len+"'>"+new_name+"</td><td id='country_row"+table_len+"'>"+new_country+"</td><td id='age_row"+table_len+"'>"+new_age+"</td><td><input type='button' id='edit_button"+table_len+"' value='Edit' class='edit' onclick='edit_row("+table_len+")'> <input type='button' id='save_button"+table_len+"' value='Save' class='save' onclick='save_row("+table_len+")'> <input type='button' value='Delete' class='delete' onclick='delete_row("+table_len+")'></td></tr>";

 document.getElementById("new_name").value="";
 document.getElementById("new_country").value="";
 document.getElementById("new_age").value="";
}



               // CHAPTER # 53-57
               

// 1. Consider you have 4 images in a file as shown below:

function zoomin() { 
    var GFG = document.getElementById("cat"); 
    var currWidth = GFG.clientWidth; 
    GFG.style.width = (currWidth + 100) + "px"; 
} 
  
function zoomout() { 
    var GFG = document.getElementById("cat"); 
    var currWidth = GFG.clientWidth; 
    GFG.style.width = (currWidth - 100) + "px"; 
} 



                   // CHAPTER# 58-67

// i. Get element of id “main-content” and assign them in a variable.
// ii. Display all child elements of “main-content” element.
// iii. Get all elements of class “render” and show their innerHTML
// in browser.
// iv. Fill input value whose element id first-name using javascript.
// v. Repeat part iv for id ”last-name” and “email”.


var a = document.body.childNodes[1].childNodes[5]
console.log(a)



var b =document.body.childNodes[1].childNodes[5].childNodes
console.log(b)


var c =document.body.childNodes[1].childNodes[5].innerHTML
document.write(c)


var val = document.getElementsByTagName('input')[0]
var p = document.createElement("p")
var text = document.createTextNode("ramsha")
p.appendChild(text)
var msg = document.getElementsByTagName("input")[0]
msg.appendChild(p)

console.log(val)


var val = document.getElementsByTagName('input')[1]
var p = document.createElement("p")
var text = document.createTextNode("naseer")
p.appendChild(text)
var msg = document.getElementsByTagName("input")[1]
msg.appendChild(p)

console.log(val)


var val = document.getElementsByTagName('input')[2]
var p = document.createElement("p")
var text = document.createTextNode("chahatkhan534@gmail.com")
p.appendChild(text)
var msg = document.getElementsByTagName("input")[2]
msg.appendChild(p)

console.log(val)



// 2. use HTML code of question 1 and show the result on browser.
// i. What is node type of element having id “form-content”.
// ii. Show node type of element having id “lastName” and its child node.
// iii. Update child node of element having id “lastName”.
// iv. Get First and last child of id “main-content”.
// v. Get next and previous siblings of id “lastName”.
// vi. Get parent node and node type of element having id “email”


// i. What is node type of element having id “form-content”.
var x = document.body.childNodes[1].childNodes[3].nodeType;
console.log(x)

// ii. Show node type of element having id “lastName” and its child node.
var nodetype =document.body.childNodes[1].childNodes[3].childNodes[7].nodeType;
console.log(nodetype)

// ii. Show node type of element having id “lastName” and its child node.
var childnode =document.body.childNodes[1].childNodes[3].childNodes[7].childNodes;
console.log(childnode)

// iv. Get First and last child of id “main-content”.
var first = document.body.childNodes[1].childNodes[5].firstChild;
console.log(first)

// iv. Get First and last child of id “main-content”.
var m = document.body.childNodes[1].childNodes[5].lastChild;
console.log(m)

// v. Get next and previous siblings of id “lastName”.
var next= document.body.childNodes[1].childNodes[3].childNodes[6].nextSibling;
console.log(next)

// v. Get next and previous siblings of id “lastName”.
var prev= document.body.childNodes[1].childNodes[3].childNodes[6].previousSibling;
console.log(prev)

// vi. Get parent node and node type of element having id “email”
var parent = document.body.childNodes[1].childNodes[3].childNodes[10].parentNode
console.log(parent)

// vi. Get parent node and node type of element having id “email”
var node= document.body.childNodes[1].childNodes[3].childNodes[10].parentNode.nodeType
console.log(node)


