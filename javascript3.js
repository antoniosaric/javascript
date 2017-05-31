// var a = 1.3;
// var b = 2.2;

// console.log(a * b);

// if ((a * b).toFixed(2) == 2.86){ //without fixed there is a bug in java that will: a * b = 2.8600000003
//   console.log("true");
// } else {
//   console.log("false");
// }

//you can use infinity
// var a = Infinity

var a = 2;
var b = 3;

// console.log(3%2);

console.log(1 !== "1"); // true becasue it is not equal.

a == b ? console.log("Equal") : console.log("Not Equal")

//primite type. If you assign a new varible to a primative type it make a new object.
// var a = 5;

//reference types. If you edit an object it can affect all objects associated with it


var array = [1,2,3];

array[1] = 100;

// console.log(array);

// for (var i = 0; i < array.length; i++){
//   console.log(array[i]);
// }

console.log(array.indexOf(100)); // finds index of 100 which is 1
array[array.indexOf(100)] = 10;
// console.log(array);

  var apple = array.filter(function(value){
    return value > 2;
})

// console.log(apple);

  var pickle = array.map(function(value){
    return value * 2;
  })

// console.log(pickle);

var arr = ["4","5","6","7"]

// console.log(array.reverse());
console.log(array.concat(arr));
console.log(array);


