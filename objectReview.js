//Make a 'favoriteThings' object that contains the following keys: band, food, person, book, movie, holiday. Have the values to those keys be your favorite thing in that category. 

// ________MyCode_____________________________________________________________________________

var favoriteThings = {};
favoriteThings.band = 'blink-182';
favoriteThings.food = 'manacodi';
favoriteThings.person = 'Paul George';
favoriteThings.book = 'The Hobbit';
favoriteThings.movie = 'Avatar';
favoriteThings.holiday = 'Thanksgiving';

// _____________________________________________________________________________________________

//After you've made your object, add another key named 'car' with the value being your favorite car and then another key named 'brand' with the value being your favorite brand.

// ________MyCode_____________________________________________________________________________

  favoriteThings.car = 'Ford Raptor';
  favoriteThings.brand = 'Nike'

// _____________________________________________________________________________________________

//Now change the food key in your favoriteThings object to be 'Lettuce' and change the book key in your favoriteThings object to be '50 Shades of Gray'. 

// ________MyCode_____________________________________________________________________________

favoriteThings.food = 'Lettuce';
favoriteThings.book = '50 Shades of Gray';

// _____________________________________________________________________________________________

//Now, alert your favorite person, then alert your favorite book.

// ________MyCode_____________________________________________________________________________

alert(favoriteThings.person);
alert(favoriteThings.book);

// _____________________________________________________________________________________________
/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



var user = {
    name: 'Tyler McGinnis', 
    email: null,
    pwHash: 'U+Ldlngx2BYQk',
    birthday: undefined,
    username: 'tylermcginnis33',
    age: 0
}

//Above you're given a user object. Loop through the user object checking to make sure that each value is truthy. If it's not truthy, remove it from the object. hint: 'delete'.

// ________MyCode_____________________________________________________________________________

  for (var key in user) {
    if (!user[key]) {
      delete user[key];
    };
  }

// _____________________________________________________________________________________________

//Once you get your truthy array, Change the remaining values in the array to be specific to you (name: 'your name', pwHash: 'your pwHash'), rather than my information.

// ________MyCode_____________________________________________________________________________

user.name = 'Dave';
user.pwHash = 'passwordy';
user.username = 'hugey';

// _____________________________________________________________________________________________

//Now console.log your object and make sure it looks right.

// ________MyCode_____________________________________________________________________________

console.log(user);

// _____________________________________________________________________________________________

/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//create an empty object called methodCollection. 

// ________MyCode_____________________________________________________________________________

var methodCollection = {};

// _____________________________________________________________________________________________

//Now add two methods (functions that are properties on objects) to your methodCollection object. One called 'alertHello' which alerts 'hello' and another method called logHello which logs 'hello' to the console. 

// ________MyCode_____________________________________________________________________________

methodCollection.alertHello = function () {
  alert('hello');
}

methodCollection.logHello = function () {
  console.log('hello');
}

// _____________________________________________________________________________________________

//Now call your alertHello and logHello methods. 

// ________MyCode_____________________________________________________________________________

methodCollection.alertHello();

methodCollection.logHello();

// _____________________________________________________________________________________________

/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//write a function called voweler that accepts a string, and returns an object with the keys being all the vowels in that string, and the values being how many times that particular vowel was in the string.
//voweler("This is a test") --> {i: 2, a: 1, e: 1};

// ________MyCode_____________________________________________________________________________

var voweler = function (str) {
  var obj = {};
  var a = 0, e = 0, i = 0, o = 0, u = 0;
  str = str.split('');
  for (var j = 0; j < str.length; j++) {
    switch (str[j]) {
      case 'a':
        obj.a = ++a;
        break;
      case 'e':
        obj.e = ++e;
        break;
      case 'i':
        obj.i = ++i;
        break;
      case 'o':
        obj.o = ++o;
        break;
      case 'u':
        obj.u = ++u;
        break;
    };
  };
  return obj
}

// _____________________________________________________________________________________________
