
var x = 10;

function b () {
    var a = 10;
}

console.log(window); // window is created at global level of browser when javascript program is run
console.log(window.x); // window.x will refer to the global context
console.log(x);
console.log(this.x); // this will refer to the element of current context