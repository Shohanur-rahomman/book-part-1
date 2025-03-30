const numbers4 = [10, -5, 3, 12, -7, 8, 15, 2, 21, -1];

const positiveNumbers = numbers4.filter((num) => num > 0 && num % 2 !== 0);

const biggestNumber = Math.max(...positiveNumbers);

const totalNumbers = positiveNumbers.reduce((num, num2) => num + num2, 0);

const averageNumber = totalNumbers / positiveNumbers.length;

// console.log(`positive number :${positiveNumbers}`);
// console.log(`biggest number :${biggestNumber}`);
// console.log(`numbers of total :${totalNumbers}`);
// console.log(`average number :${averageNumber}`);



const numbers5 = [10, 3, 7, 18, 23, 15, 2, 11, 29, 20, 17];

const primeNumber = (num) => {
    if (num < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++){
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

const primeNumbers = numbers5.filter(primeNumber);

const sum = primeNumbers.reduce((num, num1) => num + num1, 0);
const totalAverage = sum / primeNumbers.length;

const maxNum = Math.max(...primeNumbers);

const minNumber = Math.min(...primeNumbers);

// console.log(`Total average number :  ${totalAverage}`);
// console.log(`prim number : ${primeNumbers}`);
// console.log(`prime number total : ${sum}`);
// console.log('max number',maxNum);
// console.log(`minimum number : ${minNumber}`);

