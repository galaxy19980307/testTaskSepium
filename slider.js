const container = document.querySelector('.container');
const cards = container.querySelector('.cards');
const items = cards.querySelectorAll('.slider__item');
const arrows = container.querySelectorAll('.slider__arrow');

let currentSlide = 0;



// arrows.forEach(arrow => { // добавляем обработчик события "click" на каждую стрелку
//     arrow.addEventListener('click', () => { // при клике на стрелку
//         if (arrow.classList.contains('slider__arrow--left')) { // если нажата стрелка влево
//             currentSlide = (currentSlide === 0) ? items.length / 3 - 1 : currentSlide - 1; // устанавливаем новый текущий слайд
//             container.insertBefore(items[items.length - 1], items[0]); // перемещаем последний слайд в начало контейнера
//         } else { // если нажата стрелка вправо
//             currentSlide = (currentSlide === items.length / 3 - 1) ? 0 : currentSlide + 1; // устанавливаем новый текущий слайд
//             container.appendChild(items[0]); // перемещаем первый слайд в конец контейнера
//         }
//         showSlide(currentSlide); // вызываем функцию для перемещения слайдов с новым текущим слайдом
//     });
// });

function showImage(index) {
    items[currentSlide].classList.remove('active');
    items[index].classList.add('active');
    currentSlide = index;
}

document
    .querySelector('.arrows.controlls')
    .addEventListener('click', function (event) {
        if (event.target.classList.contains('prev')) {
            let index = currentSlide - 1;
            if (index < 0) {
                index = items.length - 1;
            }
            showImage(index);
        } else if (event.target.classList.contains('next')) {
            let index = currentSlide + 1;
            if (index >= items.length) {
                index = 0;
            }
            showImage(index);
        }
    });

showImage(currentSlide);

