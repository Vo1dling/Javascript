function lengthOfWords(array) {
    let wordsLength = [];
    for (let i = 0; i < array.length; i++) {
      wordsLength[i] = array[i].length;
    }
    return wordsLength;
  }
  console.log(lengthOfWords(["hamburger", "lettuce", "tomato", "me"]));