function checkAge(age){
      (age>8)? true : confirm('Did parents allow you');
}
checkAge(20);

function checkAge2(age){
    return (age>18) || confirm('Did parents allow you');
}
checkAge2(12); 