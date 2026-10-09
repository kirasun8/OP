'use strict';

const removeElements = (array, ...items) => {
  for (const item of items) {
    const index = array.indexOf(item);
    if (index !== -1) array.splice(index, 1);
  }
};

const array = ['Kiev', 'Barcelona', 'Rome', 'Tokyo'];
removeElements(array, 'Rome', 'Berlin', 'Kiev');
console.log(array);