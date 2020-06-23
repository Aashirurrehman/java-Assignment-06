//                                           CHAPTER 21 - 25

//TASK 01//

// var firstName = prompt("Enter first name");
// var lastName = prompt("Enter last name");
// var fullName = firstName + " " + lastName;
// alert(fullName)

//#########################################################//

//TASK 02//

// var favMobile = prompt("Enter your mobile name");
// favMobile = favMobile.toLowerCase();
// var mobilePhones = ["samsung note 10","iphone 10","nokia 9.3 plus","oppo A52","tecno pop 2f"];
// for (var i = 0 ; i <= 5; i++) {

//     if ( favMobile == mobilePhones [i]) {
//         document.write("My Fav phone is " + favMobile);
//         document.write("<br>");
//         document.write("Length of string is : " + favMobile.length);

//     }
// }

//#########################################################//

//TASK 03//

// var stringName = "Pakistani";
// document.write("String : " + stringName);
// document.write("<br>");
// document.write("Index of 'n'is " + stringName.indexOf("n"))


//#########################################################//

// task 4
// var indexArr=[];
// var str = "Hello World";
//     var searchWord='l'
//     for (let i=0; i<=str.length; i++){
//         if (str[i] === searchWord)
//             {
//                 indexArr.push(i);
//             }
//     }
//     document.write("<h1> String: "+str + "<br> Last index of 'l': " + indexArr[indexArr.length-1]);

//#########################################################//

// // task 5

// var str = "Pakistani";
// var res = str.charAt(3);
// document.write("Character at index 3:" +" "+res);

//#########################################################//

// task 6

// var firstName = "Aashir ";
// var lastName = "Asad";
// var res = firstName.concat(lastName);
// document.write("Welcome"+" "+res);

//#########################################################//

// // task 7

// var city="Hyderabad";
// var change = city.replace("Hyder", "Islam");
// alert(change);

//#########################################################//

// // task 8

// var phrase = 'Ali and Sami are best friends. They play cricket and football together.';
// var tokens = phrase.split('and');
// var stripped = tokens.join('&');
// alert(stripped);

//#########################################################//

//  task 9

// var a = "472";
// var b = parseInt(a);
// document.write("value is " +" "+ b+" "+"and it's type is integer");

//#########################################################//

//  task 10

// var userInput = "peanuts"
// var upper = userInput.toUpperCase();

// document.write(" User Input :" + userInput + "<br>");
// document.write("Upper Case :" + upper )



//#########################################################//

// // task 11

// var input=prompt("Enter input");
// var first=input.slice(0,1);
// var other=input.slice(1);
// var upper=first.toUpperCase();
// var lower=other.toLowerCase();
// document.write("User Input : " + input + "<br>");
// document.write("Title Case : " + upper+lower);

//#########################################################//

// task 12

// var myFractional = parseFloat("35.36");
// var numberAsString = myFractional.toString();


// document.write("Number :" + myFractional + "<br>");
// document.write("Result : " + numberAsString)

//#########################################################//


// task 13

// var ch = prompt("Enter Character");
// var index = ch;
// var i = ch.charCodeAt(index);
// alert("ASCII code of"+" "+ch+" "+"is"+" "+i);

//#########################################################//

// task 14

// var a=["cake", "apple pie", "cookie", "chips", "patties"]
// var order=prompt("Welcoe to ABC Bakery. What do you want to order sir/Ma'am?");
// var found=0, i=0;

// for( i =0; i<a.length;i++){
//     if(a[i] === order){
//         // document.write(order+" is available at index "+i +"in our bakery");
//         found=1;
//         break
//     }

// }
// if(found){
//     document.write(order+" is available at index "+ (i+1) +"in our bakery");
// }
// else{
//     document.write("We are sorry. "+ order +" is not available in our bakery.")
// }

//#########################################################//

// Task 15

// var password=prompt("Enter valid passwordz");
//     var found=0, i=0;

//#########################################################//

// Task 16

// var str="University of Karachi";
  

//     str = str.split('');
    
//     for (let i =0; i<str.length; i++){
//         document.write(str[i]+"<br>");
//     }



//#########################################################//


// // task 17
// var str=prompt("Enter any input?");
// document.write("<h1> User input: " + str);
// document.write("<br> Last character: " + str[str.length-1])


