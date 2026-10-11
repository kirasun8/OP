'use strict';

const store = (x) => () => x;

const read = store(18);
const data = read();
console.log(data);