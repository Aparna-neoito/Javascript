
function multiplyNumeric(menu) {
     for(let key in menu){
       if(typeof( menu[key]) == "number" ) {
            menu[key] *= 2 
            // menu[key] = menu[key] *2
       }else{
            menu[key];
       }
       console.log(menu[key]);
     }
}

let menu = {
      width: 200,
      height: 300,
      title: "My menu"
};

multiplyNumeric(menu);