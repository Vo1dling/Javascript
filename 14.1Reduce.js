const num = [1,2,3,4,5,6,7,8,9,10]

const max = num.reduce((max,currentValue) => {
    if (currentValue > max) return currentValue;
    return max;
})
console.log(max)

const evenSum = num.reduce((accum,currentValue) => {
    if(accum % 2 == 0 && currentValue % 2 == 0){
       return accum + currentValue
    }
    else if (accum % 2 == 0 && currentValue % 2 != 0){
        return accum
    }
    else if (accum % 2 != 0 && currentValue % 2 == 0){
        return currentValue
    }
})
console.log(evenSum)

const avg = num.reduce(
  (start, end, index, array) => start + end / array.length,
  0
);
console.log(avg);

