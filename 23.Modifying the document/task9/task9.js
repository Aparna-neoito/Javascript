let ulList = document. createElement('ul');
document.body.append(ulList);

while(true) {
      let data = prompt('enter a text for the list item');
      if(data == "" || data === null) {
            break
      }

      else {
            let list = document.createElement('li');
            list.textContent = data;
            ulList.append(list);
      }
}