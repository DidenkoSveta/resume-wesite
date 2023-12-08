window.onload = function() {
   // Проверяем, есть ли в адресе хэш и перемещаемся в начало страницы
   if (window.location.hash) {
     setTimeout(function() {
       window.scrollTo(0, 0);
     }, 1); // Ставим задержку, чтобы прокрутка сработала после автоматической прокрутки браузером
   }
 };
 