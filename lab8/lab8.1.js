'use strict';

const iterate = (obj, callback) => {
  const keys = Object.keys(obj);
  for (const name of keys) {
    const val = obj[name];
    callback(name, val, obj);
  }
};

const obj = { a: 1, b: 2, c: 3 };
iterate(obj, (name, val) => {
  console.log({ name, val });
});