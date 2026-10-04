'use strict';

const iface = {
    m1: x => [x],
    m2: function (x, y) {
        return [x, y];
    },
    m3: function (x, y, z) {
        return [x, y, z];
    }
};

const result = [];
for(const key in iface){
    if (typeof iface[key] === "function") {
    result.push([key, iface[key].length]);
    }
}

console.log(JSON.stringify(result));