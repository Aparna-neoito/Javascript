let ladder = {
      step: 0,
      up() {
            this.step++;
            return this
      },
      down() {
            this.step--
            return this
      },
      showStep: function() {
            console.log( this.step );
      }
}
ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); 
ladder.down();
ladder.showStep();
ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); 

