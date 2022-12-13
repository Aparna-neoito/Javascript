// filter unique array using for loop

function unique(arr) {
  let uniqueArray = [];
  for( i=0; i<arr.length; i++){
     if(!(uniqueArray.includes(arr[i]))) {
      uniqueArray.push(arr[i]);
     }
  }
  return uniqueArray
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log( unique(strings) ); 