let arr1 = new Array(100);
arr1.fill(0, 0, 100);
console.log(arr1.length);

const range = (start, stop, step) =>
Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step);
let arr2 = range(1, 100, 1);
console.log(arr2);

let object = { someValue: "value", Value2: "value2" };
let objectArray = Object.keys(object);
console.log(objectArray);

let arrayObject = Object.assign({}, arr2);
console.log(arrayObject);

console.log(Array.isArray(arr2));

let arr3 = Array.from(arr2);
arr3[9] = -10;

let arr4 = arr2;
arr3[9] = -10;