function random(min, max) {
       let rand= min + Math.random() * (max - min);
       return Math.floor(rand);
    }
    
    alert( random(1, 5) );
    alert( random(1, 5) );
    alert( random(1, 5) );

