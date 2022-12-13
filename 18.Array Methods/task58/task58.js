function filterRange(arr,a,b) {
      let filteredArray = [];
      for (i=0; i<arr.length; i++) {
            if(arr[i]>=a && arr[i]<=b){
                
            filteredArray.push(arr[i]);

            }
      }
      return filteredArray;
}


let array = filterRange([1,2,3,4,5],0,3);
console.log(array)