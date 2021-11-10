function leapYear(n){
    if( n % 100 === 0 && n % 400 != 0){
        return (`it's not a leap year`)
    }
    else if( n % 100 === 0 && n % 400 === 0){
        return (`it's a leap year`)
    }
    else if ( n % 4 === 0 && n % 100 !=0 ){
        return (`it's a leap year`)
    }
}
let year = leapYear(2100)
console.log(year)