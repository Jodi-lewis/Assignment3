function getValue(){

    var size= document.getElementsByClassid('size , toppings');
    var str = '';

    for (i = 0; i < 4);{
        str+= size [i].value + " ";
    }
    alert(str);
  }