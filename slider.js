
const slider = document.querySelector('.container'); // получаем элемент слайдера
const container = slider.querySelector('.cards'); // получаем контейнер слайдов
const items = container.querySelectorAll('.slider__item'); // получаем все слайды
const arrows = document.querySelectorAll('.slider__arrow'); // получаем обе стрелки

let currentSlide = 0; // устанавливаем текущий слайд

function showSlide(slideIndex) { // функция для перемещения слайдов
    container.style.transform = `translateX(-${slideIndex * items[0].offsetWidth * 3}px)`; // задаем значение для свойства transform, чтобы переместить контейнер в нужное место
}

arrows.forEach(arrow => { // добавляем обработчик события "click" на каждую стрелку
    arrow.addEventListener('click', () => { // при клике на стрелку
        if (arrow.classList.contains('slider__arrow--left')) { // если нажата стрелка влево
            currentSlide = (currentSlide === 0) ? items.length / 3 - 1 : currentSlide - 1; // устанавливаем новый текущий слайд
            container.appendChild(items[0]); // перемещаем первый слайд в конец контейнера
        } else { // если нажата стрелка вправо
            currentSlide = (currentSlide === items.length / 3 - 1) ? 0 : currentSlide + 1; // устанавливаем новый текущий слайд
            container.insertBefore(items[items.length - 1], items[0]); // перемещаем последний слайд в начало контейнера
        }
        showSlide(currentSlide); // вызываем функцию для перемещения слайдов с новым текущим слайдом
    });
});

showSlide(currentSlide); // вызываем функцию для перемещения слайдов с текущим слайдом при загрузке страницы
