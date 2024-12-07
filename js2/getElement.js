const hello = document.querySelector('.hello'); // Вытянули элемент по классу
console.log(hello.textContent); // Получаем содержимое элемента со страницы без тега и прочей фигни

const divchik = document.getElementsByClassName('block');
// getElemntById; getElementByTagName; это все фигня используй querySelector()!!!

const arrayOfTexts = document.querySelectorAll('.common_text'); // typeof(arrayOfTexts) == 'NodeList'