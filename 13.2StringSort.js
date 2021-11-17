const foods = [
    "falafel",
    "sabich",
    "hummus",
    "pizza with extra pineapple"
   ];

const ascending = foods.slice().sort()
const descending = foods.slice().sort().reverse()

console.log(`This Array [${ascending}] Is Using The Ascending Sort and This Array [${descending}] Is Using The Decending Sort`)

const foodsWithUpperCase = [
    "falafel",
    "Sabich",
    "hummus",
    "pizza with extra pineapple",
   ];
   
const ascendingUpper = foodsWithUpperCase.slice().sort(function (a, b) {
    return a.toLowerCase().localeCompare(b.toLowerCase());
});

const descendingUpper = foodsWithUpperCase.slice().sort(function (a, b) {
    return b.toLowerCase().localeCompare(a.toLowerCase());
});

console.log(`This Array [${ascendingUpper}] Is Using The Ascending Sort and This Array [${descendingUpper}] Is Using The Decending Sort`)

const words = [
    "apple",
    "supercalifragilisticexpialidocious",
    "hi",
    "zoo"
];

const ascendingWords = words.slice().sort((a,b) => a.length - b.length)
const descendingWords = words.slice().sort((a,b) => b.length - a.length)

console.log(`This Array [${ascendingWords}] Is Using The Ascending Sort and This Array [${descendingWords}] Is Using The Decending Sort`)