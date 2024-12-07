// Функция - кусок кода, который мы как то называем и используем далее для того, чтобы не повторять код(т.е. выполнять DRY)

// DRY - Dont repeat yourself => не повторяй себя(свой код)
 
// function declaration => когда пишем function название (что принимаем) {тело функции}
// fucntion arrow => const/let название => (что принимаем) => {тело функции} 

// Example 1. Имеем n массивов, вывести массивы, у которых все элементы - строки

function allString(array) {
    let res = true;
    array.forEach(item => {
        if(typeof(item) != "string") {
            res = false;
        }
    })

    if(res == true) {
        console.log(array);
    }
}

const first = [1, "priv", 27, 4, "hello"];
const second = ["privet", "kak", "dela"];
const third = [1, 3, 5, 7];
const fourth = ["u", "menya", "vse", "norm"];
let res = true; // Все элементы - строки

allString(first);
allString(second);
allString(third);
allString(fourth);

// Example 2. Даны обьекты(люди). Если их возраст больше 18 - выводи: Человеку с именем name больше 18 лет

const human1 = {
    name: "Danil",
    age: 7
}

const human2 = {
    name: "Andrey",
    age: 788575
}

const human3 = {
    name: "Chill Guy",
    age: "im just chill guy"
}

const checkAge = (human) => {
    if(human.age > 18) {
        console.log(`Человеку с именем ${human.name} больше 18 лет`);
    } else {
        console.log(`Чуток дорасти`);
    }
}

checkAge(human1);
checkAge(human2);
checkAge(human3);