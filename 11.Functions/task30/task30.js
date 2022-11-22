function checkAge(age) {
      if (age > 18) {
        return true;
      } else {
        return confirm('Did parents allow you?');
      }
    }
    checkAge(20);
    checkAge(10);

function checkAge2(age) {
      if (age > 18) {
        return true;
      }
      return confirm('Did parents allow you?');
}
checkAge2(20);
checkAge2(10);