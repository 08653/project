"use strict";
document.addEventListener("DOMContentLoaded", () => {
    // * 1. Начало.
    // * 2. Находим кнопку входа/регистрации и форму, присваиваем переменные.
    // * 3. При клике на кнопку входа/регистрации форма становится видимой:
    // *    3.1. Да: 
    // *        3.1.1. Форма открывается.
    // *    3.2. Нет: продолжаем.
    // * 4. Конец
});
    const headerButton = document.querySelector(".menu__button");
    const popupDialog = document.querySelector(".dialog");

    if (headerButton && popupDialog)

        console.log("Существует кнопка и форма");
        headerButton.addEventListener("click", () => {
            popupDialog.removeAttribute("hidden");
        });
    // Закрытие модального окна при клике его вне области
    window.addEventListener("click", (event) => {
        if (event.target === popupDialog) {
            popupDialog.setAttribute("hidden", true);
        }
        const closeModalButton = document.querySelector(".popup__close");
        closeModalButton.addEventListener("click", () => {
            popupDialog.setAttribute("hidden", true);
        });
        
});