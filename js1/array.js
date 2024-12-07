// Массив

const massivchik = [2, 4, "slovo", 8, "slovo1"];

// Каждый элемент имеет свой номер(индекс). Чтобы получить элмент с каким то индексом(пусть этот индекс будет i), тогда мы напишем массив[индекс] => например massivchik[3]. ВСЕ МАССИВЫ НУМЕРУЮТСЯ С НУЛЯ, Т.Е. ПЕРВЫЙ ЭЛЕМЕНТ ИМЕЕТ ИНДЕКС = 0

// Example 1:
console.log(massivchik[1]);


massivchik.length; // Значение длины массива(т.е. сколько в нем элементов)

// Exaple 2. Цикл for для массивов(смотри после 01:06:05)
// Задача: хотим вывести четные числа из массива numbers

// const numbers = [17, 2, 7182, 74, 55, 13, 9887];
// четное число <=> число делится на 2 без остатка

for (let i = 0; i < numbers.length; i++) { // i - индекс в массиве
    if (numbers[i] % 2 == 0) {
        console.log(`Число ${numbers[i]} четное`)
    } else {
        console.log(`Число ${numbers[i]} нечетное`)
    }
} 

// Методы в массивах
const methodsInArrays = [11, "hello", [1, 2, 3], "privet", 74];
methodsInArrays.push(15); // Добавление элемента в конец массива
methodsInArrays.pop(); // Удаление элемента с конца
massivchik.length; // Значение длины массива(т.е. сколько в нем элементов)
methodsInArrays.find(11); // Ищем элемент в массиве, если он есть - получаем индекс этого элемента, если нету - получаем undefined
methodsInArrays.reverse() // переворот массива
methodsInArrays.sort() // Сортировка элементов по возрастанию / алфавиту

// Цикл for-each
// Example 3. Выведем нечетные числа циклом for-each

methodsInArrays.forEach(element => {
    if(element % 2 == 1) {
        console.log(element); // Если бы не писали фор-ич, вместо элемент был бы methodsInArrays[i]
    }
})

// Доп. методы по типу for-each
const numbers = [17, 2, 7182, 74, 55, 13, 9887];

// выведем числа больше 300

numbers.filter(item => item > 300); // Изменяем содержимое массива, если не выполняется условие - удаляем элемент с массива
console.log(filter);

const numbersMoreThanHundred = numbers.map(el => el > 100); // в новый массив добавляем элементы где выполняется условие в старом массиве

