window.onload = function () {
  var scrollTop = 0;
  var menu = document.getElementById('menu');
  var about = document.getElementById('about');
  //设置原始变量
  setInterval(function () {
    var aboutTop = about.getBoundingClientRect().top;
    var clientWidth = document.body.clientWidth;
    if (clientWidth < 767 || aboutTop < 1) {
      menu.style.display = 'block';
    } else {
      menu.style.display = 'none';
    }
  }, 160);
}

function showErr() {
  alert('暂时无法查看，请耐心等待通知！');
}

var tab = 0;

function showMenu() {
  var menu = document.getElementById('menu-box');
  if (tab === 0) {
    menu.style.display = 'block';
    tab = 1;
  } else if (tab === 1) {
    menu.style.display = 'none';
    tab = 0;
  }
}
