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
 




