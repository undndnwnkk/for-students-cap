const lev = {
    age: 5,
    name: "Lev",
    experience: {
        langs: "russian, english, czech",
        programming: ["js", "c++", "python"]
    },
    printHello: function(bro) {
        console.log("Hello " + bro);
    }
};

// поле: ключ

console.log(lev.age);
console.log(lev.experience.programming[0]);

// Деструктуризация

const { langs } = lev.experience;
console.log(langs);

lev.printHello('human');