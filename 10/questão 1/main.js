

function sauda_a_mandioca(nome, hora) {
    return hora>=0 && hora<12 ? `eu saudo a mandioca de manhã as ${hora}, ${nome}` : (hora>=12 && hora<16 ? `eu saudo a mandioca de tarde as ${hora}, ${nome}` : `eu saudo a mandioca de noite as ${hora}, ${nome}`);
}

alert("quer saber de que horas eu saudo a mandioca?");
let nome = window.prompt("Qual o seu nome?");
let hora = window.prompt("Qual a hora?");

alert(sauda_a_mandioca(nome, hora));