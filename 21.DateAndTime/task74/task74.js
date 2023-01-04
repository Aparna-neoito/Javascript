function getLocalDay(date) {
      let days = ['SU','MO','TU','WE','TH','FR','SA'];
      return days[date.getDay()+1];
}



let date = new Date(2012, 0, 3);  // 2 Jan 2012
alert( getLocalDay(date) );       