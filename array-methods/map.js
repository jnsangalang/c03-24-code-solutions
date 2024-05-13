'use strict';
const prices = [42.42, 10, 28.2234, 3.2, 5, 12];
const adjustPrices = prices.map((num) => ({ price: num, salePrice: num / 2 }));
console.log(adjustPrices);
const adjustSymbolPrices = prices.map((num) => '$' + num.toFixed(2));
console.log(adjustSymbolPrices);