//#########################################################//

// Task No.18

// var str="The quick brown fox jumps over the lazy dog.";
// var word="the";
// var a = str.toLowerCase();   
// var a = a.split(" "); 

// // search for pattern in a 
// let count = 0; 
// for (let i = 0; i <= a.length; i++)  
// {


// if (a[i] === word) 
//     count++; 
// }
// document.write("<h1> Text: " + str);
// document.write("<br> There are " + count + " occurrence(s) of word" + word)



//                                              Chapter # 26-30


// task 1
// var num=+prompt("Enter a positive number","Positive number");
// var number=Math.round(num);
// var floor=Math.floor(num);
// var ceil=Math.ceil(num);
// alert("number"+" "+num+"Round off Value is"+" "+number+"\n"+"Floor value"+" "+floor+"\n"+"Ceil value"+" "+ceil);



//#########################################################//


// task 2
// var num=+prompt("Enter a negative number","Negative number");
// var number=Math.round(num);
// var floor=Math.floor(num);
// var ceil=Math.ceil(num);
// alert("number"+" "+num+"\n"+"Round off Value is"+" "+number+"\n"+"Floor value"+" "+floor+"\n"+"Ceil value"+" "+ceil);

//#########################################################//


// task 3

// var n=prompt("Enter any number?");
// document.write("<h1> The absolute value of " + n + " is "+ Math.abs(n));

//#########################################################//


// task 4

// var bigDecimal = Math.random();
//     var improvedNum = (bigDecimal * 6) + 1;
//     var numberOfStars = Math.floor(improvedNum);
//     document.write("<h1> random dice value: " +  numberOfStars);


//#########################################################//

// task 5

// var bigDecimal = Math.random();
//     var improvedNum = (bigDecimal * 2) + 1;
//     var numberOfStars = Math.floor(improvedNum);
//     if (numberOfStars === 1)
//         document.write("<h1>" +  numberOfStars +"<br> random coin value: Tails");
//     else
//         document.write("<h1>" +  numberOfStars +"<br> random coin value: Heads");

//#########################################################//

// task 6

// var bigDecimal = Math.random();
//     var improvedNum = (bigDecimal * 100) + 1;
//     var numberOfStars = Math.floor(improvedNum);
//     document.write("<h1> random number between 1 and 100: " +  numberOfStars );


//#########################################################//

// task 07

// var weight =prompt("Enter your weight in kilograms?");
// var parseWet=parseFloat(weight);
// document.write("<h1> The weight of user is "+ parseWet +" kilograms");

//#########################################################//

// task 08

// var bigDecimal = Math.random();
//     var improvedNum = (bigDecimal * 10) + 1;
//     var numberSecret = Math.floor(improvedNum);

//     var userInput =prompt("Enter your any number in between 1 to 10?");
//     if (numberSecret === userInput)
//     document.write("<h1> Congratulations the user");
//     else
//     document.write("<h1> Try again"+ numberSecret);




//                                          Chapter # 31-34


//  task 1

// var rightNow= new Date();
// document.write(rightNow);


//#########################################################//


//task 2

// var monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// var rightNow= new Date();
// var theMonth= rightNow.getMonth()
// document.write("<h1> Current month: "+ monthName[theMonth]);

//#########################################################//

// task 3

// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var now = new Date();
// var theDay = now.getDay();
// var nameOfToday = dayNames[theDay];
// document.write("<h1> Today is "+ nameOfToday);

//#########################################################//

// task 4

// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
//     var now = new Date();
//     var theDay = now.getDay();
//     var nameOfToday = dayNames[theDay];
//     if (theDay === 0 || theDay === 6)
//         document.write("<h1> its Fun Day ");
//     else 
//         document.write("<h1> Its working Day ");

//#########################################################//

// task 5

// var now = new Date();
// var theDate = now.getDate();
// if (theDate < 15 )
//     document.write("<h1> First fifteen days of the month.");
// else 
//     document.write("<h1> Last days of the month ");


//#########################################################//

// task 6

// var firstDate = new Date("Jan 1, 1970");
//     var today= new Date();
//     var msTday=today.getTime();
//     var msFirstDate=firstDate.getTime();
//     // var msDiff=msRamzanDate-msTday;
//     var msDiff=msTday-msFirstDate;
//     var mintDiff = msDiff / (1000 * 60);
//     // dayDiff = Math.floor(dayDiff);

