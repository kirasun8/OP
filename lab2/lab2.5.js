'use strict';

const phonebook = [
  { name: 'Kira', phone: '+380445554433' },
  { name: 'Alina', phone: '+380804882961' },
  { name: 'Timur', phone: '+380661874632' },
];

const findPhoneByName = (name) => {
  for (const person of phonebook) {
    if (person.name === name) {
        return person.phone;
    }
  }
};

console.log(findPhoneByName("Kira"));
console.log(findPhoneByName("Timur"));
console.log(findPhoneByName("Alina"));