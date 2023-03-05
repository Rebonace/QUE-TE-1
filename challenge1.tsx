function hello(name: string): string {
  return "Hello " + name;
}

let firstName: string = "bob";
console.log(hello(firstName));
console.log(hello(firstName + " marley"));

// String with a capital "S" refers to the boxed version of string

function concat(a: string, b: string): string {
  return a + b;
}

const wcs: string = concat("Wild", concat("Code", "School"));
console.log(wcs);
