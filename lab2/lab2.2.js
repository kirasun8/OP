'use strict';

const range = (startnum, endnum) => {
  let array = [];
  for (let num = startnum; num <= endnum; num++) {
    array.push(num);
  }
  return array;
};

console.log(range(15,30));

const rangeOdd = (startnum, endnum) => {
  let array = [];
  for (let num = startnum; num <= endnum; num++) {
    if (num % 2 !== 0) {
        array.push(num);
    }
  }
  return array;
};

console.log(rangeOdd(15,30));