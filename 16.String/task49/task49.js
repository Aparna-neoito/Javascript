function checkSpam(str) {
      let newStr=str.toLowerCase();
      console.log(newStr)
      if(newStr.includes("viagra") ||newStr.includes("xxx")){
             return true;
      }else {
             return false;
      }
}
let vig=checkSpam('buy ViAgRA now') 
console.log(vig)
let xxx=checkSpam('free xxxxx');
console.log(xxx)
let any=checkSpam("innocent rabbit") ;
console.log(any)