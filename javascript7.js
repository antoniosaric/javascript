// setTimeout(function(){
//   console.log("finished");
// }, 3000);

var interval = setInterval(function(){
  console.log("apple");
},1000);

setTimeout(function(){
  clearInterval(interval);
},3000);

var a = '12345';
console.log(parseInt(a));
//a.toString() changes to strings
//a.toFixed() no argument rounds to whole number. any number between () will give that many decimals
//a.trim takes out extra white spaces.


//Math.abs(number) = gives positive number
//Math.ceil(number)
//Math.floor(number)
//Math.sum(number)
//to make random number Math.floor(Math.random() * 100) + 1      

var today = new Date()

var string = 'abc';
var pattern = /ab/;
//console.log(pattern.exec(string)); gives ['ab']
//console.log(pattern.test(string)); returns true or false
//console.log(string.match(pattern)); gives ['ab']

