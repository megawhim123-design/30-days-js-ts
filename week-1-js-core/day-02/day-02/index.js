/**  
 * Day 02 - JavaScript Data Types
 * 
 * Topics Covered: Data Types and Operators 
 * 
 * Notes:
 * In JavaScript, there are several fundamental data types that are used to represent different kinds of values. 
 * Understanding these data types is crucial for effective programming in JavaScript.
 * JavaScript has two main categories of data types:

Primitive Data Types - simple, immutable data values
Reference Data Types - more complex data structures

 * The primary data types in JavaScript include:
 * 
 * 1. Number
 * 2. String
 * 3. Boolean
 * 4. Null
 * 5. Undefined 
 */

// Main Practise:

// I. Number : represents both integer and floating-point numbers.
// Integer
let age = 20;
let negativeNumber = -35;

// Floating-point numbers
let price = 15.8;
let pi = 3.14;

// Speciall numeric values
let infinity = Infinity;
let negativeInfinity = -Infinity;
let notANumber = NaN; // Result of invalid mathematical operation

console.log(age); // Output: 20
console.log(price); // Output: 15.8
console.log(1 / 0); // Output: Infinity
console.log("hello" / 2); // Output: NaN

// JavaScript numbers are stored in 64-bit format (IEEE-754 standard), which can sometimes lead to precision issues with decimal calculations:
console.log(0.1 + 0.2); // Output: 0.30000000000000004
console.log(0.1 + 0.2 === 0.3); // Output: false

// 2. Strings : represents sequences of characters enclosed in single quotes (' '), double quotes (" "), or backticks (` `).

let firstName = "Alice";
let lastName = 'Smith';
let greetings = `Hello, ${firstName}!`; // Template literal

console.log(firstName); // Output: Alice
console.log(greetings); // Output: Hello, Alice!

// Strings have properties and methods
console.log(firstName.length); // Output: 5
console.log(firstName.toUpperCase()); // Output: ALICE


// 3. Boolean : represents conditional/logical values, either true or false.
let isLoogedIn = true;
let hasPermission = false;

console.log(isLoggedIn); // Output: true
console.log(hasPermission); // Output: false

// Comparison operators return boolean values
console.log(5 > 3); // Output: true
console;e.log(5=== '5'); // Output: false

// 4. Undefined: represents a variable that has been declared but not assigned a value.
let username;
console.log(username); // Output: undefined

function test() {
    // No explicit return statement
}
console.log(test()); // Output: undefined


 // 5. Null: represents the intentional absence of any object value.
 let user = null; // user doesn't exist yet
 console.log(user); // Output: null

 // Note: typeof null returns "object", which is a known bug in JavaScript
 console.log(typeof null); // Output: "object"


 // 6. Symbol ES6): is a relatively new primitive type introduced in ES6. Symbols create unique identifiers.

 const id1 = Symbol('id');
 const id2 = Symbol('id');

 console.log(id1 === id2); // Output: false
 console.log(id1); // Output: Symbol(id)

 // Common use case: unique property keys
 const HIDDEN_PROPERTY = Symbol('hidden');
 const obj = {
    visible: 'This can be enumarated',
    [HIDDEN_PROPERTY]: 'This is harder to access'
 };
 
 console.log(obj.visible); // Output: This can be enumarated
console.log(obj.HIDDEN_PROPERTY); // Output: This is harder to access

// 7. BigInt (ES2020): represents integers with arbitrary precision, allowing you to work with numbers larger than the safe integer limit for the Number type.
 const hugeNumber = 9007199254740991n; // The 'n' at the end makes it BigInt
 const anotherHugeNumber = BigInt('9007199254740991');

 console.log(hugeNumber); // Output: 9007199254740991n
 console.log(hugeNumber + 1n); // Output: 9007199254740992n

    // Note: BigInt and Number types cannot be mixed in operations
    console.log(hugeNumber + 1); // TypeError: Cannot mix BigInt and other types


