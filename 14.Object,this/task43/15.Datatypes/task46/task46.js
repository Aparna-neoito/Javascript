function readNumber() {
      let num =parseInt(prompt("Please enter a number")) ;

      while (isNaN(num)) {
      num = prompt("enter a number"); 
      }
      
}
readNumber();

