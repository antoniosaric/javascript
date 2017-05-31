
try{
  test();
}catch (error){
  console.log(error.message)
}finally{
  console.log("Finally");
}

function generator(input){
  var number = input;
  return function(){
return number * 2;
  };
}

var calc = generator(900);
var anothercalc= generator(1000);
console.log(calc);

console.log(calc());
console.log(anothercalc());

(function calc(){
  console.log("calc")
})();










