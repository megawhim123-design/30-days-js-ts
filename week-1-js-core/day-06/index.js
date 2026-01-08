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

let age = 1;
age++;

const person = {
  "first name": "John",
  "last name": "Doe",
  age: 30,
  isEmployed: true

};

    console.log(person);
// Output: { firstName: 'John', lastName: 'Doe', age: 30, isEmployed: true }
   

// Using the Object Constructor
// You can also create objects using the Object() constructor:

const car = new Object();
car.make = "Toyota";
car.model = "Corolla";
car.year = 2022;

console.log(car);

// Output: {make: "Toyota", model: "Corolla", year: 2022}

// Accessing Object Properties
// There are two main ways to access object properties:

// Dot Notation

console.log(person["firstName"]); // Output: "John"
console.log(person["last name"]); // Output: "Doe"

// Bracket notation is particularly useful when:

// The property name contains spaces or special characters
// The property name is stored in a variable
// You need to access properties dynamically


    // Bracket Notation
    
 console.log(person["first name"]); // Output: John
 const propertyName = "last name";
 console.log(person[propertyName]); // Output:  Doe 

 // Modifying Object Properties
//Objects are mutable, meaning you can change their properties after creation

// Modifying Object Properties
// Objects are mutable, meaning you can change their properties after creation:

// Modifying existing properties


person["last name"] = "Smith";

// Adding new properties
person.age = 31;
person.email = "johnsmith@example.com";
person["phone"] = "123-456-7890";

console.log(person);

/**  Output:
{
    "first name": "John",
    "last name": "Smith",
    age: 31,
    email: "johnsmith@example.com",
    phone: "123-456-7890"
}
*/

// Deleting Properties
// You can remove properties using the delete operator:

 delete person.email;
 console.log(person); // Output: {firstname: "John", "lastname: "Doe", age: 30} 
 
 // Check if a property exists

 console.log("email" in person); // Output: false
 console.log("firstName" in person); // Output: true

 // Objects with Methods
// Objects can also contain functions as properties, which are called methods:

const calculator = {
    num1: 0,
    num2: 0,
    sum: function() {
        return this.num1 + this.num2;

    },
    multiply: function() {
        return this.num1 * this.num2;
    }
};

calculator.num1 = 5;
calculator.num = 3;

console.log(calculator.sum()); // Output: 8
console.log(calculator.multiply()); // Output: 15

// A more concise way to define methods in object literals (ES6 syntax):

const calculator = {
    num1: 0,
    num2: 0,
    sum() {
        return this.num1 + this.num2;
    }
};


// Nested Objects
// Objects can contain other objects as properties:

const person = {
    name: {
        first: "Jane",
        last: "Mike"
    },
    address: {
        street: "123 Main St",
        city: "New York",
        state: "NY"
    }
};

// Accessing nested properties
console.log(person.name.first); // Output: "Jane"
console.log(person.address.city); // Output: "New York"


// Object Methods and Properties
// JavaScript provides several built-in methods and properties to work with objects:

// Object.keys()
// Returns an array of a given object's own property names:

const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30
};

const keys = Object.keys(person);
console.log(keys); // Output: ["firstName", "lastName", "age"]

// Object.values()
// Returns an array of a given object's own property values:

const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30
};

const values = Oblect.values(person);
console.log(values); // Output: ["John", "Doe", 30]


// Object.entries()
// Returns an array of a given object's own [key, value] pairs:

const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30
};

const entries = Object.entries(person);
console.log(entries); // Output: [['firstName", "John"], ["lastName", "Doe"]]


/**
 * JavaScript Object Destructuring
Object destructuring is one of JavaScript's most useful features, introduced in ES6 (ECMAScript 2015). It provides a concise and convenient way to extract values from objects and arrays, assigning them to variables in a single operation. This technique can significantly improve code readability and reduce the amount of boilerplate code you need to write.

What is Object Destructuring?
Object destructuring is a JavaScript expression that allows you to extract properties from objects and bind them to variables. Instead of accessing object properties one by one, you can extract multiple properties in a single statement.

 */

// Basic Syntax
// The basic syntax for object destructuring looks like this

const { property1, property2, ...} = objectNane;

// Example:
const person = {
    firstname: "John",
    lastName: "Doe",
    age: 30,
};


