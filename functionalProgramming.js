const radius = [1,2,5,6];

const area = function (radius) {
    return Math.PI * radius * radius;
};

const circumference = function (radius) {
    return 2 * Math.PI * radius;
};

const diameter = function (radius) {
    return 2 * radius;
};

// our implementation of map function
const calculate = function (arr, logic) {
    const output = [];
    for (let i = 0; i < arr.length; i++) {
        output.push(logic(arr[i]));
    }
    return output;
};

// inbuilt javascript map function
console.log(radius.map(area));

console.log(calculate(radius, area));
// console.log(calculate(radius, circumference));
// console.log(calculate(radius, diameter));