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
    const jim = 3;
    console.log(bob); // Prints out 1

    const steve = function() {
        const bob = 2;
        console.log(bob); // Prints out 2
        console.log(jim); // Prints out 3
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
    // This is MILLIONS OF COMPLICATE LINES OF MATHS
    console.log(numberA + numberB);
}

addNumbersTogetherAndPrint(1, 2)
addNumbersTogetherAndPrint(1, 4)
addNumbersTogetherAndPrint(4562345, 13241354)

// Real life example

// We're making a game and we want to add a way to save it.

function saveGame(gameState, saveFileName) {
    const file = fileSystem.openFile(saveFileName);

    file.write(gameState);

    file.close();
}

const saveGameButton = document.getElementById("savegame-button");

saveGameButton.onClick = function() {
    const currentState = getCurrentState();
    const fileName = askPlayerForFileName();

    saveGame(currentState, fileName);
}


// RETURN VALUE
// Functions can return a value as a result of the work they've done

function veryComplicatedMathsForumla(numberA, numberB) {
    return numberA + numberB
}

const aNumber = 1;
const anotherNumber = 5;

const theResult = veryComplicatedMathsForumla(aNumber, anotherNumber);
theResult === 6; //is theSum exactly the same as the number 6?

const theOtherResult = veryComplicatedMathsForumla(10, 20);
theOtherResult === 30; //is theSum exactly the same as the number 30?


function doAThing(thingToDo) {
    thingToDo()
}


doAThing(function() {console.log("boobies")})





function doADifferentThing(aNumber) {
    console.log(aNumber) // 2
}

doADifferentThing(2)
doADifferentThing(4)
doADifferentThing(74441654644)