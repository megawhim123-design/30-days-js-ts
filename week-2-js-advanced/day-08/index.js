// Day-08 
console.log("day-08 ready!");


/**
 * Topic: Scope and Closure
 * 
 *Notes: 

JavaScript Scope
Introduction
Scope in JavaScript defines the accessibility and visibility of variables, functions, and objects during different parts of your code's execution. Understanding scope is fundamental to writing efficient JavaScript code and avoiding unexpected bugs.

Think of scope like different rooms in a house - variables in one room might not be accessible from another room. This concept helps you organize your code and prevents variables from conflicting with each other.

Types of Scope in JavaScript
JavaScript has several types of scope:

Global Scope
Function Scope (Local Scope)
Block Scope (introduced in ES6)
Lexical Scope

Let's dive into each of these concepts.
 */

// ======= Main Practise =======

// Global Scope
// Variables declared outside any function or block have global scope. This means they can be accessed from anywhere in your JavaScript code, including within functions and blocks.

// Global variable

const globalVariable = "I'm accessible everywhere";

function exampleFunction() {
    console.log(globalVariable); // This will work
}

exampleFunction(); // Output: I'm accessible everywhere
console.log(globalVariable); // Output: I'm accessible everywhere

/**
 * ⚠️ Warning about Global Variables
While global variables are convenient, they can lead to:

Naming conflicts
Difficulty tracking where variables are modified
Security vulnerabilities
Memory inefficiency
It's generally considered good practice to minimize the use of global variables.
 */

// Function Scope (Local Scope)

// Variables declared inside a function are only accessible within that function. 
// These are called local variables.

  
function localScopeExample() {
  // Local variable
  const localVariable = "I'm only accessible inside this function";
  console.log(localVariable); // Output: I'm only accessible inside this function
}

localScopeExample();

// This will throw an error
try {
  console.log(localVariable);
} catch (error) {
  console.log("Error: localVariable is not accessible outside the function");
  // Output: Error: localVariable is not accessible outside the function
}


// Variable Shadowing
// When a local variable has the same name as a global variable, 
// the local variable "shadows" the global one within its scope:


const value = "global";

function shadowExample() {
  const value = "local";
  console.log(value); // Output: local
}

shadowExample();
console.log(value); // Output: global


//Block Scope
// Introduced with ES6, block scope restricts variable access to the block (code between curly braces) 
// in which they're defined. Variables declared with let and const have block scope, while variables declared with var do not.

 
// Block scoped variable
{
  // Block scoped variable
  let blockScoped = "I'm only accessible inside this block";
  const alsoBlockScoped = "I'm also block scoped";
  var notBlockScoped = "I'm NOT block scoped";
  
  console.log(blockScoped); // Output: I'm only accessible inside this block
}

// This will throw an error
try {
  console.log(blockScoped);
} catch (error) {
  console.log("Error: blockScoped is not accessible outside the block");
  // Output: Error: blockScoped is not accessible outside the block
}

try {
  console.log(alsoBlockScoped);
} catch (error) {
  console.log("Error: alsoBlockScoped is not accessible outside the block");
  // Output: Error: alsoBlockScoped is not accessible outside the block
}

// This works! var is not block scoped
console.log(notBlockScoped); // Output: I'm NOT block scoped

 
// Block Scope in Loops and Conditionals
// Block scope applies to loops and conditionals as well:

// let in a for loop creates a new scope for each iteration

for (let i = 0; i < 3; i++) {
    console.log(i); // Output: 0, 1, 2, (on different lines)
}

// This will throw erroe

try {
   console.log(i) 
} catch (error) {
    console.log("Error: i is not accessible outside the loop");
    // Output: Error: i is not accessible outside the loop
}

// if statements also have block scope
if (true) {
    const ifVariable = "block scoped";
    console.log(ifVariable); // Output: block scoped
}

try {
    console.log(ifVariable);
} catch (error) {
    console.log("Error: ifVariable is not accessible outside the if block");
    // Output: Error: ifVariable is not accessible outside the if block}
}   


// Lexical Scope (Closure)

// Lexical scope means that inner functions can access variables from their 
// outer (parent) functions, even after the outer function has completed execution.

function outerFunction() {
    const outerVariable = "I'm form the outer function";

    function innerFunction() {
        console.log(outerVariable); // Output: Can
    }
    return innerFunction;
}

const myInnerFunction = outerFunction();
myInnerFunction(); // Output: I'm from the outer function

// This creates what's known as a "closure" - the inner function "closes over" 
// the variables of the outer function, preserving them.


/**
 * The Scope Chain
JavaScript looks for variables in a nested hierarchy, known as the scope chain:

First, it looks in the current scope
If not found, it looks in the outer enclosing scope
This continues until it reaches the global scope
If still not found, it either returns undefined or throws a ReferenceError

 */

const global = "I'm global";

function outer() {
  const outerVar = "I'm from outer";
  
  function inner() {
    const innerVar = "I'm from inner";
    console.log(innerVar); // Looks in inner scope first
    console.log(outerVar); // Not found in inner, so looks in outer
    console.log(global);   // Not found in inner or outer, so looks in global
  }
  
  inner();
}

outer();
// Output:
// I'm from inner
// I'm from outer
// I'm global


// Best Practices for Managing Scope
// Minimize global variables: Avoid declaring variables in the global scope.
// Use const and let instead of var: They provide better scoping rules.
// Keep functions small: Smaller functions are easier to reason about in terms of scope.
// Use the module pattern: Group related code and expose only what's necessary.
// Be careful with closures: They can cause memory leaks if not managed properly.

/**
 * ========= Summary =========
 * 
JavaScript scope defines where variables are accessible from in your code:

Global scope: Variables accessible everywhere
Function scope: Variables accessible only within the function
Block scope: Variables (declared with let and const) accessible only within the block
Lexical scope: Inner functions have access to variables from their outer functions
Understanding scope is crucial for writing maintainable code, preventing bugs, and implementing advanced patterns like closures and m
odules
 */

// Task: Counter function using closure

// Steps to follow:
// 1. Create a function
// 2. Inside it, define a variable(count)
// 3. Return another function
// 4. That inner function uses count.*/

 
function createCounter() {
    // privateCount is a private variable
    let privateCount = 0;
    
    return{
     increment: function() {
        privateCount++;
        return privateCount;
     },
     decrement: function() {
        privateCount--;
     },
     getValue: function() {
        return privateCount;
     }
        
    };
}

const counter = createCounter();
console.log(counter.getValue()); // Output: 0
console.log(counter.increment()); // Output: 1
console.log(counter.increment()); // Output: 2
console.log(counter.decrement()); // Output: 1

// This won't work - privateCount is not directly accessible

try {
    console.log(counter.privateCount);
} catch (error) {
    console.log("Cannot access privateCounter directly");
    // Output: Cannot access privateCount directly (though it will actually be undefined, not an error)

}


