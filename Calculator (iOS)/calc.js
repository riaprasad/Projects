let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenVal = '';


for (item of buttons)
{
  item.addEventListener('click', (e) =>{
    texts = e.target.innerText;
    console.log("Button text is " , texts);
    if (texts == 'AC')
    {
      screenVal = "";
      screen.value = screenVal;

    }
    else if (texts == 'X')
    {
      texts = '*';
      screenVal += texts;
      screen.value = screenVal;
    }
    else if (texts == '=')
    {
      screen.value= eval(screenVal);
    }
    else{
      screenVal += texts;
      screen.value = screenVal;
    }
  })
}
