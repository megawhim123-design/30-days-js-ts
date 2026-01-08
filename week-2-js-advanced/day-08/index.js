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
    const localVariables = "I'm only accessible inside this function";
    console.log(localVariable); // Output: I'm only accessible inside this function 

}

localScopeExample();

// This will throw an error
try {
    console.log(localVariable)
}catch (error) {
    console.log("Error: localVariable is not accessible outside the function");
  // Output: Error: localVariable is not accessible outside the function

}

// Variable Shadowing
// When a local variable has the same name as a global variable, the local variable "shadows" the global one within its scope:

const value = "global";

function shadowExample() {
    const value = "local";
    console.log(value); // Output: local
}

shadowExample();
console.log(value); // Output: global


