function countryToLiveIn(language, isIsland, population, country){
if(language.toString().toLowerCase().includes("english") && !isIsland  && population < 50){
    return (`You Should live in ${country}`)
} 
else {
    return(`You Should Pick Another Country`)
}
}
let finland = countryToLiveIn('ENGlish', false, 43, 'Finland')
console.log(finland)