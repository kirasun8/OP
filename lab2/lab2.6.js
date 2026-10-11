'use strict';

const phonebook = {
  Kira: '+380445554433',
  Alina: '+380804882961',
  Timur: '+380661874632',
};

const findPhoneByName = (name) => {
    return phonebook[name];
};

console.log(findPhoneByName("Kira"));
console.log(findPhoneByName("Timur"));
console.log(findPhoneByName("Alina"));