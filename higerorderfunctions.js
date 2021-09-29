// Examples of Higher Order Functions
// functions that return another inner function

// Calculation examples:

const multiply = x=> (y)=> x*y
const r = multiply(10)
console.log(r(10))


const divide = function(x){

  return function(y){
    return x/y
  }


}

const r1= divide(10)
console.log(r1(1))



const subtract = function(x){
  return function(y){
    return x-y
  }
}

const r3 = subtract(10);
console.log(r3(5))



const add = function(x){

  return function(y){
    return x+y
  }
}

const r4 = add(10);
console.log(r4(10))