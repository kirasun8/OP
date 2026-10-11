'use strict';

const fn = () => {
  const obj1 = { name: "Kira" };
  let obj2 = { name: "Alina" };

  obj1.name = "Kira A";
  obj2.name = "Alina A";

  //obj1 = { name:  "Kira A D"};//Помилка через const, яку не можна змінювати
  obj2 = { name:  "Alina A D" };

  console.dir(obj1);
  console.dir(obj2);
};

fn();

const createUser = (name, city) => { 
    return { name: name, city: city };
};

console.dir(createUser("Alina", "Kyiv"));