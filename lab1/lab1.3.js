const arr = [
    true, "cherry", 10, -45, "apricot", 2.7, false, "melon", "plum", 0, -90, "ok", "sun","grape", false, true, "apple", 77, 81, -15, "pear"
];
const types = {
    number: 0,
    string: 0,
    boolean: 0
};
for (const element of arr) { 
    const type = typeof element;
    types[type]++;
}

console.dir(types);