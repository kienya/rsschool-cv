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

