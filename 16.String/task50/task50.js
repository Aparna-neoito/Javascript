function truncate(str, maxlength) {
      let leng=str.length;
      console.log(leng)
      if(leng > maxlength) {
            
            return str.slice(0,maxlength-1)+'...';
      }else{
            return str
      }
}
let newStr = truncate("Hi everyone!", 20) ;
console.log(newStr)
let abc=truncate("What I'd like to tell on this topic is:", 20) 
console.log(abc)
let ab=truncate('abcdefghijklmnopqrstuvwxyz',20);
console.log(ab);