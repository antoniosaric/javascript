
var variable = 'text';
console.log(typeof variable);

var variable2 = [1,2,3,4,5];

console.log(variable2[1]);

var var1 = {
  name: 'Max'
};
console.log(var1);

var var2;
var2 = 7;
console.log(var2);


function calc(){
  console.log("inside function");
}

var calc2 = function(numb1, numb2){
  console.log('inside another fucntion')
  var add = numb1 + numb2;
  return add
}
calc();
console.log(calc2(10,4));
