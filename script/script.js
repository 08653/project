"use strict";
document.addEventListener("DOMContentLoaded", () => {
    // * 1. Начало.
    // * 2. Находим кнопку входа/регистрации и присваиваем переменной.
    // * 3. При клике на кнопку входа/регистрации форма становится видимой:
    // *    3.1. Да: 
    // *        3.1.1. Форма открывается.
    // *    3.2. Нет: продолжаем.
    // * 4. Конец

    const intensiveImg = document.querySelector(".menu__item");
    intensiveImg.addEventListener('mouseenter', () => {
        console.log("Мышка наведена на кнопку, показываем форму");
    });

});
