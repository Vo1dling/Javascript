function grade(num){
    if (num < 65){
        console.log (`F`)
    }
    else if (num > 64 && num < 70){
        console.log (`D`)
    }
    else if (num > 69 && num < 80){
        console.log (`C`)
    }
    else if (num > 79 && num < 90){
        console.log (`B`)
    }
    else if (num > 89 && num < 100){
        console.log (`A`)
    }
}
grade(90)