// Reference Data Types: more complex data structures that can hold multiple values or collections of values. The main reference data types in JavaScript are Objects, Arrays, Functions and Date.

// I. Object: is a collection of key-value pairs, where keys are strings (or Symbols) and values can be of any data type.
let person = {
    firstName:
     'Jane',
     lastName:
      'Smith',
      age: 28,
      greet: function() {
        return "Hello, my name is ${this.firstName}!";
      }
};
console.log(person.firstName); // Output: Jane
console.log(person.lastName); // Output: Smith
console.log(person.greet()); // Output: Hello, my name is Jane!

// Objects can be nested
let company = {
    name: "Tech Corp",
    employees: [
        {name: 'Amanda',  role: 'Developer' },
        {name: 'Smart', role: 'Designer' },
    ],
    address: {
        street: '123 Main St',
        city: ' Tech City',
    }
};

console.log(company.employees[0].name); // Output: Amanda
console.log(company.address.city); // Output: Tech City

// 2. Array: Arrays are special types of objects used to store ordered collections of data.
let colors = ['red', 'green', 'blue'];
let mixed = [1, 'hello', true, {name: 'Amanda'}];

console.log(colors.length); // Output: 3
console.log(colors[2]); // Output: blue

// Arrays have various methods for manipulation
colors.push('orange'); // Add to the end
console.log(colors); // Output: ['red', 'green', 'blue', 'orange']

colors.pop(); // Remove from the end
console.log(colors); // Output: ['red', 'green', 'blue']

let sliced = colors.sliced(1, 2); // Get a portion of the array
console.log(sliced); // Output: ['green']

let filtered = [1, 2, 3, 4, 5].filter(num => num > 2); // Filter even numbers
console.log(filtered); // Output: [3, 4, 5]


// 3. Functions: Functions are objects that can be called to perform actions.
// Function declaration
function add(a, b) {
    return a + b;
};
console.log(add(5, 3)); // Output: 

// Function expression
const multiply = function(a, b) {
    return a * b;
};

console.log(multiply(5, 3)); // Output: 15

// Arrow function (ES6)
const divide = (a, b) => a / b;
console.log(divide(6, 2)); // Output: 3

// functions are objects
console.log(typeof add); // Output: "function"
console.log(add instanceof object); // Output: true


// 4. Date: The Date object is used to work with dates and times in JavaScript.

const now = new Date();
console.log(now); // Output: current date and time

const specificDate = new Date('2023-01-15T12:00:00Z');
console.log(specificDate); // Output: Sun Jan 15 2023 12:00:00 GMT+0000 (Coordinated Universal Time)

console.log(specificDate.getFullYear()); // Output: 2023
console.log(specificDate.getMonth()); // Output: 0 (January, months are zero-indexed)
console.log(specificDate.getDate()); // Output: 15


// Type Checking
// Using typeof operator: The typeof operator returns a string indicating the type of the operand.
console.log(typeof 42); // Output: "number"
console.log(typeof 'hello'); // Output: "string"
console.log(typeof true); // Output: "boolean"
console.log(typeof undefined); // Output: "undefined"
console.log(typeof null); // Output: "object" (this is a known quirk in JavaScript)
console.log(typeof {name: 'Alice'}); // Output: "object"
console.log(typeof [1, 2, 3]); // Output: "object"
console.log(typeof function() {}); // Output: "function"
console.log(typeof Symbol('id')); // Output: "symbol"
console.log(typeof 9007199254740991n); // Output: "bigint"
console.log(typeof {}); // Output: "object"
console.log(typeof []); // Output: "object"


// Using instanceof operator: The instanceof operator tests whether an object is an instance of a specific constructor or class.
const arr = [1, 2, 3, 4];
const func = function() {};

console.log(arr instanceof Array); // Output: true
console.log(func instanceof Function); // Output: true
 
// Type Conversion: JavaScript provides several ways to convert between different data types, either implicitly or explicitly. Which is known as type coercion.
// String Conversion
let value = 42;
let strValue = String(value); // Explicit conversion
strValue = value + ''; // Implicit conversion

