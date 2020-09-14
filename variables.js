// VARIABLES + NUMBERS

console.log(1 + 1);

let theNumber; // make a empty box and put a label on it that says "theNumber"
theNumber = 1; // Put a 1 into the box with the label "theNumber"

let anotherNumber = 2; // Make an empty box with the label "anotherNumber" on it and put a 2 in there

theNumber = 3; // empty the box labeled "theNumber" and put a 3 in it

const lastNumber = 1; // Make a constant called "lastNumber" and put a 1 in it


console.log(theNumber + anotherNumber);
console.log(theNumber + 1);
console.log(theNumber + lastNumber);

//TYPES OF VARIABLES
let aNumber = 1685416513987498.4; //Numbers
let aBigInt = 1382746189343544n;
let aString = "Hello, I'm a string"; // Strings
let aBoolean = true; // Boolean - can either be true or false
let anotherBoolean = false;

let anObject = {}; // An empty object
let anArray = []; // An empty array

// WEIRD VARIABLE TYPES
let aFunction = () => {console.log("hello!")}; // Function that prints "hello!" to the console
let anotherFunction = function () { console.log("hello!") }; // Another function that prints "hello!" to the console
let anUndefined = undefined;
let aNull = null;

// Null?
let jim = 1
// the program does something
jim = null;



// Arrays
let anArrayOfLetters = ["a", "b", "c", "d", "e", "f"];
// To access members of an array:
console.log(anArrayOfLetters[0]); // prints "a"

const anIndex = 3;
console.log(anArrayOfLetters[anIndex]); // prints "d"

// Objects
// Object is a type of variables that can contain other variables that are accessed via a "key" or "property name"
// An object can contain strings:
let anObject = { hello: "World!" };
console.log(anObject.hello); // prints "World!"
// An object can contain numbers
let anObject = { hello: 20 };
console.log(anObject.hello); // prints 20
// An object can contain boolean
let anObject = { hello: false };
console.log(anObject.hello); // prints false
//etc

// An object can contain function
let anObject = {
    hello: function() {
        console.log("HELLO WORLD")
    }
};
anObject.hello(); // prints "HELLO WORLD"

// An object can contain ANOTHER OBJECT!
let anObject = {
    hello: {
        world: "I AM ANOTHER OBJECT OMG",
        earth: ",hello im bent"
    }
};
console.log(anObject.hello.world + anObject.hello.earth); // prints "I AM ANOTHER OBJECT OMG"

// An object can have as many or as few of these as the programmer need!
let anObject = {
    hello: {
        world: "I AM ANOTHER OBJECT OMG",
        earth: "hello im bent"
    },
    someFunction: () => {console.log("poop")},
    someNumber: 1,
    someOtherNumber: 1,
    someBool: true,
};



// What does "=" actually do/mean
// BASIC VALUES

let jim;    // make a empty box and put a label on it that says "jim"
let bob = 1; // make a empty box called bob and put a 1 into it
jim = bob;  // Make jim the same value as bob

console.log(bob);// 1
console.log(jim);// 1

// With "basic" values (numbers, bigInts, booleans, strings) we pass a variable by COPY
// (extending previous code)

bob = 20;

console.log(bob); // 20
console.log(jim); // 1!

jim = bob;
console.log(bob); // 20
console.log(jim); // 20


/*
What is happening?!


  1                    (undefined)
[bob]  (let bob = 1;)     [jim]  (let jim;)

  1 - - - - - - (COPY) - - - - - - 1
[bob]         (jim = bob;)       [jim]

    1 <-------- 20                  1
In the bin    [bob] (bob = 20;)   [jim]
*/


// COMPLEX VALUES
let jim
let bob = ["a", "b", "c"];
jim = bob

console.log(bob);// "a", "b", "c"
console.log(jim);// "a", "b", "c"

bob[3] = "d"

console.log(bob);// "a", "b", "c", "d"
console.log(jim);// ?

/*
What is happening?!


["a", "b", "c"] (Box containing ["a", "b", "c"])
      /\
      ||
     [bob] (let bob = ["a", "b", "c"];)

(undefined)
   [jim]  (let jim;)

    (Box containing ["a", "b", "c"])
    +-----> ["a", "b", "c"] <-----+
    |                             |
    |                             |
  [bob]      (jim = bob;)       [jim]

 bob[3] = "d"


 MEMORY EXAMPLES
 (SIMPLIFIED HOW MEMORY WORKS EXAMPLE)

 1,2,3,4,5,6,7,8,9   


 5: ["a", "b", "c"]


 bob = #5
 jim = bob
 jim = #5
*/


