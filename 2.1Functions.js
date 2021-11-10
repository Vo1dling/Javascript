function describeCountry(country, population, capitalCity) {
    return (`${country} has ${population} people and its capital city is ${capitalCity}`)
}
let finland = describeCountry('Finland','6 million','Helsinki')
let ukraine = describeCountry('Ukraine','43 million','Kyiv')
let japan = describeCountry('Japan','125 million','Tokyo')

console.log(finland)
console.log(ukraine)
console.log(japan)