'use strict';

const removeElement = (array, item) => {
  const index = array.indexOf(item);
  if (index !== -1) array.splice(index, 1);
};

const array = ['Kiev', 'Barcelona', 'Rome', 'Tokyo'];
removeElement(array, 'Rome');
removeElement(array, 'Berlin');
console.log(array);