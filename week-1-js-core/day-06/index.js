/**
 * Day 6 – Objects & Destructuring
 * 
 * Topic: Object creation
 * Dot vs bracket notation
 * Destructuring & spread
 * 
 * Notes:
 * JavaScript Objects Basics
 Introduction

 Objects are one of the core data structures in JavaScript. Unlike primitive data types (numbers, strings, booleans), objects allow you to store collections of data with key-value pairs. Think of objects as containers that can hold multiple related values, similar to how a physical container might hold different items.

 In this tutorial, you'll learn:

 What JavaScript objects are and why they're important
 Different ways to create objects
 How to access, modify, and delete object properties
 Common operations and methods for working with objects
 What is a JavaScript Object?
 In JavaScript, an object is an unordered collection of key-value pairs. Each key (also called a property) has an associated value, which can be any JavaScript data type including other objects, arrays, or functions.

 Objects are represented using curly braces {}, with properties and their values written as key: value pairs separated by commas
 */

 // Creating Objects
// Object Literal Notation
// The most common way to create an object is using the object literal notation:

const person = {
    firstNane: "John",
    lastName: "Doe",
    age: 30,
    isEmployed: true,

    };

    console.log(person);

// Output: { firstName: 'John', lastName: 'Doe', age: 30, isEmployed: true }
    
// Using the Object Constructor
// You can also create objects using the Object() constructor:


