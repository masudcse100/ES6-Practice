// arrow function old
// function doubleIt(num){
//   return num * 2;
// }
// const doubleIt = function(num){
//   return num * 3;
// }
// arrow function es6
const doubleIt = num=> num * 3;
const result = doubleIt(17);
console.log(result);
// ----------------------------------
const addsum = (x,y) => x+y;
const result2 = addsum(54,34);
console.log(result2);
// ----------------------------------
const give5 = () =>5;
const result3 = give5();
console.log(result3);
// ----------------------------------
const doMath = (x,y) => {
  const sum = x+y;
  const diff = x-y;
  const result = sum * diff;
  return result;
}
const result4 = doMath(7,5);
console.log(result4);
