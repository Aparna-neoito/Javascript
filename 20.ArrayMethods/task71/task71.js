function camelize(str) {

      return str
      .split('-')
      .map((word,index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1))
      .join('');
}
    
let camel1 = camelize("list-style-image");
console.log(camel1);
let camel2 = camelize("webkit-transition");
console.log(camel2);
let camel = camelize("background-color");
console.log(camel);
    