function count(obj) {
      let countkey = Object.keys(obj).length;
      return countkey;
}

let user = {
      name: 'John',
      age: 30
    };
    

let counts = count(user);
console.log(counts);