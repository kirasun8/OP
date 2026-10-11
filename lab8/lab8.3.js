'use strict';

const contract = (func, ...types) => (...args) => {
  for (let i = 0; i < args.length; i++) {
    const value = args[i];
    const expected = types[i];
    const typeName = expected.name.toLowerCase();

    if (typeof value !== typeName) {
      throw new TypeError(`Argument type ${typeName} expected`);
    }
  }
  const res = func(...args);
  const expected = types[types.length - 1];
  const typeName = expected.name.toLowerCase();

  if (typeof res !== typeName) {
    throw new TypeError(`Res type ${typeName} expected`);
  }
  return res;
};

const add = (a, b) => a + b;
const addNumbers = contract(add, Number, Number, Number);
const res = addNumbers(8, 10);
console.dir(res);

const concat = (str1, str2) => str1 + str2;
const concatStrings = contract(concat, String, String, String);
const res1 = concatStrings('Data ', 'saves');
console.dir(res1);