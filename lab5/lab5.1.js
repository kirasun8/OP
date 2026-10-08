'use strict';

const seq = (f) => (g) => {
  if (typeof g === 'number') return f(g);
  return seq((x) => f(g(x)));
};

console.log(
    seq(x => x + 3)
   (x => x * 2)
   (x => x / 4)
   (x => x - 10)(18));