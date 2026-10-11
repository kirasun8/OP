'use strict';

const compose = (...fns) => {
  const handlers = [];
  const composed = (x) => {
    if (fns.length === 0) return x;
    const last = fns.length - 1;
    let res = x;
    try {
      for (let i = last; i >= 0; i--) {
        res = fns[i](res);
      }
      return res;
    } catch (error) {
      for (const handler of handlers) {
        handler(error);
      }
      return undefined;
    }
  };
  composed.on = (name, handler) => {
    if (name === 'error') handlers.push(handler);
  };
  return composed;
};

const inc = x => ++x;
const twice = x => x * 2;
const cube = x => x ** 3;

const f = compose(cube, twice, inc);
console.log(f(5));

const error = x => {
    throw new Error("Помилка");
};
const f1 = compose(error);
f1.on("error", e => console.log(e.message));
console.log(f1(5));