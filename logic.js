// LOGIC
// Logic controls the flow of the program. A program that has no flow control or logic is not really a proper programming
// A proper programming language must have a way to split between logical paths

// EXAMPLE:
// We want a good morning message that shows in the morning

const theTime = new Date()
if( theTime.hour() <= 12 ) {
    console.log("Good Morning!");
}

// EXAMPLE:
// We want a good morning message that shows in the morning, or a good afternoon message that shows in the afternoon

const theTime = new Date()
if (theTime.getHours() <= 12) {
    console.log("Good Morning!");
} else {
    console.log("Good Afternoon");
}

// EXAMPLE
// We want a good morning message that shows in the morning, or a good afternoon message that shows in the afternoon
// EXCEPT, if it's Monday, tell everyone to fuck off

const theTime = new Date()
if (theTime.getDay() === 1) { // 1 is Monday
    console.log("FUCK OFF!");
} else if (theTime.getHours() <= 12) {
    console.log("Good Morning!");
} else {
    console.log("Good Afternoon");
}

// LOGICAL OPERATORS

// < less than
// > greater than
// <= less than or equal
// >= greater than or equal

// == Equality operator
            // In javascript there's a concept of loose equality.
            // EXAMPLE
            // ALL THESE ARE TRUE
            // false == 0
            // false == ""
            // false == null
            // false == undefined
// === Absolute equality operator
            // Ignores truthy or falsy
            // ALL THESE ARE FALSE
            // false === 0
            // false === ""
            // false === null
            // false === undefined

// != Inequality operator
            // This the opposite of the equality operator
            // it checks if things aren't equal
            // 1 != 1    (false)
            // 1 != 2    (true)

// !== Absolute Inequality operator
            // Same as above, but no truthy or falsey

// && Logical AND
            // This allows multiple logical statements to be combined into a single logical statement
            "hello" === "hello" && 1 < 2

            /*
                            AND
                      A    |   B   | result
                   --------+-------+--------
                      0    |   0   |   0
                      1    |   0   |   0
                      0    |   1   |   0
                      1    |   1   |   1
             */
isMonday = theTime.getDay() === 1;
if (isMonday && theTime.getHours() < 12) {
    console.log("HAPPY MONDAY MORNING!")
}
// || Logical OR
            // This allows multiple logical statements to be combined into a single logical statement
            "hello" === "hello" || 1 === 2

            /*
                             OR
                      A    |   B   | result
                   --------+-------+--------
                      0    |   0   |   0
                      1    |   0   |   1
                      0    |   1   |   1
                      1    |   1   |   1
             */
isSaturday = theTime.getDay() === 5;
isSunday = theTime.getDay() === 6;
if (isSaturday || isSunday) {
    console.log("HAPPY WEEKEND!")
}
// ! Logical NOT
            // Flips a value between true or false
            /*
                          NOT
                      A    | result
                   --------+--------
                      0    |   1
                      1    |   0
             */
isMonday = theTime.getDay() === 1;
if(!isMonday) {
    // Only do this if the day is NOT Monday
}


// LOGIC can be combined!
// We can use braces () to explicitly show the order of precedence
isSaturday = theTime.getDay() === 5;
isSunday = theTime.getDay() === 6;
if ((isSaturday || isSunday) && theTime.getHours() <= 12) {
    console.log("HAPPY WEEKEND MORNING!")
}










isMonday = theTime.getDay() === 1;
isMonday = [       1      ] === 1;
isMonday = [        true         ];
isMonday = true;