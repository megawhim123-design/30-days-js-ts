/** Day 5 – Arrays & Array Methods
 * Topic: Arrays & Array Methods
 * 
 * Notes:

 JavaScript Arrays Basics
Introduction
Arrays are one of the most fundamental data structures in JavaScript. 
They allow you to store multiple values in a single variable, which makes organizing and managing related data much easier. 
Whether you're building a simple to-do list or a complex web application, understanding arrays is essential for effective JavaScript programming.

In this lesson, we'll explore the basics of JavaScript arrays, including how to create them, access their elements, modify them, and perform common operations.

 */

//  What is an Array?
// An array in JavaScript is an ordered collection of values. These values can be of any type, including numbers, strings, objects, or even other arrays. Think of an array as a list of items stored in a specific order.

// Creating Arrays:
// There are several ways to create arrays in JavaScript:

//Array Literal Notation
// The most common way to create an array is using array literal notation with square brackets []:

//Empty Array
// const emptyArray = [];

// Array with numbers
const numbers = [1, 2, 3, 4, 5];

// Array with strings
const cars = ["toyota", "honda", "bmw", "audi"];

// Mixed array with different data types
const mixed = [42, "hello", true, null, { name: "John" }];

// Nested arrays
const matrix = [[1, 2, 3, ], [4, 5, 6],[7, 8, 9]];

// Array Constructor
// You can also create arrays using the Array() constructor:

// Empty array
const emptyArray = new Array();

// Array with a predefined length
const arrayWithLength = new Array(5); // Creates an array with 5 empty slots

// Array with specific elements
// const fruits = newArray("apple", "banana", "orange");


// =========== Main Practise =========== 

// Array Elements
// Array elements are accessed using their index, which starts at 0 for the first element:

const colors = ['red', 'green' , 'blue', 'yellow'];
console.log(colors[0]); // Output: red
console.log(colors[1]); // Output: green
console.log(colors[2]); // Output: blue
console.log(colors[3]); // Output: yellow

// Accessing an element that doesn't exist will return undefined
console.log(colors[4]); // Output: undefined


//Negative Indexes
// Unlike some programming languages, JavaScript doesn't natively support negative indexes:

const toys = ['ball', 'car', 'doll'];
console.log(toys[-1]); // Output: undefined
console.log(toys[-2]); // Output: undefined

console.log(toys[toys.length - 1]); // Output: "doll" (last element)


// Array Properties and Basic Methods
// Length Property

const games = ['cricket', 'football', 'hockey'];
console.log(games.length); // Output: 3

// Interesting behavior: setting length can truncate the array
games.length = 2;
console.log(games); // Output: ['cricket', 'football']

// Adding Elements to an Array
// There are several ways to add elements to an array:

const books = [' The Great Gatsby', 'To Kill a Mockingbird', 'Pride and Prejudice'];

// Add to the end with push (returns new length)
const newLength = books.push(' The Catcher in the Rye', 'The Lord of the Rings');
console.log(books); // Output: [' The Great Gatsby', 'To Kill a Mockingbird', 'Pride and Prejudice', ' The Catcher in the Rye', 'The Lord of the Rings']
console.log(newLength); // Output: 5

// Add to the beginning with unshift (returns new length)
const newLength2 = books.unshift('The Hobbit');
console.log(books); // Output: ['The Hobbit', ' The Great Gatsby', 'To Kill a Mockingbird', 'Pride and Prejudice', ' The Catcher in the Rye', 'The Lord of the Rings']
console.log(newLength2); // Output: 6


// Removing Elements from an Array
// Similarly, there are methods for removing elements:

const letters = ['a', 'b', 'c', 'd', 'e'];

// Remove from the end with pop (returns the removed element)// Remove from the end with pop (returns removed element)
const lastElement = letters.pop();
console.log(letters); // Output: ['a', 'b', 'c', 'd']
console.log(lastElement); // Output: 'e'


// Remove from the beginning with shift (returns removed element)
const firstElement = letters.shift();
console.log(letters); // Output: ['b', 'c', 'd', ]
console.log (firstElement); // Output 'a'

// Modifying Arrays
// Arrays in JavaScript are mutable, meaning you can change their content after creation:

const pet = ['dog', 'cat', 'fish'];

// Change an element by index
pet[1] = 'hamster';
console.log(pets); // Output: ['dog', 'hamster', 'fish']

// Add a new element by index (can create "holes" if index exceeds length)
pet[3] = 'parrot';
console.log(pets); // Output: ['dog', 'hamster', 'parrot']


// Common Array Operations
// Finding Elements
//To check if an array contains a specific value:

const phones = [ 'iphone', 'samsung', 'nokia', 'htc'];

// Using indexOf (returns index or -1 if not found)
const samsungIndex = phonesindexOf('samsung');
console.log(samsungIndex); // Output: 1

const vivoIndex = phones.indexOf('vivo');
console.log(vivoIndex); // Output: -1

// Using includes (returns true or false)
console.log(phones.includes('tecno')); // output: false
console.log(phones.includes('itel')); // output: true


// Joining Arrays
// You can combine arrays using the concat() method:

const arr1 = [1, 2, 3, ];
const arr2 = [4, 5, 6];
const combined = arr1.concat(arr2);

console.log(combined); // Output: [1, 2, 3, 4, 5, 6]
console.log(arr1); // Output: [1, 2, 3] (original arrays are not modified)


// Slicing Arrays
// Extract a portion of an array without modifying the original:

const teas = ['black', 'green', 'herbal', 'oolong', 'chai'];

// slice(start, end) - end is exclusive
const slice1 = teas.slice(1,4);
console.log(slice1); // Output: ['green', 'herbal', 'oolong']

// Omitting end will go to the end of the array
const slice2 = teas.slice.slice(2);
console.log(slice2); // Output: ['herbal', 'oolong', 'chai']

// Negative indexes count from the end
const slice3 = teas.slice(-2);
console.log(slice3); // Output: ['oolong', 'chai']

