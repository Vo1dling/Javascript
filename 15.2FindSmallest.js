function findSmallest(a, b, c){
    if (a > b > c){
    return c;
    } else if (a > c > b) {
    return a;
   } else {
    return b;
    }
   }
   findSmalest(52,66, 2);

   //Again I Used Chrome's Sources Tab In The Developer Tools To Find The Issue
   //The Issue With This Code Is Simple When The function is called its name is misspelled
   
   //Incorrect Version
   //findSmalest(52,66, 2);
   
   //Fixed Version
   //findSmallest(52,66, 2);