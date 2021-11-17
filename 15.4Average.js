function calcAverage (arr){
    var sum ;
    for ( var i = 0 ; i < arr .length; i ++ ){
    sum += arr [ i ];
    }
    return sum ;
    }
    calcAverage ([ 85 , 90 , 92 ]);

    //I Used Chrome's Sources Tab In The Developer Tools To Find The Issue
    //There Are A Couple Of Flaws With This Code:

    //Number 1) var is being used for the variable which is pretty problematic
    //var sum ; , var i = 0

    //Number 2) The Function Never Returns The Actual Average It just Returns The Sum Of The Numbers
    //return sum ;

    //Number 3) The Value Of Sum Is Never Declared
    //var sum ;

    //Fixed Version
// function calcAverage (arr){
//     let sum = 0 ;
//     for ( let i = 0 ; i < arr .length; i ++ ){
//     sum += arr [ i ];
//     }
//     return sum/array.length ;
//     }
//     calcAverage ([ 85 , 90 , 92 ]);