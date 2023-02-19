// LECTURE 1
/*
var number = 5;
number = 4;

var number = 5;
var name = "Ugur";
lastName = "Gözcü";
*/ 

/*
// LECTURE 2
var myName = "Ugur"
myName = 8
let ourName = "FreeCodeCamp"
const pi = 3.14

var myName = "Ugur";
myName = 8;
console.log(myName)
let companyName = "Ritmus";
console.log(companyName);
companyName = "SalesForce";
console.log(companyName);

const pi = 3.14;
console.log(pi);
pi = 3.15;
console.log(pi);
*/

/*

// LECTURE 3
 var a;
 var b = 2;
 console.log(a); //undefined is null
 a = 7;
 b = a;
 console.log(a);
 console.log(b);
 
var a;
a = 5;
var b = 2.0;
var c;
c = 10;
var d = 15.4;
c = a;
console.log(c);
var n;
console.log(n);
*/
 

 // LECTURE 4
/*
 var a = 9;
  var a;
  var b;
  var c;
  a = 5;
  b = 10;
  c = "I am a string";

  a = a + 1;
  b = b + 5;
  c = c + " Yay";
  console.log(a);
  console.log(b);
  console.log(c);
  

var a;
var b;
var c;
c = "I am a ";
a = 5;
b = 10;
a = a + 5;
b = 10 + 1 + b;
c = c + " string";
console.log(a);
console.log(b);
console.log(c);
*/

 // Lecture 5
/*
 var studyCapVar;
 var properCamelCase;
 var titleCaseOver;

 studyCapVar = 10;
 properCamelCase = "A string";
 titleCaseOver = 9000;
 */


 // Lecture 6
/*
 var sum = 10 + 10;
 console.log(sum)
 var difference = 45 - 33;
 console.log(difference);
 var product = 8 * 10;
 console.log(product);
 var quotient = 66 / 33;
 console.log(quotient);
 var myVar = 87;
 myVar = myVar + 1;
 console.log(myVar);
 myVar++;
 console.log(myVar);
 myVar--;
 console.log(myVar);

var sum = 10 + 10;
var toplam = 20 + 20;
console.log(sum);
var product = 8 * 5;
console.log(product);
var quotient = 10 / 5;
console.log(quotient);
var kalan = 11 % 3;
console.log(kalan);
var a = 15;
a++;
a--;
console.log(a);
*/
// Lecture 7
/*
var myDecimal = 0.009;
var product = 2.0 * 2.5;
console.log(product)
var quotient = 4.4 / 2.0;
console.log(quotient);
var remainder;
remainder = 11 % 3;
console.log(remainder);

var myDecimal = 0.007;
var p = 0.442 * 0.3132;
console.log(p);
var q = 0.424 / 0.232;
console.log(q);
*/
// Lecture 8
/*
var a = 3;
var b = 17;
var c = 12;

a = a + 12;
b = b + 9;
c = 7 + c;

a += 12;
b += 9;
c += 7;

a = a - 6;
b = b- 5;
c = c- 10;

a -= 6;
b -= 15;
c -= 1;

a = a * 5;
b = b * 10; 
c = c * 3;

a *= 5;
b *= 3;
c *= 10;

a = a / 12;
b = b / 4;
c = c / 11;

a /= 12;
b /= 4;
c /= 11;



var a;
var b;
var c;
a = 5;
b = 10;
c = 15;

a += 3; // a = a + 3
b = b + 4;
b += 4;
a = a * 7;
a *= 7;
a = a / 6;
a /= 6;
a = a - 9;
a -= 9;
a = a + 1;
a += 1;
a++;
a--;
*/
// Lecture 9
/*
var firstName = "Alan";
var lastName = "Turing";

var myFirstName = "Ugur";
var myLastName = "Kara";

var myStr = "Example of a \"double quoted\" string"
console.log(myStr);
var myStrExample = 'Example of a "double quoted" string 2'
console.log(myStrExample);
var myStr3 = "FirstLine\n\t\\SecondLine\nThirdLine";
console.log(myStr3);

var exampleStr = "I come first." + "I come second";
var exampleStr2 = "This is the start. " + "This is the end ";
console.log(exampleStr);
console.log(exampleStr2);
exampleStr2 += "Concatenate new line";
console.log(exampleStr2);

var ourName = "freeCodeCamp";
var ourStr = "Hello our name is " + ourName + ", how are you?";
var myName = "Ugur";
var myStr4 = "My name is " + myName + " and I am well!";
console.log(myStr4);

var myString = "Hello \"World\""
var myString2 = ' Hello "World" '
console.log(myString2);
var exampleString = "firstLine\nsecondLine\nthirdLine\n\ttabbbb"
console.log(exampleString);
var firstName = "Fırat";
var lastName = "Gözcü";
var fullName;
fullName = firstName + " " + lastName;
console.log(fullName);

var firstName = "Firat";
var lastName = "Gözcü";
var age = 20;
var str = "My name is " + firstName + " my last name is " + lastName + " my age is " + age;
console.log(str);
*/

