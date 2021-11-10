function lightDarkColor(color){
    switch (color.toLowerCase()){
        case "yellow":
        case "pink":
        case "orange":
        return(`Light Color`);
        break;
        case "blue" :
        case "purple":
        case "brown":
        return(`Dark Color`);
        break;
        default:
        return (`Unknown color`)
    }
}
let c = lightDarkColor("YElLow")
console.log(c)