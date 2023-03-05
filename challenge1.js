function hello(name) {
    return "Hello " + name;
}
var firstName = "bob";
console.log(hello(firstName));
console.log(hello(firstName + " marley"));
// String with a capital "S" refers to the boxed version of string
function concat(a, b) {
    return a + b;
}
var wcs = concat("Wild", concat("Code", "School"));
console.log(wcs);
