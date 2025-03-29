const num1 = '56.34';
const num2 = '47.25';

const number = parseFloat(num1)
const number2 = parseFloat(num2)
const result = number + number2;
// console.log(result);


const price = 15000;
if (price > 5000) {
    const discount = price  * 0.1;
    // console.log(price - discount);

} else {
    console.log(price); 
}


const appelPrice = 160 ;
if (appelPrice > 150) {
    const discountPrice = appelPrice / 100 * 10;
    const pay = appelPrice - discountPrice;
    // console.log(pay);
} else {
    console.log(appelPrice);
}

const mangoPrice = 5000;
if (mangoPrice >= 5000) {
    const discountPrice = mangoPrice / 100 * 20;
    const pay = mangoPrice - discountPrice;
    // console.log(pay);
} else if (mangoPrice >= 2500) {
    const discountPrice = mangoPrice / 100 * 10;
    const pay = mangoPrice - discountPrice;
    console.log(pay);
} else {
    console.log(mangoPrice);
}