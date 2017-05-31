// function fn(message){
//   console.log(message);
// }

// var obj = {
//   obfn: fn
// };

// var person = {
//   name: "max"
// }

// //obj.obfn.bind(person)();


// obj.obfn.call(person, 'hello');


var account = {
  cash: 12000,
  withdrawl: function(amount){
    this.cash -= amount;
    console.log(this.cash);
  }
}

// account.withdrawl(1000);

// Object.prototype.deposit = function(amount){
//   this.cash += amount;
//   console.log(this.cash);
// }

// account.deposit(5000);

Object.defineProperty(account, 'name', {
  get: function(){
    return this._name;
  },
  set: function(name){
    if(name == 'max'){
      this._name=name;
    }
  }
})

console.log(account.name);
account.name = "Id000-3";
console.log(account.name);
account.name = "max";
console.log(account.name);






