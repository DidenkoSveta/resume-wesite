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
       setTimeout(typeCharacter, 150); // Задержка перед печатанием следующего символа
     }
   }
 
   typeCharacter(); // Начать эффект печатания
 });
 