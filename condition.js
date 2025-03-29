const prices = 3000;
if (prices >= 6000) {
    const discount = prices / 100 * 15;
    const pay = prices - discount;
    console.log(pay);
} else if (prices >= 3000) {
    const discount = prices / 100 * 5;
    const pay = prices - discount;
    console.log(pay);
} else {
    console.log(prices);
}

const age = 60;
if (age <= 12) {
     console.log('free');
} else if (age > 60) {
    console.log('50% discount');
} else {
    console.log('full payment');
 }