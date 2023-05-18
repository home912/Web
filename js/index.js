$(window).on('load', function () {
  $('.preloader').fadeOut('slow').end('slow').delay().fadeOut('slow');
});

/* Функция скрытия/показа navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("navbar").style.top = "-60px";

  }
  prevScrollpos = currentScrollPos;
  if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

/* функция открытия меню-бургер */
$(document).ready(function () {
  $('.header-burger').click(function (event) {
    $('.header-burger, .header-menu').toggleClass('active');
    $('body').toggleClass('lock');
  });
});


const animTitle = document.querySelectorAll("._anim-title"); // Элементы которые нужно анимировать
if (animTitle.length > 0) {
  window.addEventListener('scroll', animOnScroll);
  /* Что происходит: Для каждого элемента который имеет класс '_anim-items' при достижении 1/4 его
  высоты, либо 1/4 высоты окна браузера(если высота объекта выше высоты окна браузера) ему 
  добавляется класс '_active'. Если мы недокрутили до елемента, либо перекрутили то у него класс
  '_active' убирается. */
  function animOnScroll() {
    for (let index = 0; index < animTitle.length; index++) {
      const animItem = animTitle[index]; // Получаем каждый объект отдельно
      const animItemHeight = animItem.offsetHeight; // Получаем высоту объекта
      const animItemOffset = offset(animItem).top; // Позиция объекта относительно верха
      const animStart = 4; // Коэффициент резулирующий момент старта анимации

      // Настройка момента старта анимации
      let animItemPoint = window.innerHeight - animItemHeight / animStart;

      // Для случая когда анимированный объект выше по высоте чем окно браузера
      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }

      // Добавляем элементам класс при определенных условиях
      if ((scrollY > animItemOffset - animItemPoint) && scrollY < (animItemOffset + animItemHeight)) {
        animItem.classList.add('_active-anim');
      } else { // Убрать класс нужно для повторной анимации объекта
        /* Наличие у объекта класса '_anim-no-hide' говорит о том что не нужно объект  
        повторно анимировать если опять на него проскролили */
        if (!animItem.classList.contains('_anim-no-hide-title')) {
          animItem.classList.remove('_active-anim');
        }
      }
    }
  }
  function offset(el) {// Корректно и кроссбраузерно выщитывает позиция объекта относительно верха
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
  }

  setTimeout(function () {
    animOnScroll();
  }, 300);
}

const animItems = document.querySelectorAll("._anim-item"); // Элементы которые нужно анимировать
if (animItems.length > 0) {
  window.addEventListener('scroll', animOnScroll);
  /* Что происходит: Для каждого элемента который имеет класс '_anim-item' при достижении 1/4 его
  высоты, либо 1/4 высоты окна браузера(если высота объекта выше высоты окна браузера) ему 
  добавляется класс '_active'. Если мы недокрутили до елемента, либо перекрутили то у него класс
  '_active' убирается. */
  function animOnScroll() {
    for (let index = 0; index < animItems.length; index++) {
      const animItem = animItems[index]; // Получаем каждый объект отдельно
      const animItemHeight = animItem.offsetHeight; // Получаем высоту объекта
      const animItemOffset = offset(animItem).top; // Позиция объекта относительно верха
      const animStart = 4; // Коэффициент резулирующий момент старта анимации

      // Настройка момента старта анимации
      let animItemPoint = window.innerHeight - animItemHeight / animStart;

      // Для случая когда анимированный объект выше по высоте чем окно браузера
      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }

      // Добавляем элементам класс при определенных условиях
      if ((scrollY > animItemOffset - animItemPoint) && scrollY < (animItemOffset + animItemHeight)) {
        animItem.classList.add('_active');
      } else { // Убрать класс нужно для повторной анимации объекта
        /* Наличие у объекта класса '_anim-no-hide' говорит о том что не нужно объект  
        повторно анимировать если опять на него проскролили */
        if (!animItem.classList.contains('_anim-no-hide')) {
          animItem.classList.remove('_active');
        }
      }
    }
  }
  function offset(el) {// Корректно и кроссбраузерно выщитывает позиция объекта относительно верха
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
  }

  setTimeout(function () {
    animOnScroll();
  }, 300);
}


