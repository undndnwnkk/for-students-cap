// Операторы:
// + - * / % += -= *= /= %= != == === > < >= <= ++ -- && ||

const firstNumber = 15;
const secondNumber = 10;

// Операторы сложения и т.д.

let result = firstNumber + secondNumber;
// result = firstNumber - secondNumber;
// result = firstNumber * secondNumber;
// result = firstNumber / secondNumber;

// result = firstNumber % secondNumber; // Остаток от деления

// Операторы переприсваивания

// result += 5; // result = result + 5 => result = 25 + 5
// result -= 5;
// result /= 5;
// result *= 5;
// result %= 5;

// Операторы сравнения

result == 5; // равен ли result пятерке???? => возращает bool значение
result != 5;
result === 5; 
result >= 5;
result <= 5;
result > 5;
result < 5;

// Пример строгого-нестрогого
const word = "12";
const number = 12;


// if(word == number) // true, так как двойное сравнение не смотрит на тип данных

// if(word === number) // false, так как смотрит на тип

// Операторы логические

// &&, || => и, или
const newNum = 28;

if(newNum > 2 && newNum < 20 && newNum != 17) {
    console.log(newNum);
}

if(newNum > 7 || newNum < 1) {
    console.log(newNum);
}

// Оператор инкримента

const numberTwo = 6;
numberTwo++; // numberTwo += 1;
numberTwo--;