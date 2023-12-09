document.addEventListener('DOMContentLoaded', () => {
  // Объекты с переводами
  const translations = {
    en: {
      'header__logo': 'Didenko Svetlana',
      'hello': 'Hello! <br>I\'m ',
      'hero__title-name': 'Svetlana,<br>HTML-Coder',
      'footer__nav-link__portfolio': 'Portfolio',
      'footer__nav-link__about': 'About me',
      'footer__nav-link__skills': 'Skills',
      'footer__nav-link__education': 'Education',
      'nav__link-portfolio': 'Portfolio',
      'nav__link-skills': 'Skills',
      'nav__link-about': 'About me',
      'nav__link-education': 'Education',
      'nav__link-contacts': 'Contacts',
      'hero__email': 'Email me',
      'hero__download-cv': 'Download CV',
      'projects__title': 'Latest Projects',
      'projects__name-corporate': 'Latest Projects',
      'projects__btn': 'View more',
      'skills__title': 'Technical skills',
      'skills__item-bem': 'BEM methodology',
      'skills__item-animations': 'CSS animations',
      'skills__item-git': 'Version Control / Git',
      'skills__item-wp': 'Layouts onto WordPress',
      'skills__item-api': 'Service APIs',
      'skills__item-optimization': 'Optimization and Promotion Website',
      'skills__item-semantic': 'Semantic, adaptive, valid, cross-browser layout',
      'about-me__title': 'About me',
      'about-me__content1': 'Web Developer specializing in creating responsive and modern websites. My expertise includes in-depth knowledge of HTML5, CSS3, and BEM methodology, along with proficiency in design tools such as Figma and PSD. I value quality, pay attention to detail, and am committed to continuous professional growth.',
      'about-me__content2': 'I am seeking opportunities to apply my web development skills and aspire to work in a team where I can make a significant contribution and continue to evolve as a professional.',
      'education__title': 'Education',
      'education__degree': 'COMPUTER SCIENCE AND AUTOMATED SYSTEMS PROGRAMMER',
      'education__institution': 'Siberian State University of Telecommunications and Informatics, Russia',
      'soft-skills__title': 'Soft skills',
      'soft-skills__item1': 'Eager to collaborate in a team environment and adept at jointly solving problems, open to learning and professional development within a group.',
      'soft-skills__item2': 'Focused on details to avoid errors and enhance work quality.',
      'soft-skills__item3': 'Actively seeking ways to improve work processes and implement new ideas, independent in problem-solving and organized in project management.',
      'languages__title': 'Languages',
      'languages__name1': 'RUSSIAN',
      'languages__name2': 'ENGLISH',
      'languages__lavel-text1': 'native',
      'languages__lavel-text2': 'elementary',
    },
    ru: {
      'header__logo': 'Диденко Светлана',
      'hello': 'Привет! <br>Я ',
      'hero__title-name': 'Светлана,<br>Верстальщик',
      'footer__nav-link__portfolio': 'Портфолио',
      'footer__nav-link__about': 'Обо мне',
      'footer__nav-link__skills': 'Навыки',
      'footer__nav-link__education': 'Образование',
      'nav__link-portfolio': 'Портфолио',
      'nav__link-skills': 'Навыки',
      'nav__link-about': 'Обо мне',
      'nav__link-education': 'Образование',
      'nav__link-contacts': 'Контакты',
      'hero__email': 'Написать мне',
      'hero__download-cv': 'Скачать резюме',
      'projects__title': 'Последние проекты',
      'projects__name-corporate': 'Корпоративный веб-сайт',
      'projects__btn': 'Смотреть',
      'skills__title': 'Технические навыки',
      'skills__item-bem': 'Методология БЭМ',
      'skills__item-animations': 'CSS-анимации',
      'skills__item-git': 'Системы контроля версий / Git',
      'skills__item-wp': 'Верстка для WordPress',
      'skills__item-api': 'Сервисные API',
      'skills__item-optimization': 'Оптимизация и продвижение веб-сайтов',
      'skills__item-semantic': 'Семантическая, адаптивная, валидная, кроссбраузерная верстка',
      'about-me__title': 'Обо мне',
      'about-me__content1': 'Веб-разработчик, специализирующийся на создании отзывчивых и современных веб-сайтов. Мой опыт включает глубокие знания HTML5, CSS3 и методологии БЭМ, а также владение инструментами дизайна, такими как Figma и PSD. Я ценю качество, уделяю внимание деталям и стремлюсь к непрерывному профессиональному росту.',
      'about-me__content2': 'Я ищу возможности применить свои навыки веб-разработки и стремлюсь работать в команде, где я смогу внести значительный вклад и продолжить свое профессиональное развитие.',
      'education__title': 'Образование',
      'education__degree': 'Программист компьютерных систем и автоматизированных систем управления',
      'education__institution': 'Сибирский государственный университет телекоммуникаций и информатики, Россия',
      'soft-skills__title': 'Личные качества',
      'soft-skills__item1': 'Стремлюсь к сотрудничеству в командной среде и умею совместно решать проблемы, открыта к обучению и профессиональному развитию в группе.',
      'soft-skills__item2': 'Сосредоточена на деталях, чтобы избежать ошибок и повысить качество работы.',
      'soft-skills__item3': 'Активно ищу способы улучшения рабочих процессов и внедрения новых идей, самостоятельна в решении проблем и организованна в управлении проектами.',
      'languages__title': 'Языки',
      'languages__name1': 'РУССКИЙ',
      'languages__name2': 'АНГЛИЙСКИЙ',
      'languages__lavel-text1': 'родной',
      'languages__lavel-text2': 'начальный уровень',
    }
  };

  const typingElement = document.querySelector('.hero__title-name');
  let textToType = translations['en']['hero__title-name'];
  let typedText = '';
  let charIndex = 0;

  function typeCharacter() {
    if (charIndex < textToType.length) {
      if (textToType[charIndex] === '<' && textToType.substring(charIndex, charIndex + 4) === '<br>') {
        typedText += '<br>';
        charIndex += 4;
      } else {
        typedText += textToType[charIndex++];
      }
      typingElement.innerHTML = typedText;
      setTimeout(typeCharacter, 60);
    }
  }

  function changeLanguage(lang) {
    Object.keys(translations[lang]).forEach((key) => {
      const elements = document.querySelectorAll('.' + key);
      elements.forEach((element) => {
        element.innerHTML = translations[lang][key];
      });
    });

    textToType = translations[lang]['hero__title-name'];
    typedText = '';
    charIndex = 0;
    typeCharacter();
  }

  document.querySelector('.lang-en').addEventListener('click', () => changeLanguage('en'));
  document.querySelector('.lang-ru').addEventListener('click', () => changeLanguage('ru'));

  // Анимация появления элементов
  let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  const elementsToAnimate = document.querySelectorAll('.skills__item, .about-me, .education, .languages, .soft-skills, .projects__item');
  elementsToAnimate.forEach(item => {
    observer.observe(item);
  });

  typeCharacter();
});