// Lecture 10
/*
var someAdjective;
var myStr = "Learning to code is "
someAdjective = "Worthwhile";
myStr += someAdjective;
console.log(myStr);
var firstName = "Ada";
var lastName = "Lovelace";
var lastNameLength = lastName.length;
console.log(lastNameLength);
var firstLetterOffFirstName = firstName[0];
var secondLetter;
secondLetter = lastName[0];
console.log(secondLetter);
var myString = "Jello World!"
myString[0] = "H";
console.log(myString);
var lastLetterOfName = lastName[lastName.length - 1];
console.log(lastLetterOfName);

*/
// Lecture 11 
/*
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
var result = "";

result += "The " + myAdjective  + " " + myNoun + " " + myVerb + " to the store " + myAdverb; 


return result;
}
console.log(wordBlanks("dog", "big", "ran", "quickly"));
console.log(wordBlanks("bike", "slow", "flew", "slowly"));

var ourArray = ["John", 23];
var myArray = [];
myArray = ["Quincy", 1];
var nestedArray = [["The universe", 42] ,["everything", 101010]];
var myArray2 = [["The bulls", 23],["White sox", 21]];
var ourArray = [50,60,70];
var ourData = ourArray[2];
console.log(ourData);

ourArray[1] = 45;
console.log(ourArray);

var multiArray = [[1,2,3],[4,5,6],[7,8,9]];
var myMultiData = multiArray[2][1];
console.log(myMultiData);
var exampleArray = ["Stimpson", "J", "cat"];
exampleArray.push(["happy","joy"]);
var myArray3 = [["John, 23"], ["Cat",2]];
myArray3.push(["dog", 3]);
console.log(myArray3);
*/

// Lecture 12
/*
var ourArray = [1,2,3];
var removedFromOurArray = ourArray.pop();
console.log(removedFromOurArray);
console.log(ourArray);
var myArray = [[1,2,3], [4,5,6]];
myArray.pop();
console.log(myArray);
var ourArray2 = ["Stimpson", "J",["Cat"]];
ourArray2.shift();
console.log(ourArray2);
var myArray2 = [["john",23], ["dog",3]];
var removedFromMyArray2 = myArray2.shift();
console.log(removedFromMyArray2);
console.log(myArray2);
ourArray2.unshift("Happy");
myArray2.unshift(["Paul", 35]);
console.log(myArray2);
*/

