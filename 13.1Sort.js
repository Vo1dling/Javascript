const num = [1, -5, 666, 2, 400, 11];

const ascending = num.slice().sort((a,b) => a - b)
const descending = num.slice().sort((a,b) => b - a)

console.log(`This Array ${ascending} Is Using The Ascending Sort and This Array ${decending} Is Using The Decending Sort`)
