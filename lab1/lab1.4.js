const arr = [
    true, "cherry", 10, -45, "apricot", 2.7, false, "melon", "plum", 0, -90, "ok", "sun","grape", false, true, "apple", 77, 81, -15, "pear"
];
const types = {};

for (const element of arr) { 
    const type = typeof element;
    if (types[type] === undefined) {
        types[type] = 0;
    }
    types[type]++;
}

console.dir(types);