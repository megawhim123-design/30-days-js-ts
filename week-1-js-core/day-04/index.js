/**
 * Day 04 – JavaScript Core
 * Topic: Functions (Deep)
 * 
 * Notes:
 * What Are Functions?
A function is a reusable block of code designed to perform a particular task. Think of functions as "mini-programs" within your main program. Instead of writing the same code multiple times, you can create a function once and call it whenever needed.

Function Declaration
There are several ways to declare functions in JavaScript. The most common method is called function declaration:

*/

// ===== Main Practice =====

function greet() {
  console.log("Hello, world!");
}

// This creates a function named greet that, when called, will print "Hello, world!" to the console.

// Calling (Invoking) Functions
// Declaring a function only defines it - the code inside doesn't run until you call (or invoke) the function:

// Function declaration
function greet() {
  console.log("Hello, world!");
}

// Function call/invocation
greet(); // Output: Hello, world!

// You can call a function as many times as you need:

greet(); // Output: Hello, world!
greet(); // Output: Hello, world!
greet(); // Output: Hello, world!
 


// Function Parameters and Arguments
// Functions become more powerful when they can receive input. We can define parameters (variables that act as placeholders) in the function declaration:
function greetPerson(name) {
  console.log("Hello, " +  name+ "!");
}

// When calling the function, we provide arguments - the actual values for those parameters:

greetPerson("Alice"); // Output: Hello, Alice!
greetPerson("Bob"); // Output: Hello, Bob!

// You can define multiple parameters, separated by commas:

function greetPersonWithTime(name, timeOfDay) {
  console.log("Good" + timeOfDay + " ," + name + "!");

}

greetPersonWithTime("Alice", "morning"); // Output: Goodmorning, Alice!
greetPersonWithTime("Bob", "evening"); // Output: Goodevening, Bob!

// Return Values
// Functions can also give back (return) values using the return statement:

function sum(a, b) {
  return a + b;
}

let result = sum(5, 3);
console.log(result); // Output: 8

// You can also use the return value directly
console.log(sum(10, 20)); // Output: 30

/**
 * Important notes about return:
 * 
return immediately ends function execution
A function without a return statement will return undefined
You can return any type of value (number, string, boolean, array, object, etc.)
 


function getFullName(firstName, lastName) {
  return firstName + " " + lastName;
}

let fullName = getFullName("Jay", "Smith");
console.log(fullName); // Output: "Jay Smith"


// Function Expressions
// Another common way to create functions is with function expressions:

const square = function(number) {
  return number * number;
};

console.log(square(4)); // Output: 16

// The main difference between function declarations and expressions is that declarations are hoisted (available before their actual code position), while expressions are not.


//Arrow Functions (ES6)
// Modern JavaScript introduced arrow functions - a shorter syntax for writing functions:

// Regular function expression
const square1 = function(number) 
{
  return number * number;
};

// Same function as an arrow function
const square2 = (number) => {
  return number * number;
};

// For single expressions, you can make it even shorter
const square3 = number => number * number;

console.log(square3(5)); // Output: 25


// Examples:

// Calculator Function

function calculate(operation, a, b) {
  if (operation === "add") {
    return a + b;
  } else if (operation === "subtract") {
    return a - b;
  } else if (operation === "multiply") {
    return a * b;
  } else if (operation === "divide") {
    if (b=== 0) {
      return "Cannot divide by zero!";
    }
    return a / b;
  } else {
    return "Invalid operation";
  }

}   

console.log(calculate("add", 5, 3));       // Output: 8
console.log(calculate("subtract", 10, 4)); // Output: 6
console.log(calculate("multiply", 3, 7));  // Output: 21
console.log(calculate("divide", 9, 3));    // Output: 3
console.log(calculate("divide", 9, 0));    // Output: Cannot divide by zero!


// Example 2: Temperature Converter
// Create functions to convert between Celsius and Fahrenheit:

function celsiusToFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}

function fahrenheitToCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5/9;
}

console.log(celsiusToFahrenheit(25)); // Output: 77
console.log(fahrenheitToCelsius(77)); // Output: 25


// Example 3: Create User Profile
// Function to generate a user profile object:

 function createUserProfile(name, age, email, interests = []) {
  return {
    name: name,
    age: age,
    email: email,
    interests: interests,
    dateJoined: new Date().toISOString().split('T')[0],
    isActive: true,
    getDescription: function() {
      return `${this.name} is ${this.age} years old and enjoys ${this.interests.join(", ")}.`;
    }
  };
}

const user = createUserProfile("Sarah", 28, "sarah@example.com", ["coding", "hiking", "photography"]);
console.log(user);
console.log(user.getDescription()); 
// Output: Sarah is 28 years old and enjoys coding, hiking, photography.



// task 4: Utility functions (sum, average, max, min)

// Sum of numbers

function sum(numbers) {
  let total = 0;

  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  return total;
}

// Average of numbers
function average(numbers)
 {
  if (numbers.length === 0) return 0;
  return sum(numbers) / numbers.length;
 }

 // Maximum value
 function max(numbers) {
  let highest = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > highest) {
      highest = numbers[i];
    }
  }

  return highest;

 }

 // Minimum value
function min(numbers) {
  let lowest = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < lowest) {
      lowest = numbers[i];
    }
  }

  return lowest;

}

// Test data
const data = [10, 5, 20, 8, 3];

// Output
console.log("Sum:", sum (data));
console.log("Average:", average (data));
console.log("Max:", max (data));
console.log("Min:", min(data));







// ===== Summary =====
/**
 * JavaScript functions are essential building blocks that allow you to:
 * 
Group code that performs a specific task
Make your code reusable
Execute the same code multiple times
Keep your code organized and maintainable
Process input (parameters) and provide output (return values)
You've learned several ways to create functions, including function declarations, function expressions, and arrow functions. We've also explored how to work with parameters, return values, and practical applications.
 */
