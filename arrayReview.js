var threeItems = [1,2,3];
//create a function named 'last' that returns the last item from 'threeItems'
//alert the result of your function

// _____My Code______________________________________________________________
var last = function(arr){
  var answer = arr[arr.length - 1]
  return answer
}

alert(last(threeItems));
// _____My Code______________________________________________________________

/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */


//Fix 'dicedArray' below so that it's an array full of integers from 0-10
var dicedArray = [0,1,4,5,7,8,10];

// _____My Code______________________________________________________________
var fixArray = function(arr){
  for (var i = 0; i < arr.length; i++) {
    if (i !== arr[i]) {
      arr.splice(i, 0, i);
      i--
    };
  };
  return arr;
}

alert(fixArray(dicedArray));
// _____My Code______________________________________________________________

/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//Loop through evenArray removing all values that aren't even 
var evenArray = [1,2,3,6,22,98,45,23,22,12];

// _____My Code______________________________________________________________
var even = function (arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      arr.splice(i, 1);
      i--
    };
  };
  return arr;
}

alert(even(evenArray));
// _____My Code______________________________________________________________

/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//below you're given a function that will return a random number between 0 and 30, and an array full or numbers 'randomArray'. Your job is to write a function that will get a random number, then loop through the array to see if that random number is in the array. If it is, alert true, if it's not, alert false
var getRandomArbitrary = function() {
  return Math.floor(Math.random() * (30 - 0) + 0);
}
var randomArray = [0,3,4,5,6,7,9,14,17,24,25,26,29,30];

// _____My Code______________________________________________________________
var findNum = function(arr) {
  var randomNum = getRandomArbitrary();
  var inArray = false;
  console.log(randomNum);
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === randomNum) {
      inArray = true;
      break
    };
  };
  return inArray;
}

// OR

var findNum2 = function (arr) {
  var randomNum = getRandomArbitrary();
  var inArray = false;
  console.log(randomNum);
  if (arr.indexOf(randomNum)) {
    inArray = true;
  };
  return inArray;
}

alert(findNum(randomArray));
alert(findNum2(randomArray));
// _____My Code______________________________________________________________

/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//Create a copy of first and save it into second. Then, add 6 and 7 to the end of second. When you run this, first should be just [1,2,3,4,5] and second will be [1,2,3,4,5,6,7] if you created your copy correctly.
var first = [1,2,3,4,5];
var second = [];

// _____My Code______________________________________________________________
for (var i = 0; i < first.length; i++) {
  second.push(first[i]);
};

second.push(6, 7);
// _____My Code______________________________________________________________

alert(first) //[1,2,3,4,5];
alert(second) //[1,2,3,4,5,6,7];



/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//write a function called longest that takes in our sentence variable, and returns the longest word in that sentence.
var sentence = "Dev Mountain is the best"

// _____My Code______________________________________________________________
var longest = function (str) {
  var arrSplit = str.split(' ');
  var longestWord = '';
  for (var i = 0; i < arrSplit.length; i++) {
    if (arrSplit[i].length > longestWord.length) {
      longestWord = arrSplit[i];
    };
  };
  return longestWord;
}

// OR

var longest1 = function (str) {
  var longestWord = str.reduce(
    function (a, b) {
      return a.length > b.length ? a : b;
    });
}

alert(longest(sentence));
// _____My Code______________________________________________________________

/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//write a function called capitalize that takes in the myPoem variable and capitalizes every word 
var myPoem = 'What is a jQuery but a misunderstood object?'
//What is a jQuery but a misunderstood object? --> What Is A JQuery But A Misunderstood Object?

// _____My Code______________________________________________________________
var capitalize = function (str) {
  str = str.split(' ');
  var newArr = [];
  var newString;
  var firstLetter;
  for (var i = 0; i < str.length; i++) {
    newString = str[i].split('');
    firstLetter = newString[0].toUpperCase();
    newString.splice(0, 1, firstLetter);
    newString = newString.join('');
    newArr.push(newString);
  };
  return newArr.join(' ');
}

// OR

var capitalize1 = function (str) {
  str = str.split(' ');
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  };
  return str.join(' ');
}

alert(capitalize(myPoem));
alert(capitalize1(myPoem));
// _____My Code______________________________________________________________

/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



var theOdyssey = "function expression or function declaration? Tis an obvious choice";
//Write a function called vowelCounter that takes in a string (theOdyssey) and returns how many vowels are in that string.

// _____My Code______________________________________________________________
var vowelCounter = function (str) {
  var vowels = str.replace(/[aeiou]/ig,'');
  return str.length - vowels.length;
}

// OR

var vowelCounter1 = function (str) {
  var vowels = 'aeiou'
  var counter = 0;
  for (var i = 0; i < str.length; i++) {
    if (vowels.indexOf(str[i]) !== -1) {
      counter++;
    };
  };
  return counter;
}

// OR

var vowelCounter2 = function (str) {
  str = str.split('');
  var counter = 0;
  for (var i = 0; i < str.length; i++) {
    if ((str[i] === 'a') || (str[i] === 'e') || (str[i] === 'i') || (str[i] === 'o') || (str[i] === 'u')) {
      counter++;
    };
  };
  return counter;
}

alert(vowelCounter(theOdyssey));
alert(vowelCounter1(theOdyssey));
alert(vowelCounter2(theOdyssey));
// _____My Code______________________________________________________________
