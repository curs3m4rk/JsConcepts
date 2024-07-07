// filter is used to filter the array

// example
// 1. select numbers greater than 4
// 2. select numbers divisible by 3
// 3. select even numbers etc.

const arr = [5, 2, 3, 6, 1];

// filter odd values
function isOdd(x) {
    return x % 2;
}

const output = arr.filter(isOdd);
console.log(output);

// filter values greater than 4
function greaterThan4(x) {
    return x > 4;
}
console.log(arr.filter(greaterThan4));
// or
console.log(arr.filter(function greaterThan4(x) {
    return x > 4;
}));
// or
console.log(arr.filter(x => x > 4));