console.log(strValue); // Output: "42"
console.log(typeof strValue); // Output: "string"

console.log(String(true)); // Output: "true"
console.log(String(null)); // Output: "null"
console.log(String(undefined)); // Output: "undefined"


// Numeric Conversion
// To Number conversion can be done using the Number() function or the unary plus (+) operator.
let str = '123';
let num = Number(str); // Explicit conversion
num = +str; // shorter way to convert to number

console.log(num); // Output: 123
console.log(typeof num); // Output: "number"

console.log(Number('42px')); // Output: NaN
console.log(Number(true)); // Output: 1
console.log(Number(false)); // Output: 0
console.log(Number(null)); // Output: 0
console.log(Number(undefined)); // Output: NaN


// Boolean Conversion
// To Boolean conversion can be done using the Boolean() function or double negation (!!).
let val = 1;
let boolval = Boolean(val); // Explicit conversion
boolval = !!val; // Shoter way to convert to boolean

console.log(boolval); // Output: true
console.log(typeof boolval); // Output: "boolean"

// Falsy values: 0, "", null, undefined, NaN, false
console.log(Boolean(0)); // Output: false
console.log(Boolean("")); // Output: false
console.log(Boolean(null)); // Output: false
console.log(Boolean(undefined)); // Output: false
console.log(Boolean(NaN)); // Output: false

// Truthy values: All values that are not falsy
console.log(Boolean(42)); // Output: true
console.log(Boolean("hello")); // Output: true
console.log(Boolean([])); // Output: true
console.log(Boolean({})); // Output: true


// OperATORS: Operators are special symbols or keywords that perform operations on one or 
/* more operands (values or variables) and return a result. JavaScript supports various types of operators,
including:
Arithmetic Operators
Assignment Operators
Comparison Operators
Logical Operators
String Operators
Ternary (Conditional) Operator


Arithmetic Operators
Arithmetic operators perform mathematical operations on numeric values.

Operator	      Description	              Example
+	              Addition	                  5 + 2 = 7
-	              Subtraction	              5 - 2 = 3
*	              Multiplication	          5 * 2 = 10
/	              Division	                  5 / 2 = 2.5
%	              Modulus (Remainder)	      5 % 2 = 1
**	              Exponentiation	          5 ** 2 = 25
++	              Increment	                  let a = 5; a++; // a = 6
--	              Decrement	                  let a = 5; a--; // a = 4  */


// Example: Comparison Operators: Comparison operators compare two values and return a boolean result.
// Equal to (==) - Compares values, not types
console.log(5 ==5); // Output: true
console.log(5 == "5"); // Output: true

// Strict equal to (===) - Compares both values and types
console.log(5 === 5); // Output: true
console.log(5 === "5"); // Output: false

// Not equal to (!=)
console.log(5 != 3); // Output: true
console.log(5 != "5"); // Output: false ( values are equal)

// Strict not equal to (!==)
console.log(5 !== 8); // Output: true
console.log(5 !== "5"); // Output: true (types are different)

// Greater than (>)
console.log(7 > 3); // Output: true
console.log(3 > 5); // Output: false

// Less than (<)
console.log(10 < 5); // Output: false
console.log(2 < 8); // Output: true

// Greater than or equal to (>=)
console.log(6 >= 6); // Output: true
console.log(4 >= 7); // Output: false

// Less than or equal to (<=)
console.isLoggedIn(10 <= 5); // Output: false
console.log(3 <= 3); // Output: true


// Logical Operators
/** Logical operators are used to determine the logic between variables or values.

Operator	  Description	                                                Example
&&	AND       - Returns true if both statements are true	                (x > 5 && y < 10)
||	OR        - Returns true if one of the statements is true	            (x > 5 || y < 10)
!	NOT       - Reverses the result, returns false if the result is true	!(x > 5)  

*/

// Example: Logical Operators
