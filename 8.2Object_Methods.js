const myCountry = {
    country    : 'Russia',
    capital    : 'Moscow',
    langauge   : 'Russian',
    population : '146 Million',
    neighbours : ['Norway', 'Finland', 'Estonia', 'Latvia', 'Lithuania', 'Poland', 'Belarus','Ukraine', 'Georgia', 'Azerbaijan', 'Kazakhstan', 'China', 'Mongolia', 'NorthKorea'],
    describe() {
        console.log(`${this.country} has ${this.population} people, their mother tongue is ${this.langauge}, they
        have ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`)
    }, 
    checkIsland(){
        this.isIsland = this.neighbours.length <1 ?this.isIsland = `True` : this.isIsland = `False`;
        console.log(this.isIsland)
    } 
}

myCountry.checkIsland()