function filterRangeInPlace(arr, a, b) {

      let filteredArray =[];
      let array = [];
      for(i=0; i<arr.length; i++) {
            if(arr[i]>=a && arr[i]<=b){
                  filteredArray.push(arr[i])
            }else {
                  array.push(arr[i])
            }
            
      }
      return array;


}


let array = filterRangeInPlace([1,2,3,4,5,6], 2, 4);
console.log(array)