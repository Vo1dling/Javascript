let numSiblings = prompt("How many siblings do you have?");

if (numSiblings === "1") {
  console.log('1 sibling!');
}
else if (numSiblings > "1"){
    console.log( `${numSiblings} siblings!`);
}
else{
    console.log('No siblings')
}
