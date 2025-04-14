

function calcularArea(largura, altura) {
    return largura * altura;
}

let area1 = calcularArea(window.prompt("Qual a largura?"), window.prompt("Qual a altura?"));

alert(`A área é ${area1}`);

window.location.reload();