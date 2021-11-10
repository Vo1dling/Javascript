function arr(n){
    for (let i = 0; i < n; i++) {
        if(i.toString().includes("7") && i % 7 === 0){
            console.log(`BOOM-BOOM`)
        }
        else if(i % 7 === 0 && i != 0){
            console.log(`BOOM`)
        }
        else {
            console.log(i)
        }
    }
}
arr(89)
