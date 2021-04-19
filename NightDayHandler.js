var Links = {
  setColor:function(color){
    var alist = document.querySelectorAll('a');
    var i = 0;
    while(i < alist.length){
      alist[i].style.color = color;
      i = i + 1;
    }
  }
}
var Body = {
  setColor:function(color){
    document.querySelector('body').style.backgroundColor = color;
  }
}
function handler(click){
  var target = document.querySelector('body');
  if (click.value === 'Night Mode'){
    Body.setColor('dimgray');
    click.value = 'Day Mode';
    Links.setColor('white');
  } else {
    Body.setColor('ivory');
    click.value = 'Night Mode';
    Links.setColor('salmon');
    }
  }
