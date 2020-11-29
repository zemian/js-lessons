// String concatenate operator
let name = "World";
console.log("Hi " + name);
console.log("Hi " + name + '!');
console.log("Hi number " + 1);

// Basic numberic operations
console.log("Numberic operators");
let a = 9, b = 8;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);

// Use of parentheses to group and change the order of precedence
console.log("Group and Order of precedence:");
console.log("a + b = " + a + b);   // string concat => 98
console.log("a + b = " + (a + b)); // number add => 17
console.log(9 + 8 - 2 * 5 / 2);
console.log(9 + (8 - 2) * 5 / 2);

// Incrementor operators
console.log("Incrementors:");
let i = 0;
i = i + 1;
console.log("i=" + i);
i++;
console.log("i=" + i);
console.log(++i); // Pre inc
console.log(i++); // Post inc
console.log(--i);
console.log(i--);

// Multiple Value Incrementor
i = i + 5;
console.log("i = i + 5: " + i);
i += 5;
console.log("i += 5: " + i);
// Other supported types are: "-=", "*=", "/="
console.log("i -= 7: " + (i -= 7));
console.log("i *= 7: " + (i *= 5));
console.log("i /= 7: " + (i /= 2));

// Special Math operators
console.log("Remainders:");
console.log(a % 2); // Modulus or Remainder
console.log(b % 2); // Modulus or Remainder

// Special Numbers
console.log("Special Numbers:");
console.log(NaN);
console.log(Infinity);

// Data conversions:
console.log("Integer to Float");
let wholeInt = 99;
let decimalVal = wholeInt / 5; // Promote to float automatically
console.log(decimalVal);
console.log("String to number");
let str = "77";
let realNum = parseInt(str);
console.log(realNum);
console.log(realNum + 1);
console.log(str + 1);
