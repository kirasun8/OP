'use strict';

const unique = (array) => {
  const res = [];
  for (const item of array) {
    if (!res.includes(item)) {
      res.push(item);
    }
  }
  return res;
};

const res = unique([8, 3, 5, 3, 8]);
console.log(res);

const res1 = unique(['down', 'bottom', 'down', 'left', 'left']);
console.log(res1);