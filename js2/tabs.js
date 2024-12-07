let textiki = document.querySelectorAll('.common_text');
const btn = document.querySelector('.btn');

let index = 0;

btn.addEventListener("click", () => {
    if(index == textiki.length - 1) {
        index = 0;
        textiki[index].classList.add("red");
        textiki[textiki.length - 1].classList.remove("red");
    } else {
        textiki[index].classList.remove("red");
        textiki[index + 1].classList.add("red");
    
        index++;
    }
})