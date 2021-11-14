const listOfNeighbours = [
    ["Canada", "Mexico"],
    ["Spain"],
    ["Norway", "Sweden", "Russia"],
   ];
   function callNeighbours(){
    for (let i = 0; i < listOfNeighbours.length; i++){
        for(let x = 0; x < listOfNeighbours[i].length; x++){
            console.log(`Neighbours ${listOfNeighbours[i][x]}`)
        }
    }
}
callNeighbours(listOfNeighbours)