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

// Изменение стилей активной кнопки
document.querySelectorAll('.language-switcher__button').forEach(button => {
  button.addEventListener('click', function() {
    // Сначала убираем класс активности со всех кнопок
    document.querySelectorAll('.language-switcher__button').forEach(btn => {
      btn.classList.remove('language-switcher__button--active');
    });
    
    // Добавляем класс активности к кнопке, по которой был совершён клик
    this.classList.add('language-switcher__button--active');

    // Вызываем функцию смены языка
    changeLanguage(this.dataset.language);
  });
});

function changeLanguage(lang) {
  // Ваш код для смены языка
}
