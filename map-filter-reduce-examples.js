// more example
const users = [
    { firstname: "Alice", lastname: "Smith", age: 26 },
    { firstname: "Bob", lastname: "Johnson", age: 75 },
    { firstname: "Carol", lastname: "Brown", age: 50 },
    { firstname: "David", lastname: "Lee", age: 26 }
];

// what to use when we want to print full name ? ans = map

const fullNames = users.map(x => x.firstname + " " + x.lastname);
console.log(fullNames);


// find out how many users have particular age ? reduce
// {26: 2, 75: 1, 50: 1}
const ages = users.reduce(function(acc, curr) {
    // if age exists then increase age
    if(acc[curr.age]) {
        acc[curr.age] += 1;
    }
    // if not exists assign 1
    else{
        acc[curr.age] = 1;
    }
    return acc;
}, {})
console.log(ages);

// list firstName of people of age less than 30
// console.log(users.filter(x => x.age < 30)); // return objects
const peopleLessThan30 = users.filter(x => x.age < 30)
    .map(x => x.firstname); // returns only first name

console.log(peopleLessThan30);

// using reduce
const ageLessThan30 = users.reduce(function (acc,curr){
    if(curr.age < 30) {
        acc.push(curr.firstname);
    }
    return acc;
},[]);

console.log(ageLessThan30);