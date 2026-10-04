'use strict';

const sum = (...args) => {
  if (args.length === 0) return 0;
  let res = 0;
  let i = 0;

  do {
    res += args[i];
    i++;
  } while ( i < args.length);
  return res;
};

console.log(sum(1,-8,-2,5,7));