// definindo variáveis
const inputElement = document.querySelector("#input")
const outputElement = document.querySelector("#output")
const fromElement = document.querySelector("#from")
const toElement = document.querySelector("#to")
const convertBtn = document.querySelector("#convert-btn")
const msgElement = document.querySelector("#message")

//função para converter os elementos
function convert() {
    const fromValue = fromElement.value;
    const toValue = toElement.value;

    if(fromValue === toValue) {
        outputElement.value =  ""
        msgElement.textContent = "Essa conversão não fez sentido"
        return;
    }


// converter unidade de entrada para metros
    let meters
    switch(fromValue){
        case 'm':
            meters = inputElement.value
            break;
        case 'km':
            meters = inputElement.value * 1000
            break;
        case 'hm':
        meters = inputElement.value * 100
            break;
        case 'dam':
            meters = inputElement.value * 10
            break;
        case 'dm':
            meters = inputElement.value / 10
            break;
        case 'cm':
            meters = inputElement.value / 100
            break;
        case 'mm':
            meters = inputElement.value / 100
            break;
    }

// converter metros para unidade de saída
    let result
    switch(toValue){
        case 'm':
            result = meters
            break;
        case 'km':
            result = meters / 1000
            break;
        case 'hm':
            result = meters / 100
            break;
        case 'dam':
            result = meters / 10
            break;
        case 'dm':
            result = meters * 10
            break;
        case 'cm':
            result = meters *  100
            break;
        case 'mm':
            result = meters * 100
            break;
    }

    //exibir resultado no output
    outputElement.value = result;

    const fromLabel = fromElement.options[fromElement.selectedIndex].text
    const toLabel =toElement.options[toElement.selectedIndex].text

    const message = `${inputElement.value} ${fromLabel} equilavem a ${result} ${toLabel}.`;
    msgElement.textContent = message;
    return;
}

convertBtn.addEventListener("click", convert)