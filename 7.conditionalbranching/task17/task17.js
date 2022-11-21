
let login=prompt('enter your designation');
let message=(login=='Employee')? 'Hello':(login=='Director')?'Greeting':(login=='')?'No login':'';
alert(message);