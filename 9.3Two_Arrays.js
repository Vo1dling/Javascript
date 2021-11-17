const food = ["Noodle", "Pasta", "Ice-cream", "Meat",
"Cucumber", "Olives"];
const food1 = ["Fries", "Ice-cream", "Pizza", "Olives",
"Hamburgers"];

function comparison(arr,arr1){
  let results = []
  let index = 0
  for(i of arr){
    for (x of arr1){
      if(i === x){
        results[index] = x
        index++
      }
    }
  }
  return(results)
}
console.log(comparison(food,food1))