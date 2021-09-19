'use strict'

//Mobile menu and smooth scrolling
const iconsMenu = document.querySelector('.icon-menu'),
    menu = document.querySelector('.header__nav'),
    body = document.querySelector('body'),
    links = document.querySelector('.nav-list').querySelectorAll('a[href^="#"]');

let showHideMenu = () => {
    menu.classList.toggle('header__nav_active');
    body.classList.toggle('body-lock');
    iconsMenu.classList.toggle('icon-menu_active');
}

iconsMenu.addEventListener('click', () => {
    showHideMenu();
})

links.forEach(item => item.addEventListener('click', (e) => {
    if (menu.classList.contains('header__nav_active')) {
        showHideMenu();
    }
    e.preventDefault();
    const id = item.getAttribute('href').slice(1);
    document.getElementById(id).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}));


//Languages
const languages = {
    "russian": 100,
    "belarusian": 77,
    "english": 13,
}

const languagesList = document.querySelector('#languages-list');

let calcLevel = (result, idx) => {
    const levels = languagesList.querySelectorAll('.language__progress')[idx].querySelectorAll('.language__level');
    result = Math.ceil(result / 10);
    levels.forEach((elem, i) => {
        if (result === 10) {
            elem.classList.add('language__level_success')
        } else if (result > i + 1) {
            elem.classList.add('language__level_success')
        } else if (result === i + 1) {
            elem.classList.add('language__level_active')
        }
    });
}

let addLanguages = () => {
    let counter = 0;
    for (let language in languages) {
        languagesList.innerHTML +=
            `<li class="list__item language">
                                        <div class="language__caption">${language[0].toUpperCase() + language.slice(1)}</div>
                                        <div class="language__progress">                                        
                                            <span class="language__level"></span>
                                            <span class="language__level"></span>
                                            <span class="language__level"></span>
                                            <span class="language__level"></span>
                                            <span class="language__level"></span>
                                            <span class="language__level"></span>
                                            <span class="language__level"></span>
                                            <span class="language__level"></span>
                                            <span class="language__level"></span>
                                            <span class="language__level"></span>
                                        </div>
                                    </li>`;
        calcLevel(languages[language], counter++);
    }
}
addLanguages();




console.log("Привет коллега!")
console.log("1. [x] вёрстка валидная - (10)");
console.log("2. [x] вёрстка семантическая(header,nav,main,footer,section,figure,figcaption,time,picture,h1,h2) - (20)");
console.log("3. [x] для оформления СV используются css-стили - (10)");
console.log("4. [x] контент размещается в блоке, который горизонтально центрируется на странице - (10)");
console.log("5. [x] вёрстка адаптивная: ни на одном из разрешений экрана до 320px... - (10)");
console.log("6. [x] есть адаптивное бургер-меню. Ссылки в пунктах меню ведут на основные разделы CV... - (10)");
console.log("7. [x] на странице СV присутствует изображение - фото или аватарка автора CV... - (10)");
console.log("8. [x] контакты для связи и перечень навыков оформлены в виде списка ul > li - (10)");
console.log("9. [x] CV содержит контакты для связи, краткую информацию о себе, перечень навыков... - (10)");
console.log("10. [x] CV содержит пример вашего кода с подсветкой кода... - (10)");
console.log("11. [x] CV содержит изображения-ссылки на выполненные вами проекты... - (10)");
console.log("12. [x] CV выполнено на английском языке - (10)");
console.log("13. [x] Выполнены требования к Pull Request: есть ссылка на задание, скриншот страницы СV, ссылка на деплой... (10)");
console.log("14. [ ] есть видеорезюме автора CV на английском языке - (0)");
console.log("15. [x] дизайн, оформление, качество выполнения CV не ниже чем в примерах CV - (10)");
console.log("Результат: (140/150) + 10(дизайн, оформление, качество) = 150 баллов");
console.log("Спасибо за внимание!");