// If Method
// function passwordVerify(password){
//     if(password.toString().length >= 7){
//         return(`Strong`)
//     }
//     else if(password.toString().length < 7){
//         return(`Weak`)
//     }
// }
// let myPass = passwordVerify(12312311)
// console.log(myPass)

//Ternary Method
// function passwordVerify(password){
//     return (password.toString().length >=7) ? `Strong`
//            : (password.toString().length <7) ? `Weak`
//            : `Invalid`   
// }
// let myPass = passwordVerify(12311)
// console.log(myPass)

let capitalcheck= /[A-Z]/g;
function veryStrongCheck(password){
   return (password.toString().length >=7 && capitalcheck.test(password)) ? `Very Strong`
    : (password.toString().length >=7) ? `Strong`
    : (password.toString().length <7) ? `Weak`
    : `Invalid`;
}
let myPass = veryStrongCheck("231231Y")
console.log(myPass)