// Lecture 13
/*
var myList = [["Cereal",3], ["Milk", 2], ["bananas", 3], ["Juice", 2]]; //Shopping list yayy!!

function ourReusableFunction() {
  console.log("Hello World!");
}
ourReusableFunction();
ourReusableFunction();
ourReusableFunction();

function reusableFunction() {
  console.log("Hi Wordl!");
}
reusableFunction();

function ourFunction(a,b) {
  console.log(a - b);
}
ourFunction(10,5);
function functionWithArgs(a,b) {
  console.log(a + b);
}
functionWithArgs(10,20);
*/
// Lecture 14 Global scope important
/*
var myGlobal = 10;

function f1() {
  oopsGlobal = 5;
}


function fun2() {
  var output = "";
  if(typeof myGlobal != "undefined") {
    output += "myGlobal : " + oopsGlobal;
  }
  if(typeof oopsGlobal != "undefined") {
    output += " oopsglobal: " + oopsGlobal;
  }
  console.log(output);
}
fun1();
fun2();
*/
// Lecture 15
/*
function myLocalScope() {
   myVar = 5;
  console.log(myVar);
} 
myLocalScope();
console.log(myVar);
var outerWear = "T-Shirt";

function myOutfit() {
  var outerWear = "Sweater";
  return outerWear;

}
console.log(myOutfit());
console.log(outerWear);

function minusSeven(num) {

return num - 7;
}
console.log(minusSeven(10));


function timesFive(num) {
  return num * 5;

}
console.log(timesFive(5));


var sum = 0;

function addThree() {
  sum += 3;
}
addThree();
console.log(sum);


//Lecture
var changed = 0;

function change(num) {
  return (num + 5) / 3;
}
changed = change(10);
console.log(changed);
// can do the same for the processed

// Lecture
function nextInLine(arr, item) {
  arr.push(item);
  return arr.shift();
}
var testArr = [1,2,3,4,5];

console.log("Before : " + JSON.stringify(testArr));
console.log(nextInLine(testArr,6));
console.log("After : " + JSON.stringify(testArr));

//Lecture
function welcomeToBoolean() {
  return true;
}

function trueOrFalse(wasThatTrue) {
  if(wasThatTrue) {
    return "Yes, that was true";
  }
  return "No, that was false";
}
console.log(trueOrFalse(true));


function testEqual(val) {
  if(val == 12) {
    return "Equal";
  }
  return "not equal";
}
console.log(testEqual(126));

function testStrict(val) {
  if(val === 7) {
    return "Equal";
  }
  return "not equal";
}
console.log(testStrict('7'));

function testNotEqual(val) {
  if(val != 99) {
    return "not equal";
  }
  return "equal";
}
function testStrictWithTwoValues(a,b) {
  if(a === b) {
    return "strict equal";
  }
  return "not strict equal";
}
console.log(testNotEqual(99));

function testStrictNotEqual(val) {
  if(val !== 17) {
    return "not equal";
  }
  return "equal";
}
console.log(testStrictNotEqual("17"));

function testGreaterThan(val) {
  if(val > 100) {
    return "over 100";
  }
  if(val > 10) {
    return "over 10";
  }
  return "10 or under";
}
console.log(testGreaterThan(1));

function testGreaterOrEqual(val) {
  if(val >= 20) {
    return "20 or over";
  }
  if(val >= 10) {
    return "10 or over";
  }
  return "less than 10";
}
function testLess(val) {
  if(val < 25) {
    return "Under 25";
  }
  if(val < 55) {
    return "Under 55";
  }
  return "55 or over";
}

function testLessOrEqual(val) {
  if(val <= 12) {
    return "Smaller than or equal to 12";
  }
  if(val <= 24) {
    return "smaller than or equal to 24";
  }
  return "more than 24";
}

function testLogicalAnd(va){
  if(val <= 50 && val >= 25) {
    return "Yes!";
  }
}

function testLogicalOr(val) {
  if(val < 10 || val > 20) {
    return "outside";
  }
  return "inside";
}
var result = "";
function testElse(val) {
  if(val > 5) {
    result = "Bigger than 5";
  }else {
    result = "5 or smaller"
  }
  return result;
}
function testElseIf(val) {
  if(val > 10) {
    return "Greater than 10";
  }else if( val < 5) {
    return "Smaller than 5";
  }else {
    return "between 5 and 10";
  }
}

function orderMyLogic(val) {
  if(val < 10) {
    return "Less than 10";
  }else if(val < 5) {
    return "less than 5";
  }else {
    return "greater than or equal to 10";
  }
}

function testSize(num) {
  if(num < 5) {
    return "tiny";
  }else if(num < 10) {
    return "small";
  }else if(num < 15) {
    return "medium";
  }else if(num < 20) {
    return "large";
  }else {
    return "Huge";
  }
}
console.log(testSize(19));

//The golf game this might be important!!

var names = ["Hole-in-one", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go-Home"];

function golfScore(par, strokes) {
  if(strokes == 1) {
    return names[0];
  }else if(strokes <= par - 2) {
    return names[1];
  }else if(strokes <= par - 1) {
    return names[2];
  }else if(strokes == par) {
    return names[3];
  }else if(strokes <= par + 1) {
    return names[4];
  }else if(strokes <= par + 2) {
    return names[5];
  }else if(strokes <= par + 3) {
    return names[6];
  }
}
console.log(golfScore(5,8));

// Lecture
function caseInSwitch(val) {
  var answer = "";
  switch(val) {
      case 1:
      answer = "alpha";
      break;
      case 2:
        answer = "beta";
        break;
        case 3:
          answer = "gamma";
          break;
          case 4:
            answer = "delta";
            break;
          default:
            answer = "None";
            break;
  }
  return answer;
}
console.log(caseInSwitch(7));

function sequentialSizes(val) {
  var answer = "";
  switch(val) {
    case 1:
    case 2:
    case 3:
      answer = "Low";
      break;
      case 4:
        case 5:
        case 6:
          answer = "Mid";
          break;
          case 7:
            case 8:
            case 9:
              answer = "High";
              break;
              default:
                answer = "none";
                break;
  }
  return answer;
}
console.log(sequentialSizes(7))

function chainToSwitch(val) {
  var answer = "";
  switch(val) {
    case "bob":
      answer = "Marley";
      break;
      case 42:
        answer = "The answer";
        break;
        case 1:
          answer = "There is no #1";
          break;
          default:
            answer = "wrong value!";
            break;
  }
}


function isLess(a,b) {
  return a < b;
}
console.log(isLess(100,15));

function abTest(a,b) {
if(a < 0 || b < 0) {
  return undefined;
}


  return Math.round(Math.pow(Math.sqrt(a)) + Math.sqrt(b),2)
}
console.log(abTest(-2,2));


//BlackJack card counting !
var count = 0;

function cc(card) {
switch(card) {
  case 2:
  case 3:
  case 4:
  case 5:
  case 6:
  count++;
  break;
  case 10:
  case "J":
  case "Q":
  case "K":
  case "A":
    count--;
  break;
  
}
 
var holdbet = (count > 0) ? "Bet": "Hold";

return count + " " + holdbet


}
cc(2)
cc("K");
cc(10);
cc("K");
cc("A");
console.log(cc(4));

// Lecture
var ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]

};
var myDog = {
  "name":  "Quicny",
  "legs": 3,
  "tails": 2,
  "friends": []
};
 var testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
 };
 var hatValue = testObj.hat;
 var shirtValue = testObj.shirt;
 var secondHatValue = testObj["hat"];
 var secondShirtValue = testObj["shirt"];
 console.log(secondHatValue);

 var testObj2 = {
  12: "Namath",
  16: "montana",
  19: "Untias"
 };
 var playerNumber = 16;
 var player = testObj2[playerNumber];
 ourDog.name = "Happy Camper";
 myDog.name = "Happy Coder";

 myDog['Bark'] = "Woof!"; //added new property
 delete myDog.Bark; // deleted property


 function phoneticLookup(val) {
  var result = "";


  var lookup = {
    "alpha": "Adams",
    "Bravo": "Boston",
    "Charlie": "Chicago",
    "Delta": "Denver",
    "Echo": "Easy",
    "Foxtrot": "Frank"
  };
  result = lookup[val];
  return result;
 }
 console.log(phoneticLookup("Charlie"));


 var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh"
 };

 function checkObj(checkProp) {

  if(myObj.hasOwnProperty(checkProp)) {
    return myObj[checkProp];
  }else {
    return "Not found";
  }
 }
 console.log(checkObj("hello")); // pass a string !


 var myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "releseYear": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  },
  {
    "artist": "Ugur Kara",
    "title": "Cereal man",
    "releaseYear": 2002,
    "formats": [
      "YoutubeVideo"
    ]
  }
 ];
 */
 //Now we will see the nested objects !

 /*
 var myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
    },
    "outside": {
      "trunk": "jack"
    }
  }
 };

 var gloveBoxContents = myStorage.car.inside["glove box"];
 console.log(gloveBoxContents);

 //Stopped at nested objects!
 
//Lecture

var myPlants = [
  {
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "danelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }
];

var secondTree = myPlants[1].list[1];
console.log(secondTree);

var collection = {
  "2548": {
    "album": "Slippery When Wet",
    "artist": "Bon Jovi",
    "tracks": [
      "Let It Rock",
      "You gİVE love a Bad Name"
    ]
  },
  "2468": {
    "album": "1999",
    "artist": "prince",
    "tracks": [
      "1999",
      "Little Red Corvette"
    ]
  },
  "1245": {
    "artist": "Robert Palmer",
    "tracks": []
  },
  "5439": {
    "album": "ABBA Gold"
  }
};

var collectionCopy = JSON.parse(JSON.stringify(collection));

function updateRecords(id, prop, value) {
if(value === "") {
  delete collection[id][prop];
}else if(prop === "tracks") {
  collection[id][prop] = collection[id][prop] || [];
  collection[id][prop] = value;
}else {
  collection[id][prop] = value;
}



  return collection;
}

updateRecords(2468, "tracks" , "test");
console.log(updateRecords(5439, "artist", "ABBA"));
*/
// Lecture
var myArray = [];
var i = 0;
while( i < 5) {
myArray.push(i);
i++;
}
console.log(myArray);
var ourArray = [];

