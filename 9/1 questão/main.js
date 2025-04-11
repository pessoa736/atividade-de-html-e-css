
class Aluno {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
    this.notas = [];
    this.bimestre = 0;
  }

    Receber_Nota() 
    {  
        this.bimestre++;
        var nota = window.prompt("Digite a nota do bimestre"+ this.bimestre +" : ");
        if (nota == null || nota == undefined || nota == "") {
            return parseInt(Math.random() * 100)/10;
        }
        this.notas.push(nota);
    }
    Calcular_Media() {
        var media = 0;
        for (let i = 0; i < this.notas.length; i++) {
            media += this.notas[i] / this.notas.length;
        }
        return media;
    }

    verficar_Aprovacao() {
        var media = this.Calcular_Media();
        if (media >= 7) {
            return "foi Aprovado";
        } else if (media >= 6.5) {
            return "ficou em Recuperação";
        } else if (media >= 4) {
            return "ficou em dependencia";
        } else {
            return "foi Reprovado";
        }
    }
    getNotas() {
        var notas_str = "";
        for (let i = 0; i < this.notas.length; i++) {
            notas_str += ", " + this.notas[i] + " ";
        }
        return notas_str;
    }
}

let cloclo = new Aluno("Clodoaldo", 20);


alert(`${cloclo.nome} é um aluno do Colegio Federal Semafaro Gameplay, ele tem ${cloclo.idade} anos`);


for (i=1; i<=4; i++){
    cloclo.Receber_Nota();
}

alert("A média do aluno" + cloclo.nome +" é: "+ cloclo.Calcular_Media());
alert(cloclo.nome + " " + cloclo.verficar_Aprovacao());
