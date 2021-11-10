function basket(score1, score2,score3){
    return(score1 + score2 + score3)/3
}
let john = basket (89,120,103)
let mike = basket (116,94,123)
let mary = basket (97,134,105)
if(john > mike && john > mary){
    console.log(`John's team wins with an average score of ${john}`)
}
else if(john < mike && mary < mike){
    console.log(`Mike's team wins with an average score of ${mike}`)
}
else if(john < mary && mike < mary){
    console.log(`Mary's team wins with an average score of ${mike}`)
}
else if (john === mike && john === mary && mike === mary){
    console.log (`it's a draw`)
}