for(var i = 0; i < 5; i++) {
  ourArray.push(i);
}

var yourArray = [];

for(var i = 1; i < 6; i++) {
  yourArray.push(i);
}

console.log(yourArray);

var newArray = [];

for(var i = 1; i < 10; i +=2) {
newArray.push(i);
}
console.log(newArray);

var ugurArray = [];

for(var i = 10; i > 0; i -=2) {
  ugurArray.push(i);
}
console.log(ugurArray);

var sumArray = [9,10,11,12];
var total = 0;

for(var i = 0; i < sumArray.length; i++) {
  total += sumArray[i];
}
console.log(total);

function multiplyAll(arr) {
  var product = 1;
  for(var i = 0; i < arr.length; i++) {
    for(var j = 0; j < arr[i].length; j++) {
      product *= arr[i][j];
    }
  }


  return product;
}
var product = multiplyAll([[1,2],[3,4],[5,6,7]]);
console.log(product);
var myNewArray = [];
var  i = 10;
do {
myNewArray.push(i)


}while(i < 5);
console.log(myNewArray);

//important coding challenge!!

var contacts = [
  {
    "firstName": "Akira",
    "lastName": "Laine",
    "number": "05325079482",
    "likes": ["Pizza", "Coding", "Brownie Points"]
  },
  {
    "firstName": "Harry",
    "lastName": "Potter",
    "number": "0583628596",
    "likes": ["Hogwarts", "Magic", "Hagrid"]
  }
];
function lookUpProfile(name, prop) {
  for(var i = 0; i < contacts.length; i++) {
    if(contacts[i].firstName === name) {
      return contacts[i][prop] || "No such property";
    }
  }
  return "No such contact"
}
var data = lookUpProfile("Akira", "likess");
console.log(data);



function randomFraction() {

  return Math.random()
}
console.log(randomFraction());


function randomWholeNum() {
  return Math.floor(Math.random() * 300);
}

console.log(randomWholeNum());


//Generate within a range!! 2.30.23 Hold on