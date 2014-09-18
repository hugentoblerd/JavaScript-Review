/* Declare and Define the functions here that will make the function calls below work properly */


// _______MyCode________

var first = function (arr, cb) {
  cb(arr[0]);
};

// _______________________

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
first(names, function(firstName){
  console.log('The first name in names is ', firstName)
});


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */


// _______MyCode________

var last = function (arr, cb) {
  cb(arr[arr.length - 1]);
}

// _______________________

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
last(names, function(lastName){
  console.log('The last name in names is ', lastName);
});




/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */


// _______MyCode________

var contains = function (str, cb) {
  var inNames = false;
  for (var i = 0; i < str.length; i++) {
    if (str === names[i]) {
      inNames = true;
    };
  };
  cb(inNames);
}

// _______________________

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
contains('Colt', function(yes){
  if(yes){
    console.log('Colt is in the array');
  } else {
    console.log('Colt is not in the list');
  }
});




/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */


// _______MyCode________

var map = function (arr, cb) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    newArr[i] = cb(arr[i]);
  };
  return newArr;
}

// _______________________

var numbers = [1,2,3,4,5];
//Produces a new array of values by mapping each value in list through a transformation function
map(numbers, function(num){
  return num * 2; //returns an array of [2,4,6,8,10]
});




/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */


// _______MyCode________

var uniq = function (arr, cb) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    newArr.push(arr[i]);
  };
  for (var i = 0; i < newArr.length; i++) {
    for (var j = 0; j < newArr.length; j++) {
      if (i !== j) {
        if (newArr[i] === newArr[j]) {
          newArr.splice(j, 1);
          j--;
        };
      };
    };
  };
  cb(newArr);
}

// OR



// _______________________

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
uniq(names, function(uniqArr){
  console.log('The new names array with all the duplicate items removed is ', uniqArr);
});




/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */


// _______MyCode________

var each = function (arr, cb) {
  for (var i = 0; i < arr.length; i++) {
    cb(arr[i], i)
  };
}

// _______________________

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
each(names, function(item, indice){
  console.log('The item in the ' + indice + ' position is ' + item)
});




/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */


// _______MyCode________

var getUserById = function (str, cb) {
  for (var i = 0; i < users.length; i++) {
    for (key in users[i]) {
      debugger;
      if (users[i][key] === str) {
        cb(users[i]);
      };
    };
  };
}

// _______________________

var users = [
  {
    id: '12d',
    email: 'tyler@gmail.com',
    name: 'Tyler',
    address: '167 East 500 North'
  },
  {
    id: '15a',
    email: 'cahlan@gmail.com',
    name: 'Cahlan',
    address: '135 East 320 North'
  },
  {
    id: '16t',
    email: 'ryan@gmail.com',
    name: 'Ryan',
    address: '192 East 32 North'
  },
];
getUserById('16t', function(user){
  console.log('The user with the id 16t has the email of ' + user.email + ' the name of ' + user.name + ' and the address of ' + user.address); 
});




/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */


// _______MyCode________

var find = function (arr, cb) {
  for (var i = 0; i < arr.length; i++) {
    if (cb(arr[i])) {
      return arr[i];
    }else {
      return false;
    };
  };
}

// _______________________

//Looks through each value in the list, returning the first one that passes a truth test 
var numbers  = [1, 2, 3, 4, 5, 6];
find(numbers, function(num){ 
  return num % 2 == 0; //should return 2
})