//     document.write("<h2> Current Date: "+ today);
//     document.write("<br> Elapsed milliseconds since January 1, 1970: "+ msDiff);
//     document.write("<br> Elapsed minutes since January 1, 1970: "+ mintDiff);

//#########################################################//

// task 7


// var now = new Date();
//     var theHours = now.getHours;
//     if (theHours >= 12 )
//         document.write("<h1> It's pm.");
//     else 
//         document.write("<h1> It's am ");

//#########################################################//

// task 8


// var laterDate = new Date("Dec 31, 2020");
//     document.write("<h1> Later date: " + laterDate)

//#########################################################//

// task 9

// var ramzanDate = new Date("June 18, 2015");
//     var today= new Date();
//     var msTday=today.getTime();
//     var msRamzanDate=ramzanDate.getTime();
//     // var msDiff=msRamzanDate-msTday;
//     var msDiff=msTday-msRamzanDate
//     var dayDiff = msDiff / (1000 * 60 * 60 * 24);
//     dayDiff = Math.floor(dayDiff);
//     document.write("<h1> " + dayDiff + " days have passed since 1st Ramzan, 2015");

    // var dateDiff= today-laterDate;
    // document.write("<h1> Later date: " + laterDate)
    // document.write("<br> today date: " + today)
    // document.write("<br> Diff date: " + dateDiff)

//#########################################################//

// task 10

// var referDate = new Date("Dec 05, 2015");
//     var beginningDate = new Date("Jan 1, 2015");
//     var msReferDate=referDate.getTime();
//     var msBeginningDate=beginningDate.getTime();
//     var msDiff=msReferDate-msBeginningDate;
//     var secondDiff = msDiff / (1000 * 60 );
//     secondDiff = Math.floor(secondDiff);
//     document.write("<h1> On reference date " + referDate );

//     document.write("<br> " + secondDiff + " second had passed sience beginning of 2015");

//#########################################################//

// task 11

// var today = new Date();
//     var oneHourAgo =  new Date();   
//     oneHourAgo.setHours(today.getHours() - 1);
//     document.write("<h1> Current date: " + today );
//     document.write("<br> 1 hour ago, it was " + oneHourAgo);

//#########################################################//

// task 12

// var today = new Date();
//     var hundredYearsAgo =  new Date();   
//     hundredYearsAgo.setFullYear(today.getFullYear() - 100);
//     alert("Current date: " + today + "\n100 years back, it was " + hundredYearsAgo);


//#########################################################//

// task 13

// var age=prompt("Enter your age");
// var birthYear = new Date();
// birthYear.setFullYear(birthYear.getFullYear() - age);

// document.write("<h1> Your age is " + age );
// document.write("<br> Your birth year is " + birthYear.getFullYear());


//#########################################################//

// task 14

// var monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// var name="ABC Customer";
// var currentDate = new Date();
// var month=currentDate.getMonth();
// var consumedUnit=410;
// var pricePerUnit=16;
// var surcharge=350;
// var netAmount=consumedUnit*pricePerUnit;
// var grossAmount=netAmount+surcharge;

// document.write("<h1> K-Electric Bill </h1>");
// document.write("<h2> <br>  Customer Name: " + name);
// document.write("<br> Month: " + monthName[month]);
// document.write("<br> Number of units: " + consumedUnit);
// document.write("<br> Charges per unit: " + pricePerUnit);
// document.write("<br><br> Net Amount Payable (within Due Date): " + netAmount );
// document.write("<br> Late payment surcharge: " + surcharge);
// document.write("<br> Gross Amount Payable (after Due Date): " + grossAmount );



//                                          Chapter # 35-38


//  task 1

// var now= new Date();
// document.write("<h1>" + now);

//#########################################################//

// task 2

// function greet(){
// var c=("Welcome"+" "+"Aashir"+" "+"asad")
// alert(c)
// }
// greet()

//#########################################################//

// task 3

// var a =+prompt("Enter first number?");
// var b = +prompt("Enter 2nd number?");
// var c=0;
// c=add(a,b);
// document.write("<h1>Sum: " +c);

