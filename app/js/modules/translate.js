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
      'project-overview__title-donart': 'Development of a Corporate Website for "Don-Art"',
      'project-overview__subtitle-donart': 'Industrial Chemical Manufacturer',
      'project-overview__link': 'Visit Website',
      'project-overview__technologies-title': 'Stack',
      'project__heading01': 'Challenge',
      'project__description01': 'The goal was to create a modern and functional website that serves as the foundation for increasing brand awareness, acquiring new clients, and establishing long-term business relationships.',
      'project__description02': 'The website was developed with the goal of representing the company in the digital space, ensuring easy access to a full product catalog. The design focused on clarity and engaging visuals that reflect the brand\'s premium positioning in the market.',
      'project__heading02': 'Objective',
      'feature-text01': 'Market Analysis',
      'feature-text02': 'Website prototyping',
      'feature-text03': 'Concept & Design',
      'feature-text04': 'Responsive Layout',
      'feature-text05': 'WordPress Integration',
      'feature-text06': 'Hosting Setup',
      'result__text-donart1': 'As a result of our work on the "Don-Art" website, we have developed a functional tool that is user-friendly and meets the current market demands.',
      'result__text-donart2': 'The design of the site harmoniously integrates with the "Don-Art" corporate style, and thanks to the responsive design, it looks equally good on all types of devices. The simplicity of content management through WordPress and basic SEO optimization will allow the company to independently maintain therelevance of information on the site.',
      'result__text-donart3': 'This project demonstrates my ability to create practical and effective web solutions aimed at improving business processes and strengthening the company\'s position in the digital space.',
      'project-overview__title-wp': 'Development of a Corporate Website for "WebPerspective"',
      'project-overview__subtitle-wp': 'Internet marketing agency',
      'project__description-wp-01': 'To craft a contemporary website that introduces the agency and its services to users. The client\'s stipulation was to avoid creative designs and complex components; instead, the focus was to adhere to standard patterns to ensure the site\'s comprehensibility for the target audience.',
      'project__description-wp-02': 'The design was steered towards minimalism, eschewing unnecessary visual noise in favor of large, bold elements. Emphasis was placed on content and typography to ensure clarity. A straightforward structure was implemented to prevent user overload and facilitate ease of navigation. The outcome is a website that is simple yet stylish.',
      'result__text-wp1': 'The resulting "WebPerspective" website is a functional tool that is both user-friendly and meets current market demands. Its design is in harmony with the agency\'s corporate style, and thanks to the responsive layout, it presents well on various devices.',
      'result__text-wp2': 'The ease of content management via WordPress and foundational SEO optimization enables the agency to maintain the site\'s information relevance independently.',
      'result__text-wp3': 'This project showcases my ability to create practical and effective web solutions tailored to enhance business processes and solidify the company\'s digital presence.',
      'project-overview__title-ts': 'Corporate Website Development for "TS-PRIME"',
      'project-overview__subtitle-ts': 'Metalworking Equipment Supplier',
      'project__description-ts-01': 'The task was to develop a modern website for TS-Prime, providing users with comprehensive information about the company\'s services. The client demanded a unique design based on provided examples. The site needed to be intuitively understandable for a broad target audience while maintaining a modern appearance.',
      'project__description-ts-02': 'A unique design was implemented in a strict style. The site is enriched with numerous elements but avoids information overload. Dynamic animations on CSS and JavaScript were introduced to enhance perception. An equipment and services catalog was created, along with a side menu for easier navigation through categories. The design was executed in a light theme with orange accents, reflecting the corporate style of the company.',
      'result__text-ts1': 'The development of the website for "TS-PRIME" marked a significant step for the company in the digital arena. The resulting website is a convenient tool for users and meets current market standards. It features a clear structure and responsive design, ensuring its effective use across all devices. The capability for TS-PRIME to manage content and basic SEO optimization allows for maintaining the site\'s relevancy.',
      'result__text-ts2': 'This project showcases my ability to develop practical web solutions that contribute to enhancing the company\'s operational efficiency and its online presence.',
      'project-overview__title-didenko': 'Development of a business card website for a marketer',
      'project-overview__subtitle-didenko': 'Dmitry Didenko - Internet marketer',
      'project__description-didenko-01': 'To create a presentation website for internet marketer Dmitry Didenko. The primary objective is to acquaint potential clients with Dmitry\'s services and professional approach. A key focus was on developing a unique design that is intuitive for a broad audience and reflects modern web design trends.',
      'project__description-didenko-02': 'A unique design was developed in a strict, business style using dark color tones to emphasize Dmitry\'s professionalism and serious approach. The site features dynamic animations implemented through CSS and JavaScript, adding modern flair and vibrancy. The structure of the site is thoughtfully designed to ensure user-friendly navigation across various sections, despite the presence of multiple informational elements.',
      'result__text-didenko1': 'Developing Dmitry Didenko\'s website marked an important step in his professional growth. The site serves as an effective tool to showcase his skills and services in internet marketing.',
      'result__text-didenko2': 'It combines simplicity with functionality, making it easy to convey important information to visitors. The website\'s design is executed in a professional style, reflecting Dmitry\'s expertise. Animations and a clear structure render the site engaging and modern, increasing its appeal to potential clients.',
      '': '',
      '': '',
      '': '',
      '': '',
      '': '',
      '': '',
    },
    ru: {
      'header__logo': 'Диденко Светлана',
      'hello': 'Привет! <br>Я ',
      'hero__title-name': 'Светлана,<br>Верстальщик',
      'footer__nav-link__portfolio': 'Проекты',
      'footer__nav-link__about': 'Обо мне',
      'footer__nav-link__skills': 'Навыки',
      'footer__nav-link__education': 'Образование',
      'nav__link-portfolio': 'Портфолио',
      'nav__link-skills': 'Навыки',
      'nav__link-about': 'Обо мне',
      'nav__link-education': 'Образование',
      'nav__link-contacts': 'Контакты',
      'hero__email': 'Написать',
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
      'project-overview__title-donart': 'Разработка корпоративного веб-сайта для \"Дон-Арт\"',
      'project-overview__subtitle-donart': 'Производитель промышленной химии',
      'project-overview__link': 'Посетить сайт',
      'project-overview__technologies-title': 'Технологии',
      'project__heading01': 'Задача',
      'project__description01': 'Целью было создание современного и функционального веб-сайта, который служит основой для повышения узнаваемости бренда, привлечения новых клиентов и установления долгосрочных деловых отношений.',
      'project__description02': 'Веб-сайт был разработан с целью представления компании в цифровом пространстве, обеспечивая легкий доступ к полному каталогу продукции. Дизайн был сфокусирован на ясности и привлекательной визуализации, отражающей премиальное позиционирование бренда на рынке.',
      'project__heading02': 'Решение',
      'feature-text01': 'Анализ рынка',
      'feature-text02': 'Прототипирование веб-сайта',
      'feature-text03': 'Концепция и дизайн',
      'feature-text04': 'Адаптивная верстка',
      'feature-text05': 'Интеграция с WordPress',
      'feature-text06': 'Настройка хостинга',
      'result__text-donart1': 'В результате работы над сайтом для "Дон-Арт" мы получили функциональный инструмент, который удобен для пользователей и отвечает текущим требованиям рынка.',
      'result__text-donart2': 'Дизайн сайта гармонично сочетается с корпоративным стилем "Дон-Арт", и благодаря адаптивной верстке сайт одинаково хорошо выглядит на всех типах устройств. Простота управления контентом через систему WordPress и базовая SEO оптимизация дадут возможность компании самостоятельно поддерживать актуальность информации на сайте.',
      'result__text-donart3': 'Этот проект демонстрирует мою способность к созданию практичных и эффективных веб-решений, направленных на улучшение бизнес-процессов и укрепление позиций компании в цифровом пространстве.',
      'project-overview__title-wp': 'Разработка корпоративного сайта для "WebPerspective"',
      'project-overview__subtitle-wp': 'Агентство интернет-маркетинга',
      'project__description-wp-01': 'Целью было создать современный сайт, который представит агентство и его услуги пользователям. Клиент настаивал избегать креативных дизайнов и сложных компонентов; вместо этого акцент был сделан на стандартных шаблонах, чтобы убедиться, что сайт понятен целевой аудитории.',
      'project__description-wp-02': 'Дизайн был направлен на минимализм, избегая ненужного визуального шума в пользу крупных, выразительных элементов. Основное внимание было уделено контенту и типографике для обеспечения ясности. Была реализована простая структура для предотвращения перегрузки пользователя и упрощения навигации. Результатом является сайт, который выглядит просто, но стильно.',
      'result__text-wp1': 'В результате работы над сайтом "WebPerspective" получился функциональный инструмент, который удобен для пользователей и соответствует современным требованиям рынка. Его дизайн гармонирует с корпоративным стилем агентства, и благодаря отзывчивой верстке он хорошо смотрится на различных устройствах.',
      'result__text-wp2': 'Простота управления контентом через WordPress и основы SEO-оптимизации дает агентству возможность самостоятельно поддерживать актуальность информации на сайте.',
      'result__text-wp3': 'Этот проект демонстрирует мою способность создавать практичные и эффективные веб-решения, нацеленные на улучшение бизнес-процессов и укрепление цифрового присутствия компании.',
      'project-overview__title-ts': 'Разработка корпоративного сайта для "TS-PRIME',
      'project-overview__subtitle-ts': 'Поставщик оборудования для металлообработки',
      'result__text-ts1': 'Создание веб-сайта для "TS-PRIME" стало значимым шагом для компании в цифровой среде. Разработанный сайт является удобным инструментом для пользователей и соответствует текущим рыночным стандартам. Сайт обладает четкой структурой и адаптивным дизайном, что обеспечивает его комфортное использование на всех устройствах. Возможность самостоятельного управления контентом и базовая SEO-оптимизация позволяют TS-PRIME поддерживать актуальность сайта.',
      'result__text-ts2': 'Этот проект демонстрирует мою способность разрабатывать практичные веб-решения, способствующие улучшению операционной эффективности компании и её позиций в интернете.',
      'project__description-ts-01': 'Задачей было разработать современный веб-сайт для TS-Prime, который предоставит пользователям полную информацию об услугах компании. Клиент требовал уникальный дизайн, на основе предоставленных примеров. Сайт должен быть интуитивно понятен широкой целевой аудитории и сохранять современный внешний вид.',
      'project__description-ts-02': 'Реализован уникальный дизайн в строгом стиле. Сайт обогащен множеством элементов, но без перегрузки информацией. Для улучшения восприятия введены динамические анимации на CSS и JavaScript. Был создан каталог оборудования и услуг, а также добавлено боковое меню для облегчения навигации по категориям. Дизайн выполнен в светлой теме с оранжевыми акцентами, отражающими корпоративный стиль компании.',
      'project-overview__title-didenko': 'Разработка сайта-визитки для маркетолога',
      'project-overview__subtitle-didenko': 'Дмитрий Диденко - Интернет-маркетолог',
      'project__description-didenko-01': 'Создать презентационный сайт для интернет-маркетолога Дмитрия Диденко. Основная задача - знакомство потенциальных клиентов с услугами и профессиональным подходом Дмитрия. Особое внимание уделено разработке уникального дизайна, который должен быть интуитивно понятен широкой аудитории и отражать современные тенденции веб-дизайна.',
      'project__description-didenko-02': 'Был разработан уникальный дизайн в строгом деловом стиле с использованием темных цветовых тонов, чтобы подчеркнуть профессионализм и серьезный подход Дмитрия. Сайт содержит динамические анимации, выполненные с помощью CSS и JavaScript, что добавляет современности и динамичности. Структура сайта продумана так, чтобы обеспечить удобную навигацию для пользователя по различным разделам, несмотря на наличие множества информационных элементов.',
      'result__text-didenko1': 'Разработка сайта Дмитрия Диденко стала важным этапом в его профессиональном росте. Сайт служит эффективным инструментом для демонстрации его навыков и услуг в области интернет-маркетинга.',
      'result__text-didenko2': 'Он сочетает в себе простоту и функциональность, что делает его удобным для передачи важной информации посетителям. Дизайн сайта выполнен в профессиональном стиле, отражающем экспертизу Дмитрия. Анимации и четкая структура делают сайт привлекательным и современным, увеличивая его привлекательность для потенциальных клиентов.',
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