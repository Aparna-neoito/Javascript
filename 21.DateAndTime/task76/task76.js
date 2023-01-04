function getLastDayOfMonth(year, month){
      let date = new Date(year,month)
    return date.getDay();
}



alert( getLastDayOfMonth (2012,1) );