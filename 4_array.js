var a = 20;
console.log(a);
function add(a, b) {
    var total = a + b;
    function thrice(x) {
        var three = x * x * x;
        return three;
    }
    var triple = thrice(5);
    console.log(triple);
    return total;
}
var result = add(10, 20);
console.log(result);