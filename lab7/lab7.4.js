'use strict';

const difference = (array1, array2) => {
  const res = [];
  for (const item of array1) {
    if (!array2.includes(item)) {
      res.push(item);
    }
  }
  return res;
};

const array1 = [8, 3, 18, 5, -1];
const array2 = [-1, 18];
const res = difference(array1, array2);
console.log(res);

const array3 = ['Barcelona', 'Kiev'];
const array4 = ['Kiev', 'Ankara', 'Madrid'];
const res1 = difference(array3, array4);
console.log(res1);