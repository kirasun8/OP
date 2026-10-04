'use strict';

const sum = (...args) => {
  let res = 0;
  for (const i of args) {
    res += i;
  }
  return res;
};

console.log(sum(1,-8,-2,5,7));