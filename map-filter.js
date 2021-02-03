// const numbers = [3, 5, 6, 2, 7]
// const output = []
// for (i = 0; i < numbers.length; i++) {
//           const element = numbers[i];
//           const result = element * element;
//           output.push(result);

// }
// console.log(output);

const number  = [5,2,6,4,3]

// function square (element){
//           return element * element;
// }
// number.map(function(element,index,array){
//          console.log(element,index,array);          
// })
const result  = number.map(x => x * x);
console.log(result);

const bigger =number.filter(x=> x<5);
console.log(bigger);