function makeUser() {
      return {
        name: "John",
        ref: this.name
      };
    }
    
    let user = makeUser();
    
    console.log( user.ref.name ); 