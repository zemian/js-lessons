// JS function is a reusable block of code
function greeting() {
    console.log("Hello");
    console.log("World!")
}
greeting();

// Function can have paramters and return value
function sum(a, b) {
    return a + b;
}
console.log(sum(1, 2));

// JS supports FAT Arrow function expression (anonymous function)
let greetingAgain = () => {
    console.log("Hi there");
}
greetingAgain();
