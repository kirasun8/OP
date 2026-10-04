'use strict';

const sum = (...args) => args.reduce((res, i) => res + i, 0);

console.log(sum(1,-8,-2,5,7));