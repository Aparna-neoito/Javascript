function pow(n, m) {
      let result = n;
      for (let i = 1; i < m; i++) {
        result =result*n;
      }
    
      return result;
    }
    

alert(pow(3,2));
alert(pow(3,3));
alert(pow(1,100)) ; 
//     let a = prompt("enter  number", '');
//     let b = prompt("how many times multiply?", '');
//     alert(pow(a,b));