// function add(num1,num2){
// return(num1 +num2);

// }

//#########################################################//


// task 4

// var a =+prompt("Enter first number?");
// var op =prompt("Enter operator for operatioin?");
// var b = +prompt("Enter 2nd number?");
// var c=0;
// c=calculator35(a,op,b);
// document.write("<h1>Result: " +c);

// function calculator35(num1,op, num2){
//     switch(op){
//         case "+" :
//             return(num1+num2);
//             break;
//         case "-" :
//             return(num1-num2);
//             break;
//         case "*" :
//             return(num1*num2);
//             break;
//         case "/" :
//             return(num1/num2);
//             break;
//         case "%" :
//             return(num1%num2);
//             break;
//         default :
//             return("Invalid!")
//     }

//#########################################################//

// task 5


// function argument(){
//     var arg=prompt("enter your number");
// var num=arg*arg;
// alert(num);
// }
// argument();


//#########################################################//


// task 6


// function factorial() {
// var input = prompt("Enter the number to get factorial of: ","Number");
// var fact = input;
// for(var i=1;i < input;i++){
//    fact = i * fact;
// }
// document.write("The Factorial of"+" "+input+" "+"is :"+" "+fact);
// }
// factorial()

//#########################################################//

// Task 7

// var num=+prompt("enter a number");
// let count=1;
// for(var i=count;i<=num;i++){
//     document.write(i+" ")
// }

//#########################################################//

// task 8 

// var base=+prompt("Enter base of triangle?");
//     var perpendicular =+prompt("Enter perpendicular?");
//     var hypotenuse = calculateSquar(base) + calculateSquar(perpendicular);
//     document.write("<h1> Hypotenuse of a right angle triangle is: " +calculateSquar(hypotenuse));


//     function calculateSquar(num){
//         return (num*num);
//     }


//#########################################################//


// task 9

// var length = prompt("Enter a whole number for the length of your rectangle.");
// var width = prompt("Enter a whole number for the width of your rectangle.");
// function area(length, width) {
//     return length * width;
// }
// function perimeter(length, width) {
//     return 2*( length + width);
// }

// document.writeln('The area of your rectangle is ' + area(length, width));  


//#########################################################//

// task 10

// function palindrome(str) {
//     var len = str.length;
//     var mid = Math.floor(len/2);
//     for ( var i = 0; i < mid; i++ ) {
//         if (str[i] !== str[len - 1 - i]) {
//             return false;
//         }
//     }
//     return true;
// }

// var str=prompt("Enter any string for Palindrome check?");
//     if (palindrome(str))
//         {
//             document.write("<h1> The string " + str +" is palindrome.")
//         }
//     else
//         document.write("<h1> The string " + str +" is not palindrome.")

//#########################################################//

// task 11





//#########################################################//

// task 12

// function findLongestWord(str) {

//     var strSplit = str.split(' ');
    
//     var longestWord = 0;
//     var longestIndex = 0;

//     for(var i = 0; i < strSplit.length; i++){
//       if(strSplit[i].length > longestWord){ 
//       longestWord = strSplit[i].length; 
//       longestIndex=i;
//        }
//     }
//     // return longestWord; 
//     return strSplit[longestIndex];
//   }

//   var str=prompt("Enter any string for finding longest word?")
//   document.write("<h1> Longest word is: "+ findLongestWord(str));


//#########################################################//

// task 13

// function wordCount(str, word){

//     var a = str.toLowerCase();   
//     var a = a.split(""); 
  
//     // search for pattern in a 
//     let count = 0; 
//     for (let i = 0; i <= a.length; i++)  
//     { 
    
//     if (a[i] === word) 
//         count++; 
//     }
//     return count;
// }

// var str=prompt("Enter string?");
// var word=prompt("Enter letter to check its occurrence?");

// document.write("<h1> Occurrence of letter " + word +" is: " + wordCount(str,word)); 

//#########################################################//

// task 14

// function calCircumference(radi){
//     const pi=3.14;
//     return 2*pi*radi;
// }
// function calArea(radi){
//     const pi=3.14;
//     return pi*radi*radi;
// }

// var r=prompt("Enter radius of circle?");
// document.write("<h1> The circumference is " + calCircumference(r));
// document.write("<br> The area is " + calArea(r));














