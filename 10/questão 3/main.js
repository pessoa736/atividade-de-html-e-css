
function vericarMaioridade(idade) {
    return idade >= 18;
}

let idade = window.prompt("Qual a sua idade?");

if (vericarMaioridade(idade)) alert("Você é maior de idade");  
else alert("Você é menor de idade");


let container = document.createElement('div');
container.innerHTML = `<h1>Você é ${vericarMaioridade(idade) ? "maior" : "menor"} de idade</h1><br><button onclick="window.location.reload()">verificar novamente</button><br><p>pelo visto vc ta vivo(a) por ${parseInt(idade)} anos</p>`;
document.body.appendChild(container);