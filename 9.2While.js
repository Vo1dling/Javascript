const worldPop = 7900;
function percentOfWorld(population) {
  return (population / worldPop) * 100;
}
function populationPercentage(array) {
  let percentages = [];
  let i = 0
  while ( i < array.length) {
    percentages[i] = percentOfWorld(array[i]);
    i++
  }
  return percentages;
}
console.log(populationPercentage([212, 126, 273, 145, 109]));