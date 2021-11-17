const number = [20,25,30,35,40]
const text = ['Maya','Zer0','Salvador','Axton']

//1)
const doubleValues = number.map(function(n){
    return (n*2)
})


//2)
const onlyEvenValues = []
number.map(function(n){
    if(n % 2 === 0)
    onlyEvenValues.push(n)
})


//3)
const showFirstAndLast = []
text.forEach(function(txt,idx){
    if(idx == 0 || idx === text.length-1 && typeof(txt) === "string"){
        showFirstAndLast.push(txt)
    }
})


//4)
function countVowels(string) {
	string = string.toLowerCase();
	string = Array.from(string);
	let lettersCounter = [];
	let vowelRegEx = /[aeiou]/gi;
	string.map(function (char) {
		if (lettersCounter[char]) {
			if (vowelRegEx.test(char)) {
				return lettersCounter[char]++;
			} else {
				return (lettersCounter[char] = 1);
			}
		}
	});
	return lettersCounter;
}


//5)
function caps(string){
    txt = Array.from(string)
    txt.forEach(function(){
        return (txt = txt.toString().toUpperCase().replace(/[',',' ']/gi, ''))
    })
    console.log(txt)
}

//6)
function shiftLetters(string) {
	let num = -1;
	string = string.toLowerCase();
	string = Array.from(string);
	let result = "";
	let decodedResult = "";
	let charcode = 0;
	string.forEach(function (char) {
		charcode = char.charCodeAt() + num;
		result += charcode;
		decodedResult += String.fromCharCode(charcode);
	});
	return `Encoded UTF-16 String :(${result})   Decoded UTF-16 String:(${decodedResult}) `;
}

//7)
function swapCase(string) {
	string = string.split(" ");
	let cappedWords = string.map(function (word, index) {
		if (index % 2 === 0) {
			word = word.toUpperCase();
		}
		return word;
	});
	cappedWords = cappedWords.join(" ");
	return cappedWords;
}




