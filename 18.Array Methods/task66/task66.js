function getAverageAge(users) {
    let sumAge = 0;
    let averagesum = 0;
      for(i=0; i<users.length; i++) {
             sumAge = sumAge +users[i].age;
             averagesum = sumAge / users.length;
      }
   return averagesum;
}

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [ john, pete, mary ];

let avarageAge = getAverageAge(arr)
console.log(avarageAge)