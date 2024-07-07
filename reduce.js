// reduce is a function where we take all values of array and come up with a single value out of it
// example
// 1. find the sum of array
// 2. find the largest of array

const arr = [5, 2, 3, 6, 1];

// to find sum
// old method

function findSum(arr) {
    let sum = 0;
    for(let i=0; i<arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
console.log(findSum(arr));
// with reduce
// reduce takes function with 2 params -
// accumulator -> that is the operation performed. ex: sum, max etc
// current -> current index of arr == arr[i]
// initially, what will be acc shall be passed as a param in reduce given below as 0
const output = arr.reduce(function (acc, curr) {
    acc += curr;
    return acc;
}, 0);
console.log(output);

// to find max value
function maxValue(arr) {
    let max = 0;
    for(let i=0; i<arr.length; i++) {
        if(arr[i] > max)
            max = arr[i];
    }
    return max;
}
console.log("Max : " + maxValue(arr));
// using reduce
const maxNumber = arr.reduce(function (max, curr) {
    if(curr > max) max = curr;
    return max;
}, -1);
console.log("Max : "+ maxNumber);