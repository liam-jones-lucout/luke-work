// What are functions?
/*
Functions are self contained peices of code. What does that mean?
*/
// Functions can define their own variables:
function jim() {
    const bob = 1;
    console.log(bob); // Prints out 1
}

//but it also means that functions have their own scope

function stan() {
    const bob = 1
    console.log(bob); // Prints out 1
}

function jim() {
    const bob = 2
    console.log(bob); // Prints out 2
}

function gary(){
    const bob = 3;
    console.log(bob); // Prints out 3
    stan() // Prints out 1
    jim() // Prints out 2
}


function betty() {
    const bob = 1;
    console.log(bob); // Prints out 1

    const steve = function() {
        const bob = 2;
        console.log(bob); // Prints out 2
    }

    console.log(bob); // Prints out 1
}


// DEFINING A FUNCTION
// There are a few different ways to define a function
function nameOfTheFunction() {
    // do stuff
}

let namedFunctionVariable = function() { // This is a function variable. could also be const or var
    // do stuff
}

aFunctionThatTakesAFunction(function() {/*does stuff*/}) // anonymous (nameless) function


(function () { // Anonymous function that is immediately called
    // do stuff
})()

//Another method of defining functions is "Arrow" function. They can be used as a function variable or an anonymous function, e.g.

const anArrowFunction = () => {
    // Do stuff
}

(() => {
    // Do stuff
})()

// FUNCTION ARGUMENTS/PARAMETERS
/*
Functions can take arguments (or parameters) which they can use in their processes
*/

function addNumbersTogetherAndPrint(numberA, numberB) {
    console.log(numberA + numberB);
}

// RETURN VALUE
// Functions can return a value as a result of the work they've done

function veryComplicatedMathsForumla(numberA, numberB) {
    return numberA + numberB
}

const aNumber = 1;
const anotherNumber = 5;

const theSum = veryComplicatedMathsForumla(aNumber, anotherNumber);
theSum === 6; //is theSum exactly the same as the number 6?
