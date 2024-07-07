const arr = [5, 2, 3, 6, 1];

// Double - [10,4,6,12,2]
// Triple - [15,6,9,18,3]
// Binary - [ '101', '10', '11', '110', '1' ]

// map is used to transform an array
// for example transform above values of array and make them double
function double (x) {
    return x * 2;
}

// to triple
function triple(x) {
    return x * 3;
}

// transform to binary
function binary (x) {
    return x.toString(2);
}

// call map function
console.log(arr.map(double));
console.log(arr.map(triple));
console.log(arr.map(binary));

// this is also same as above
console.log(arr.map(function binary (x) {
    return x.toString(2);
}));

// this is also same
const output = arr.map(x => x.toString(2));
console.log(output);