/**const firstName = person.firstName;
const lastName = person.lastName;
const age = person.age;

console.log(firstName, lastName, age); // Output: John, Doe, 30

// With destructuring
const {firstName, lastName, } = person;

console.log(firstName, lastName, age); // Output: John, Doe, 30


// As you can see, destructuring allows us to extract multiple properties at once, making our code cleaner and more concise.

/**
 * Assigning to New Variable Names
Sometimes, you might want to assign object properties to variables with different names. Object destructuring allows you to do this with the following syntax:

const { propertyName: variableName } = objectName;
 */

// Example:

const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
};

const { firstName: fName, lastName: lName, age: personAge } = person;

console.log(fName); // Output: John
console.log(lName); // Output: Doe
console.log(personAge); // Output: 30

//Default Values
// You can also assign default values during destructuring. If the property doesn't exist in the object, the default value will be used:
//const { propertyName = defaultValue } = objectName;

// Example:

const person = {
    firstName: "John",
    lastName: "Doe",
};

const { firstName, lsatName, age = 25, country = 'Unknown' } = person;

console.log(firstName); // Output: John
console.log(lsatName); // Output: Doe
console.log(age); // Output: 25
console.log(country); // Output: Unknown

// You can also combine new variable names with default values:
const person = {
    firstName: 'John',
    lastName: 'Doe'
};

const { firstName: fName = 'Jane', age: years = 25 } = person

console.log(fName); // Output: John (from the object)
console.log(years); // Output: 25 (default value used)



// Nested Object Destructuring
// Object destructuring works with nested objects as well. You can extract properties from nested objects using this syntax:

const { nestedObject: { property } } = objectName;

// Example:

const person = {
    name: 'john',
    age: 30,
    address: {
        street: '123 Main St'
        city: 'New York',
        country: 'USA'
    }
};

// Extract nested properties
const { address: { city, country } } = person;
console.log(city); // Output: New York
console.log(country); // Output: USA

// Extract nested properties and the object itself
const { name, address, address: { street } } = person

console.log(name); // Output: John
console.log(street); // Output: 123 Main St
console.log(address); console.log(address);  // Output: { street: '123 Main St', city: 'New York', country: 'USA' }

// Rest Operator in Object Destructuring
// The rest operator (...) can be used in object destructuring to collect remaining properties into a new object:

const person = {
    name: 'John',
    age: 30,
    city: 'New York',
    country: 'USA',
    occupation: 'Developer'
};

const { name, age, ...rest } = person;
console.log(name); // Output: John
console.log(age); // Output: 30
console.log(rest); // Output: { city: 'New York', country: 'USA', occupation: 'Developer' }


// Task:
/**Step 1: Define the User Profile Object
 * id
 * username
 * email
 * age
 * isActive
 * 
   

const userProfile = {
    id: 1,
    username: "prince_dev",
    email: "prince@example.com",
    age: 20,
    isActive: true,
};

// Store Multiple Users (User System)

const user[];

// Add a User
function adduser( username, email, age) {
    const newUser = {
        id: user.length + 1,
        username,
        email,
        age,
        isActive: true,
    };

    user.push(newUser);
    console.log("User added", newuser);
};

// Get All Users
function getUsers() {
    return usersSync;
}

//Update a User

function updateUser(id, updates) {
    const user = users.find((user) => user.id === id);

    if (!user) {
        console.log("User not found");
        return;
    }

    object.assign(user, update);
    console.log("User updated", user);

}

// Delete a User

function deleteUser(id) {
    const index = users.findindex((user) => user.id === id);
    if (index === -1) {

        console.log("User not found");
        return;
    }

    users.splice(index, 1);
    console.log("User deleted");
}

// Test the System
adduser("prince_dev", "prince@example.com", 22);
adduser("tony", "tony@example.com", 25);

updateUser(1, {age: 23, isActive: false});

deleteUsre(2);

console.log(getUsers());



/**
 * ========== Summary ===========
 Object destructuring is a powerful feature in JavaScript that allows you to:

 Extract multiple properties from objects in a single statement
 Assign properties to variables with different names
 Set default values for properties that don't exist
 Extract properties from nested objects
 Use the rest operator to collect remaining properties
 Create cleaner, more concise code, especially when working with complex objects
 By mastering object destructuring, you'll write more elegant and maintainable 
 JavaScript code. It's particularly valuable when working with APIs, configuration objects,
 and complex data structures.
 */





