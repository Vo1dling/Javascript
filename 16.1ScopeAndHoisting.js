//Block 1
function funcA() {
 console.log(a);
 console.log(foo());
 var a = 1;
 function foo() {
 return 2;
 }
}
funcA();

//Block 1 Will console log a As Undefined Because it Will hoist the var keyword but not its value and will console log the function foo as 2

//Block 2
var fullName = 'John Doe';
var obj = {
 fullName: 'Colin Ihrig',
 prop: {
 fullName: 'Aurelio De Rosa',
 getFullName: function () {
 return this.fullName;
 }
 }
};
console.log(obj.prop.getFullName());
var test = obj.prop.getFullName;
console.log(test());

//Block 2 will log Aurelio De Rosa First and then will log undefined Because getFullName Isn't Followed By parentheses and it's instead placed after test in the console log

//Block 3
function funcB() {
    let a = b = 0;
    a++;
    return a;
   }
   funcB();
   console.log(typeof a);
   console.log(typeof b);

//Block 3 Will log the type of a as undefined because it is being declared to equal a variable but b will be logged as a number beacuse it equals 0

//Block 4
function funcC() {
    console.log("1");
   }
   funcC();
   function funcC() {
    console.log("2");
   }
   funcC();   

//Block 4 This Function Will log 2 twice beacuse the second time its defined overrides the first
   
//Block 5
function funcD1() {
    d = 1;
   }
   funcD1();
   console.log(d);
   function funcD2() {
    var e = 1;
   }
   funcD2();
   console.log(e);
   
//Block 5 This Function Will give a faulty output because e is declared inside the function and thus cannot be accessed outside of it so either it is defined outside of the function or the console log should be inside the function itself

//Block 6
function funcE() {
    console.log("Value of f in local scope: ", f);
   }
   console.log("Value of f in global scope: ", f);
   var f = 1;
   funcE();
   
//Block 6 Will return undefined for the global log beacuse the var f will be hoisted but not its value but the local log will return 1 as the variable value is declared before the function is called

