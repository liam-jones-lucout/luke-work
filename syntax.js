// Brackets... WTF?
// Square brackets []
// making Arrays:
let anArrayOfLetters = ["a", "b", "c", "d", "e", "f"];
// To access members of an array:
console.log(anArrayOfLetters[0]); // prints "a"
// To access members of an object:
let anObject = { hello: "World!" };
let specialString = "hello"
console.log(anObject[specialString]); // prints "World!"
console.log(anObject["hello"]); // prints "World!"


// Rounded bracket ()
// Call functions:
function thisIsALovelyFunction() {
    console.log("I am a lovely function")
}

thisIsALovelyFunction()

function thisIsALovelyFunctionThatTakesParameters(parameterOne, parameterTwo) {
    console.log(`here are my parameters: parameterOne:${parameterOne}, parameterTwo:${parameterTwo}`)
}

thisIsALovelyFunctionThatTakesParameters("hello", "world") // here are my parameters: parameterOne:hello, parameterTwo:world
thisIsALovelyFunctionThatTakesParameters("jim", "bob") // here are my parameters: parameterOne:jim, parameterTwo:bob


// Pass parameters to key words
if (1 < 2) { }
for (let i = 0; i < 100; i++) {
    console.log("willies");
}


// Curly brackets {}
// Defining scope (see scope.js)
{
    let weAreInAScope = 1
    {
        let weAreInAScope = 1
    }
    let weAreInAScope = 1
}

// defining Objects

const anObject = {
    blah: "poo"
};