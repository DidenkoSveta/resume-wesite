// Анимация печати заголовка h1
document.addEventListener('DOMContentLoaded', function() {
   const typingElement = document.querySelector('.hero__title-name'); // Элемент, в котором будет эффект печатания
   const textToType = 'Svetlana,<br>HTML-Coder'; // Текст для печатания с HTML тегом для переноса строки
   let typedText = ''; // Начальный текст пуст
   let charIndex = 0; // Индекс текущего символа
 
   function typeCharacter() {
     if (charIndex < textToType.length) {
       if(textToType[charIndex] === '<') {
         // Добавляем тег <br> целиком, а не по одному символу
         typedText += '<br>';
         charIndex += 4; // Перемещаем индекс за тег <br>
       } else {
         typedText += textToType[charIndex++];
       }
       typingElement.innerHTML = typedText; // Используем innerHTML для вставки HTML-содержимого
       setTimeout(typeCharacter, 60); // Задержка перед печатанием следующего символа
     }
   }
 
   typeCharacter(); // Начать эффект печатания
 });
 

//Анимация появления карточек навыков
document.addEventListener("DOMContentLoaded", function() {
   let observer = new IntersectionObserver((entries, observer) => {
     entries.forEach(entry => {
       if (entry.isIntersecting) {
         entry.target.classList.add("in-view");
         observer.unobserve(entry.target);
       }
     });
   }, {threshold: 0.1});
 
   // Наблюдаем за элементами .skills__item, .about-me и .education
   const elementsToAnimate = document.querySelectorAll('.skills__item, .about-me, .education, .languages, .soft-skills, .projects__item');
   elementsToAnimate.forEach(item => {
     observer.observe(item);
   });
 });
 
 