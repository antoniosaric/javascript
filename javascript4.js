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

function person (args) {
  this.name = args.name,
  this.age = args.age,
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

var anotherPerson = new person("anna", 30);
console.log(anotherPerson);

person.prototype.stan = function(){
  console.log("blahhhh");
}

anotherPerson.stan();