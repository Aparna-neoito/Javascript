function sumSalaries(salaries) {
      let sum=0;
      for(salary of Object.values(salaries)){
        
            sum += salary;
      }
      return sum;  
    
      
}

let salaries = {
      "John": 100,
      "Pete": 300,
      "Mary": 250
};
 
let sumSalary = sumSalaries(salaries);
console.log(sumSalary)