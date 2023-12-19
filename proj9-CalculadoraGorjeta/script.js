const calculateBtn = document.querySelector("#calculateBtn");

function calculateTip() {
    const billAmount = parseFloat(document.querySelector("#billAmount").value);
    const servicequality = parseFloat(document.querySelector("#serviceQuality").value);

    if (billAmount ==="") {
        alert("Por favor, preencha os campos.");
        return;
    }

    const tipAmount = billAmount * serviceQuality;
    const totalAmount = parseFloat(billAmount) + parseFloat(tipAmount);
  
    document.getElementById("tipAmount").value = "R$" + tipAmount.toFixed(2);
    document.getElementById("totalAmount").value = "R$" + totalAmount.toFixed(2);
}

calculateBtn.addEventListener("click", calculateTip);
