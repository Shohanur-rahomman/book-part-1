const numbers = [10, 20, 30, 40, 50,];
const newNumbers = numbers[3] = 100;
numbers.push(500)
numbers.shift()
console.log(newNumbers); 
console.log(numbers); 


const nums = [10, 20, 30, 40, 50,];
const numItem = nums.includes(50);
console.log(numItem);


// const nums = [10, 20, 30, 40, 50,];
// const numItem = nums.indexOf(40);
// console.log(numItem);