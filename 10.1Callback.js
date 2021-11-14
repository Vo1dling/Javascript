function isString(string, func){
    if(typeof string === "string"){
        return(func(string))
    }
    else if (typeof string != "string"){
        console.log(`it's not a string`)
    }
}
isString('asdw', function(string){console.log(string)})
function firstWordUpperCase(string, func){
let res = string.split(" ");
lower = res.splice(1)
upper = res[0].toUpperCase()
res = upper.toUpperCase() + ' ' + lower
res.toString()
string = res.replace(/[',',' ']/gi, '-')
return(func(string))
}
firstWordUpperCase('meow hello there',function(string){console.log(string)})

function firstWordUpperCase(string, func){
    let res1 = string.split(" ");
    lower = res1.splice(1)
    upper = res1[0].toUpperCase()
    res1 = upper.toUpperCase() + ' ' + lower
    res1.toString()
    string = res1.replace(/[',',' ']/gi, '+*')
    return(func(string))
    }
firstWordUpperCase('meow hello theyre',function(string){console.log(string)})

function mathSquare(a,func){
    return(func(a))
}
mathSquare(5,function(a){console.log(a*a)})

