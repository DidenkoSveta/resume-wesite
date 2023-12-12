document.addEventListener("DOMContentLoaded", function() {
  var newUrl = window.location.href.replace(/\.html/g, '');
  window.history.replaceState(null, null, newUrl);
});




//Убираем пустую якорную ссылку
window.onload = function() {
   // Проверяем, есть ли в адресе хэш и перемещаемся в начало страницы
   if (window.location.hash) {
     setTimeout(function() {
       window.scrollTo(0, 0);
     }, 1); // Ставим задержку, чтобы прокрутка сработала после автоматической прокрутки браузером
   }
 };
 


 //Правная прокрутка по якорям
 document.addEventListener('DOMContentLoaded', () => {
  const anchors = document.querySelectorAll('a[href^="#"]');

  for (let anchor of anchors) {
    anchor.addEventListener('click', function(e) {
      e.preventDefault(); // Предотвращаем стандартное поведение клика по ссылке

      let targetId = this.getAttribute('href'); // Получаем значение атрибута href
      let targetElement = document.querySelector(targetId); // Находим элемент, на который ссылается якорь

      if (targetElement) {
        targetElement.scrollIntoView({ 
          behavior: 'smooth', // Плавная прокрутка
          block: 'start' // Прокрутка до начала элемента
        });
      }
    });
  }
});

