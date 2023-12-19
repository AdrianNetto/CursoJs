const numbers = document.querySelectorAll(".number");
const generateBtn = document.querySelector(".gerador");
const porcoTeleSena = document.querySelector(".porcao")

function generateNumber() {

    const max = 60;
    const min = 1;
    const result = [];

    while(result.length < 6) {
        const number = Math.floor(Math.random() * (max - min + 1)) + min;

        if(!result.includes(number)) {
            result.push(number);
        }
    }

    const sequence = [8, 18, 28, 38, 48, 58];
    if (sequence.every(num => result.includes(num))) {
        porcoTeleSena.style.display = "flex";
    } else {
        porcoTeleSena.style.display = "none";
    }

    for(let i = 0; i < numbers.length; i++) {
        numbers[i].textContent = result[i]
    }
}

generateBtn.addEventListener("click", generateNumber);
