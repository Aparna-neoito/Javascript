function camelize(str) {

  let splitedWord = str.split("-");
  let concatWord = splitedWord[0];

  for (let i = 1; i < splitedWord.length; i++) {
    let firstLetter = splitedWord[i].charAt(0).toUpperCase();
    let upperWord = firstLetter + splitedWord[i].slice(1);
    concatWord = concatWord + upperWord;
  }

  return concatWord;

}

let camel1 = camelize("list-style-image");
console.log(camel1);
let camel2 = camelize("webkit-transition");
console.log(camel2);
let camel = camelize("background-color");
console.log(camel);
