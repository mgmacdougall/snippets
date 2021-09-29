function a(){
  let test = "test";
  return function b(){
    let datt = 'data';
    return function c(){
      let son = 'son'

      return `${test} ${datt} ${son}`
    }
  }


}

console.log(a()()())  //  prints test data son



const test = x =>{
  let te = 1;
  return v = t => 8+te+x
}

const gg = test(10)
const h = v(10)
console.log(h)  // this prints 19 b/c x = 10, te = 1, v = 10
