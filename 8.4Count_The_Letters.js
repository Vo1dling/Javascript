const array = ["Hello", "Good Day", "Your Welcome", "hotdog",
"hamburgers"];
function count (string) {
    let count = {};
   for(let i = 0; i < array.length; i++){ string[i].toLowerCase().replace(' ','').split('').forEach(function(s) {
       count[s] ? count[s]++ : count[s] = 1;
    })};
    console.log(count) ;
}
count(array)