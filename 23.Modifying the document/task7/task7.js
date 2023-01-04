let elemDiv  = document.querySelector('#elem');

function clear(elem) { 
      //   elem.innerHTML =''
     while (elem.firstChild){
      elem.firstChild.remove();
     }
 }
     
clear(elemDiv); 