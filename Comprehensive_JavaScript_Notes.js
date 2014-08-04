/* Testing While Loops */ 

var x = prompt("Guess a number between 1 and 50");

while (x != "n" && x !="N") 
{
    if(x <= 24) {
        alert("Nope, guess higher");
    }else if (x>=26) {
        alert("Nope, guess lower");
    }else{
        alert("You got it");
        break;
    }
    x = prompt("Guess a number between 1 and 50, type n if you want to quit the game");
}

/* Testing a for Loop & factoring it into While Loop */ 


for (var x = prompt("Guess a number between 1 and 50");
x != "n" && x !="N";x = prompt("Guess a number between 1 and 50, type n if you want to quit the game")) 
{
    if(x <= 24) {
        alert("Nope, guess higher");
    }else if (x>=26) {
        alert("Nope, guess lower");
    }else{
        alert("You got it");
        break;
    }
 
}

/* Playing with Arrays - 2 ways */
/* 1st way, Regular */

var familyNames = new Array();
familyNames[0] = "Jordan";
familyNames[1] = "Paige";
familyNames[2] = "Jared";

alert(familyNames);

/* 2nd way, literal way (most common)*/
var baseballTeams = ["Mets", "Yankees", "Rangers"];

alert(baseballTeams);

/* 3rd way, condensed, not common, just used parantheses instead of square brackets */

var baseballTeams = ("Mets", "Yankees", "Rangers");
alert (baseballTeams);

/* array stuff */
var fruits = ["Apple","Pear","Orange"];

var arrayLength = fruits.length;

for (var i = 0; i <= arrayLength; i++)
{
    alert(fruits[i]);
}

/* A cool program with Arrays */
var students = new Array();
var grades = new Array();
var i = "y";

while (i != "n" && i != "N")
{
    var setStudent = prompt("Student name:");
    students.push(setStudent);
    var setGrade = prompt("Grade:");
    grades.push(setGrade);
    i = prompt("Would you like to add another entry? \"y\" for yes, \"n\" for no");
}

for (var j =  0; j <= students.length; j++)
{
    console.log(students[j] + " scored a " + grades[j] + " on the exam. ");
}

/* New Stuff */
function billing() 
{
    var myRecord = 1;
    var recordArray = [];
    
    for (myRecord; myRecord <=10; myRecord++) 
    {
        var num1 = prompt("Please enter record #" + myRecord);
        recordArray.push(num1);
    }
    
    return recordArray;
}

console.log(billing());

/* Setters and Getters in JavaScript */

function car(make, model, year, color, damage)
{ 
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.damage = damage;
    
    this.setDamage = setDamage;
    function setDamage(newStatus)
    { 
        this.damage = newStatus;
    };
    
    this.getDamage = getDamage;
    function getDamage()
    {
        return this.damage;
    }
}

jordanLiddle = new car("Maserati", "Db9", 2013, "black", null);

var getPrompt = prompt("What is the updated damage on the car?");

jordanLiddle.setDamage(getPrompt);
alert(jordanLiddle.getDamage() + " has been added to the car history");
//DONE


//For Loops and conctatenating string arrays
var firstNames = ["Matt ", "George ", "Brad "];
var lastNames = ["Damon", "Clooney", "Pitt"];
var fullNames = [];

for (var i = 0; i < firstNames.length; i++) {
    for (var y = 0; y < lastNames.length; y++) {
    fullNames.push(firstNames[i]+lastNames[y]);
    i++;
    }
}

console.log(fullNames[2]);
//DONE


//CONDITIONAL OPERATORS ? : : 
// condition ? expr1 : expr2
var x = 2;
var answer = x===1 ? "Nailed it" : "Wrong,sucka";
alert(answer);
//DONE


//PALINDROME TEST
function isPali(text) {
    //check to see if user inputted text
    if (text === "") return "Uhh...you gotta type something, bro"
    //turn text to lowercase so all inputs treated equally
    text = text.toLowerCase();
   
    
   if (text.length === 1) return "You got yourself a palindrome"
    if (text.charAt(0) != text.charAt(text.length - 1)) return "Not a palindrome"
    return isPali(text.substring(1,text.length - 1));
}
alert(isPali("joioj"));

//To UPPER CASE
var givenString = prompt("Type in a string, dude.");
function toUpper(givenString) {
    var splitArray = givenString.split(" ");
    var newArray = [];
    
    for(i = 0; i < splitArray.length; i++) {
    newArray.push(splitArray[i].charAt(0).toUpperCase() + splitArray[i].slice(1));
    }
    return newArray.join(" ");
}
alert(toUpper(givenString));
// DONE

//Using recursion in functional declarations
function factorial(num) {
    if (num <= 1) {
        return 1;
    } else {
        return num * arguments.callee(num-1);
    }
}
console.log(factorial(3));
//DONE


//PLAYING WITH IF ELSE STATEMENTS
var num = prompt("Name a number");
var y = 1;
function test(num) {
    if(num == 4) {
        alert("this is true");
        return y = 2;
    } else if(num == 5) {
        alert("not true");
        return y = 3;
    } else {
        alert("worth a try though");
        return y = 4;
    }
}
alert(y);
test(num);
alert(y);

/* The following values will evaluate to false:

false
undefined
null
0
NaN
the empty string ("") */

// PLAYING WITH SWITCH STATEMENTS
switch (fruittype) {
   case "Oranges":
      document.write("Oranges are $0.59 a pound.<br>");
      break;
   case "Apples":
      document.write("Apples are $0.32 a pound.<br>");
      break;
   case "Bananas":
      document.write("Bananas are $0.48 a pound.<br>");
      break;
   case "Cherries":
      document.write("Cherries are $3.00 a pound.<br>");
      break;
   case "Mangoes":
   case "Papayas":
      document.write("Mangoes and papayas are $2.79 a pound.<br>");
      break;
   default:
      document.write("Sorry, we are out of " + fruittype + ".<br>");
}
document.write("Is there anything else you'd like?<br>");
//DONE

//PLAYING WITH DO WHILE STATEMENTS
do {
   i += 1;
   document.write(i);
} while (i < 5);
//DONE

//IMPRESSIVE FOR MOI
var array = [23, 1, 3, 245354, 12];
function highNum() {
    array = array.sort(function(a,b){return a-b});
    var newArray = array.slice(1,array.length-1);
    return "The second lowest number is " + newArray[0] + " and the second highest is " + newArray[newArray.length -1]
}
console.log(highNum());
//DONE

//Removing Duplicates from Arrays
function isDuplicate(value,index,inputArray) {
      return inputArray.indexOf(value) == index;
}
function getNumber() {
    var soonArray = prompt("Type in some random numbers");
    return soonArray.split(" ").sort(function(a,b){return a-b}).filter(isDuplicate);
}

var array = getNumber();

function highNum() {
    array = array.sort(function(a,b){return a-b});
    var newArray = array.slice(1,array.length-1);
    return "The second lowest number is " + newArray[0] + " and the second highest is " + newArray[newArray.length -1]
}
console.log(highNum()); 
//DONE

//MyOWN
var array = ["what", "are", "indians", "trying"];
var counter1 = [];

function findFirsts() {
    
    function answer() {
        
    for ( i = 0; i < array.length; i++ ) {
        
        var y = (array[i].charAt(0).toUpperCase());
        
        counter1.push(y);
        
        //alert(counter1);
        
        }
     
    }
     
      alert(counter1);
      answer();
}

findFirsts();
alert(counter1.join(""));
//DONE







