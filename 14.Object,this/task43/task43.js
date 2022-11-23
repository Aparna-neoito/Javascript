let calculator = {
      read() {
            this.a =parseInt( prompt( "enter first number"));
            this.b =parseInt( prompt( "enter the second number" ));
      },
      sum() {
          return this.a + this.b ;
      },
      mul() {
           return this.a * this.b ; 
      }

};

calculator.read();
console.log(calculator.sum() );
console.log(calculator.mul() );