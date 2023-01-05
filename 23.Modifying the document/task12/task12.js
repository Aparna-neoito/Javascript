function update(){
      let clock =document.querySelector('#clock');
      let date = new Date();
      let hours = date.getHours();
      if (hours <10 ) hours = '0' + hours;
      clock.children[0].innerHTML=hours;
      clock.children[0].style.color="red";

      let minutes = date.getMinutes();
      if (minutes < 10) minutes = '0' + minutes;
      clock.children[1].innerHTML=minutes;
      clock.children[1].style.color="green";


      let seconds = date.getSeconds();
      if(seconds < 10) seconds = '0' + seconds;
      clock.children[2].innerHTML = seconds;
      clock.children[2].style.color="blue";

}

let start = document.querySelector('.startbtn');
let stop = document.querySelector('.stopbtn');

start.addEventListener('click',function() {
      clockStart();
})
stop.addEventListener('click',function() {
      clockStop()
})

let timerId;

function clockStart(){
      if (!timerId) {
            timerId = setInterval(update,1000);
      }
      update();
}


function clockStop() {
      clearInterval(timerId);
      timerId = null; // (**)
    }

