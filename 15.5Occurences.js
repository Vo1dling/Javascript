function countOccurrences (str, char){
    let counter = 0 ;
    for ( let i = 0 ; i < str .length; i ++ ){
    if ( str . charAt ( i ) === char ){
    counter + 1 ;
    }
    }
    return counter ;
    }
    countOccurrences ( "ini mini miny moe" , "n" );

    //I Used Both Of Chrome's Developer Tools Console Tab And Sources Tab
    //The Issue With This Code is The Fact That Counter Isnt Being Incremented By 1 Each Time A Request Character Is Found so it never saves the actual Count Of The Character
    
    //Incorrect Version
    //counter + 1;

    //Fixed Version
    //1) counter++
    //2) counter += 1

