let weAreInAScope = 1;
let weAreInAnotherScope = 2;
console.log(weAreInAScope);             // A
let aFunction = function () {
    let weAreInAScope = 5000
    console.log(weAreInAScope);         // B
    console.log(weAreInAnotherScope);   // C
}

aFunction();
console.log(weAreInAScope);             // D
console.log(jim);                       // E

