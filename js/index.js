var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-60px";
  }
  prevScrollpos = currentScrollPos;
}

$(document).ready(function () {
  $('.header-burger').click(function (event) {
    $('.header-burger, .header-menu').toggleClass('active');
    $('body').toggleClass('lock');
  });
});


const aminItem = document.querySelector('._anim-items');

if (animItems.length > 0) {
  function animOnScroll(params) {
    for (let index = 0; index < animItems.length; index++) {
      const animItem = animItems[index];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 4;

      let animItemPoint = window.innerHeight - animItemHeight / animStart;

      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart
      }
      
      if ((scrollTop > animItemOffset - animItemPoint) && scrollTop) {
        
      }
    }
  }
  function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = windows.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = windows.pageYOffset || document.documentElement.scrollTop,
    return {
      top: rect.top + scrollTop, left: rect.left + scrollLeft
    }
  }
}

