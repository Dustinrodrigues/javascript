// Numbers
//numbers and be computed with +,-,*,/,%, ++ increment, -- decrement
//NaN means Not a Number
var pizza = 5;
var soda = 1;
var bread = 3;

var total = pizza + soda;

console.log(total);

/**
 * The console. log () is a function in JavaScript which is used to print any kind of variables defined before in it or to just print
 any message that needs to be displayed to the user.
 */

 // string

 const name = 'Dustin Rodrigues';

 const welcome = "Welcome to Geekwise Academy";


 console.log(name);
 console.log(welcome);

 // Array
 var fruits = ['apples','grapes','oranges','bananas'];
 var rockBand = ['pantera', 'aSkylitDrive', 'takingBackSunday'];

 console.log(fruits);
 console.log(rockBand);

 //Object

 var car = {
     type: "fiat",
     model:"500",
     color:"white"
 };

 console.log(car);

 // Boolean
 // everything with a real value is true 0, null, undefined is false
// comparison operators always return true or false ==, ===, !=, !==, !===, <, >, <=, >=, && AND, || OR, ! NOT
const present = true;
const absent = false;
Boolean(present);
console.log(present);
// Undefined
var cat = 
console.log(cat);
// Null
var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
person = null;    // Now value is null, but type is still an object
console.log(person);
//Get the button
var mybutton = document.getElementById("myBtn");
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
// command question mark is a single line comment

document.write('Hello World');

var favoriteMovie = 'My favorite movie is StarWars';

document.write(favoriteMovie);

//Event Listeners
var quote = document.querySelector("#quote");
var prev= document.querySelector("prev");
var newQuote = document.querySelector("#next");
var n = 0;
varquoteList = [
  "Slow progress is better than no progress",
  "If you cannot accept it, change it. If you cannot change it, accept it"
  "Your time is limited. So, don't waste it living some else's life"
];

  var backquote = quoteList.reverse;

  newQuote.addEventsListener("click", function(){

    if (n <100){
      quote.textContent = quoteList [n];
      n++;
    } else {
      quote.textContent = quoteList[n];
      n = 0;}
    });
    prev.addEventListener("click",
                            function(){
    if (n<100) {n
        quote.textcontent = quoteList[n];
        n--; }
      else{
        quote.textcontent = quoteList[n];
        n = 0;}
      });
              
                            
