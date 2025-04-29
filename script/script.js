"use strict";
document.addEventListener("DOMContentLoaded", () => {
    // * 1. Начало.
    // * 2. Находим кнопку входа/регистрации и форму, присваиваем переменные.
    // * 3. При клике на кнопку входа/регистрации форма становится видимой:
    // *    3.1. Да: 
    // *        3.1.1. Форма открывается.
    // *    3.2. Нет: продолжаем.
    // * 4. Конец

    const headerButton = document.querySelector(".menu__button");
    const popupDialog = document.querySelector(".dialog");

    if (headerButton && popupDialog){

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

    const formApplication = document.querySelector("#form"); 
// Проверяем, существует ли элемент formApplication
if (formApplication) {  
// Добавляем обработчик события для отправки формы
   formApplication.addEventListener("submit", (event) => {
     event.preventDefault(); // Предотвращаем отправку формы
    // Объявляем переменные "username", "tel","email",   и помещаем в нее элементы с id из формы
     const name = formApplication.querySelector("#name").value;
     const surname = formApplication.querySelector("#surname").value;
     const tel = formApplication.querySelector("#phone").value;

     // Объявляем переменную modalMessage и помещаем в нее элемент для отображения сообщений о статусе заявки
const modalMessage = popupDialog.querySelector("#application-message");
    
      // Проверка длины имени пользователя
      if (name.length < 3) {
         modalMessage.textContent = "Имя пользователя должно содержать не менее 3 символов";
         modalMessage.style.color = "red"; // Устанавливаем цвет сообщения об ошибке
         return;
      }
    
       // Проверка номера телефона
      if (!/^\d{10,}$/.test(tel)) {
          modalMessage.textContent = "Номер телефона должен содержать только цифры и быть не менее 10 символов";
          modalMessage.style.color = "red"; // Устанавливаем цвет сообщения
          return;
      }
    
      // Здесь можно добавить отправку данных на сервер
      modalMessage.textContent = "Заявка отправлена!";
      modalMessage.style.color = "green"; // Устанавливаем цвет сообщения для успешной отправки
    
      // Записываем данные в localStorage
      window.localStorage.setItem("name", name);
      window.localStorage.setItem("surname", surname);
      window.localStorage.setItem("phone", tel);
});
}

}
    //3.4 Слайдер изображений
    let currentIndex = 0;
    const slider = document.querySelectorAll(".reviews__item");
    const prevButton = document.querySelector(".reviews__left");
    const nextButton = document.querySelector(".reviews__right");
    const visibleCards = 3;
    updateSlider();

    prevButton.addEventListener("click", () => {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = slider.length - visibleCards;
        }
        updateSlider();
    });

    nextButton.addEventListener("click", () => {
        if (currentIndex < slider.length - visibleCards) {
            currentIndex++;
        }
        else {
            currentIndex = 0;
        }
        updateSlider();
    });
    function updateSlider() {
        slider.forEach((item, index) => {
            if (index >= currentIndex && index < currentIndex + visibleCards) {
                item.style.display = "block";
            }
            else {
                item.style.display = "none";
            }
        });
    };
    //3.4 Формирование массива из частей заголовков
    const TourContainer = document.querySelector(".inspiration");

    //  проверяем существует ли элемент TrenersContainer, если он существует то переходим далее
    if (TourContainer) {
        //далее создаем массив dataTitleTreners, который содержит строки с именами тренеров.(здесь уже пишем те значения, которые надо подставить вместо слова Тренер 1, Тренер 2 и т.д)
        const dataTitleTour = [
            "Экстремальные путешествия",
            "Семейный отдых",
            "Романтические поездки"
        ];

        //Объявляем переменную titleTreners и сохраняем в нее все элементы на странице с классом treners__subtitle (где должны стоять имена тренеров)
        const titleTour = TourContainer.querySelectorAll(".inspiration__subtitle");

        // Проходим по каждому элементу массива titleTreners с помощью цикла forEach. Внутри функции 2 переменные: item – текущий заголовок, а index — его индекс в массиве.
        titleTour.forEach((item, index) => {

            //здесь обновляем значение текущего заголовка (textContent) на новое значение из массива dataTitleCards, используя индекс текущего заголовка.
            item.textContent = dataTitleTour[index];
        });
    };
    //3.5 Динамический вывод карточек
    // const cardsInsriration = document.querySelector('.inspiration');
    // if (cardsInsriration) {
    //     const inspirationItem = cardsInsriration.querySelector('.inspiration__wrapper');

    //     const cardsInspitationData = {
    //         Inspiration1: {
    //             level: 'Экстремальные путешествия',
    //             description: 'Специализированные туры для искателей острых ощущений',
    //             image: 'images/extreme.jpg',
    //             button: 'Узнать больше'
    //         },
    //         Inspiration2: {
    //             level: 'Семейный отдых',
    //             description: 'Лучшие места для отдыха с детьми',
    //             image: 'images/family.jpg',
    //             button: 'Узнать больше'
    //         },
    //         Inspiration3: {
    //             level: 'Романтические поездки',
    //             description: 'Незабываемые моменты для влюбленных',
    //             image: 'images/romantic.jpg',
    //             button: 'Узнать больше'
    //         }
    //     }
    //     const createCard = (level, description, image, button) => {
    //         const card = `
    //         <article class="inspiration__item">
    //                 <h3 class="inspiration__subtitle">${level}</h3>
    //                 <p class="inspiration__description">${description}</p>
    //                 <img class="inspiration__image" src="${image}" alt="Экстремальные путешествия"
    //                     width="600">
    //                 <button class="inspiration__button button">${button}</button>
    //             </article>
    //             `;
    //         return card;
    //     }
    //     for (const cardKey in cardsInspitationData) {
    //         const card = cardsInspitationData[cardKey];
    //         const cardElement = createCard(card.level, card.description, card.image, card.button);
    //         inspirationItem.insertAdjacentHTML('beforeend', cardElement);
    //     }
    // }
    //3.6 Preloader
    const preloader = document.querySelector(".preloader");
    const content = document.querySelector(".content");
    if (preloader && content) {
        setTimeout(() => {
            // Скрываем прелоадер
            preloader.style.opacity = "0";
            preloader.style.visibility = "hidden";

            // Показываем контент
            content.style.display = "block";

            // Удаляем элемент из DOM
            preloader.remove();
        }, 3000); // Задержка 3 секунды
    }
    //3.6 Вывод с помощью json.
    const cardsInsriration = document.querySelector('.inspiration');
    if (cardsInsriration) {
        const inspirationItem = cardsInsriration.querySelector('.inspiration__wrapper');
        const apiUrl = "data.json";
        const createCard = (level, description, image, button) => {
            const card = `
                        <article class="inspiration__item">
                                <h3 class="inspiration__subtitle">${level}</h3>
                                <p class="inspiration__description">${description}</p>
                                <img class="inspiration__image" src="${image}" alt="Экстремальные путешествия"
                                    width="600">
                                <button class="inspiration__button button">${button}</button>
                            </article>
                            `;
            return card;
        }
        // Загрузка данных с сервера
        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                console.log(data); // Данные
                console.log(typeof data); // Тип полученных данных

                data.forEach((item) => {
                    const cardElement = createCard(
                        item.level,
                        item.description,
                        item.image,
                        item.button
                    );
                    inspirationItem.insertAdjacentHTML("beforeend", cardElement);

                });
            })
            .catch(error => {
                console.error('Ошибка при загрузке данных:', error);
            });
    }
    //3.7 Карусель (слайдер).
    const slider1 = document.querySelector('.swiper');
    if (slider1) {
        const swiper = new Swiper(slider1, {
            // Дополнительные параметры
            slidesPerView: 2, // Количество слайдов на экране
            spaceBetween: 30, // Расстояние между слайдами
            loop: true,  // Зацикливание слайдов

            // Пагинация
            pagination: {
                el: '.swiper-pagination',
            },

            // Навигационные стрелки
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    }
});