// A JS object can hold properties data and/or functions
let point = {
    x: 500,
    y: 250
}; // note that object assignment is an expression and should ends with semi colon
console.log(point);

// Usage of "this" inside functions in a object.
let obj = {
    foo : "HI",
    testFatArrowAction: () => { // Note that fat arrow function does not have "this" binding
        console.log("test()...");
        console.log("this ", this);
        console.log("o ", obj);
        console.log("this.foo " + this.foo + " END");
        console.log("o.foo " + obj.foo + " END");
    },
    testAction: function () { // But normal function has "this"
        console.log("test2()...");
        console.log("this ", this);
        console.log("o ", obj);
        console.log("this.foo " + this.foo + " END");
        console.log("o.foo " + obj.foo + " END");
    }
};
obj.testFatArrowAction();
obj.testAction();
