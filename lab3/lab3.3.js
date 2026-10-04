'use strict';

const ipToInt = (ip = '127.0.0.1') => {
  const octets = ip.split('.');
  const shiftAdd = (acc, octet) => (acc << 8) + parseInt(octet, 10);
  return octets.reduce(shiftAdd, 0);
};

console.log(ipToInt());
console.log(ipToInt('10.0.0.1'));
console.log(ipToInt('165.225.133.150'));