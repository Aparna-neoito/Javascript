function sumInput() {
      let arr=[];
      console.log(arr);
      while(true) {
       let value = parseInt( prompt('enter the number',0));

       if (value==="" || value==="null" || isNaN(value)) break;
       arr.push(value);
       
      }
      console.log(arr);
      let sum=0;
      for(let number of arr) {
            sum = sum+number;
      }
      return sum;
     
}
let sumNumber = sumInput();
console.log(sumNumber)