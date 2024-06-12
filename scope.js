var x = 10;

function a() {
    b();
    function b() {
        console.log(x);
    }
}

a();
console.log(x);
