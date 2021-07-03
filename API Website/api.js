var buttons = document.getElementsByTagName('button')[0];

buttons.addEventListener('click', function () {

  var firstInput = document.getElementById('username').value;
  var secondInput = document.getElementById('randomword').value;
  //console.log(firstInput);
  //console.log(firstInput);

  var changeAttr = document.getElementsByTagName('img')[0];
  changeAttr.setAttribute("src", "https://avatars.dicebear.com/api/"+firstInput+"/"+secondInput+".svg");
})

//"'https://avatars.dicebear.com/api/"+firstInput+"/"+secondInput+".svg'"
