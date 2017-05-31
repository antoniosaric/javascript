// var person = {
//   name: "Max",
//   age: 26,
//   details: {
//     hobbies: ['sports', 'cookies'],
//     location: 'germany'
//   },
// greet: function() {
//   return "purple";
// }
// };

// // console.log(person);
// // console.log(person.name);
// // console.log(person.details.hobbies);
// // var answer = person.greet();
// // console.log(answer);

// // person.name = "bill";
// // console.log(person.name);

// var anotherPerson = Object.create(null);
// anotherPerson.name = "anna";
// anotherPerson.age = 34;
// console.log(anotherPerson);

function Person (name, age) {
  this.name = name,
  this.age = age,
  this.details = {
    hobbies: ['sports', 'cookies'],
    location: 'germany'
  },
  this.greet = function() {
    return "purple";
}
};

// console.log(person);
// console.log(person.name);
// console.log(person.details.hobbies);
// var answer = person.greet();
// console.log(answer);

// person.name = "bill";
// console.log(person.name);

var anna = new Person("anna", 30);
console.log(anna);

Person.prototype.yell = function(){
  console.log("blahhhh");
}

anna.yell();

console.log(anna instanceof Person);

function AnotherPerson(args){
  console.log(args);
  this.name = args.name,
  this.age = args.age
}

var max = new AnotherPerson({name: "max", age: 56});

console.log(max);




