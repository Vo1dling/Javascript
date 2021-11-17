function getSumOfEven(arr){
    return arr[2] + arr[4] + arr[6] + arr[8] + arr[10];
   }
  getSumOfEven([1,2,3,4,5,6,7,8,9,10]);

   //Chorme's Developer Tools Sources Tab Was Used To Find The Problem
   //The Issue With This Code is That It Is Using Wrong Index Numbers All The Numbers Are Higher Than They Should Be By One Because number 1 isnt index 1 and so index 10 doesnt exist and that causes the function to return NaN

   //Incorrect Version
   //return arr[2] + arr[4] + arr[6] + arr[8] + arr[10];
  
   //Fixed Version
   //return arr[1] + arr[3] + arr[5] + arr[7] + arr[9];
 
