/*
    JavaScript - Declaring Functions

    The following exercise contains the following subjects:
        * functions
    
    Instructions
        * Please reformat the following function expressions to IIFE functions.
        * Please reformat the following function declarations in two ways, explicit return and implicit return functions.

    Submit the file to Hive

*/

// From turn functions (one of each).
const explicit = welcome => {return welcome}

const implicit = a => Math.pow(a, 2);

// From function expressions to IIFE functions.
(function(a){
    return Math.sqrt(a);
})

(function(a, b) {
    return Math.random() * (a - b) + b;
})
