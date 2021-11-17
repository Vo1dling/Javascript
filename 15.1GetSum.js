function getSum(arr1, arr2){
    const sum = 0;
    for (let i=0; i < arr1.length; i++){
    sum += arr1[i];
    }
    for (let i=0; i < arr2.length; i++){
    sum += arr2[i];
    }
    }
    getSum([1,2,3][5,66,23]);

    //I Used Chrome's Sources Tab In The Developer Tools  To Find The Issue
    
    //There Are three issues with this code 

    //Number 1) when the function is called its two arrays arent seperated by a comma
    //getSum([1,2,3][5,66,23]);

    //Number 2) the sum is defined as a constant variable anc thus cannot be changed
    //const sum = 0;

    //Number 3) the function never returns the sum variable

    
    //Fixed Version
//function getSum(arr1, arr2){
//    let sum = 0;
//    for (let i=0; i < arr1.length; i++){
//    sum += arr1[i];
//    }
//    for (let i=0; i < arr2.length; i++){
//    sum += arr2[i];
//    }
//    return sum
//    }
//    getSum([1,2,3],[5,66,23]);