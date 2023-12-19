const input = document.querySelector("#textBox");
const submitButton = document.querySelector("#verificar");
const resultado = document.querySelector("#answer");

submitButton.addEventListener("click", () => {
    verificarPalindromo();
})  

input.addEventListener("keyup", (event) => {
    if(event.key === "Enter") {
        event.preventDefault();
        verificarPalindromo();
    }
});

function verificarPalindromo() {
    const inputValue = input.value;
    const inverseInput = inputValue.toString().split('').reverse().join('')
    if(inputValue === ""){
        resultado.innerHTML = "Por favor, insira algo na caixa de texto"
    } else {
        if(inputValue.toLowerCase() === inverseInput.toLowerCase()) {
            resultado.innerHTML = `${inputValue} é um palíndromo`;
        } else {
            resultado.innerHTML = `${inputValue} não é um palíndromo`;
        }
    }

    input.value = ""
}