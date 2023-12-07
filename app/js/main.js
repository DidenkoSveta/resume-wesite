 //burger menu
 let menuOpenButton = document.querySelector('.header__burger');
 let menu = document.querySelector('.header__menu');
 
 // Обработчик клика для открытия меню
 menuOpenButton.addEventListener('click', () => {
   menu.classList.add('show');
 });
 
 // Обработчик клика на документе для закрытия меню
 document.addEventListener('click', (e) => {
   // Проверяем, кликнул ли пользователь на кнопку закрытия или вне меню
   if (e.target === menuOpenButton) {
     // Не делать ничего, если кликнули на кнопку открытия
     return;
   }
 
   if (e.target.closest('.header__close') || !e.target.closest('.header__menu')) {
     // Закрыть меню, если кликнули на кнопку закрытия или вне меню
     menu.classList.remove('show');
   }
 });
 