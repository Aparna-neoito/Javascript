let person=prompt("who's there?");
let password;
if(person=='Admin'){
      password=prompt('Password?')
      if(password=='TheMaster'){
            alert('Welcome!')
      }else if(password==""){
            alert('Canceled')
      }else{
            alert('Wrong password')
      }
}else if(person==""){
      alert("Canceled")
}else{
      alert('I dont know you');
}