const generatePasswordButton = document.querySelector("#generate-password");
const generatedPasswordElement = document.querySelector("#generated-password");
const copyPasswordButton = document.querySelector("#copy-password");
const openCloseGeneratorButton = document.querySelector("#open-generate-password");
const generatePasswordContainer = document.querySelector("#generate-options");
const lengthInput = document.querySelector("#length");
const lettersInput = document.querySelector("#letters");
const numbersInput = document.querySelector("#numbers")
const symbolsInput = document.querySelector("#symbols")

const getLetterLowerCase = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

const getLetterUpperCase = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

const getNumber = () => {
    return Math.floor(Math.random() * 10).toString();
}

const getSymbol = () => {
    const symbols = "(){}[]=<>@!#%&/.,=-_";
    return symbols[Math.floor(Math.random() * symbols.length)];
}

const generatePassword = () => {
    let password = "";

    const passwordLength = lengthInput.value;

    const generators = [];

    if (lettersInput.checked) {
        generators.push(getLetterLowerCase, getLetterUpperCase)
    }
    
    if (numbersInput.checked) {
        generators.push(getNumber)
    }

    if (symbolsInput.checked) {
        generators.push(getSymbol)
    }

    if (generators.length === 0) {
        return;
    }

    for (let i = 0; i < passwordLength; i++) {
        const randomGenerator = generators[Math.floor(Math.random() * generators.length)];
        password += randomGenerator();
    }

    password = password.slice(0, passwordLength);

    generatedPasswordElement.style.display = "block";
    generatedPasswordElement.querySelector("h4").innerText = password;
}

generatePasswordButton.addEventListener("click", generatePassword);

openCloseGeneratorButton.addEventListener("click", () => {
    generatePasswordContainer.classList.toggle("hide")
});

copyPasswordButton.addEventListener("click", () => {
    const copy = document.querySelector("h4").innerText;
    navigator.clipboard.writeText(copy).then( () => {
        alert("Senha copiada para a área de transferencia")
    })});