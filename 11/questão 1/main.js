
class Aluno {
    constructor(nome, idade) {
      this.nome = nome;
      this.idade = idade;
      this.notas = [];
      this.bimestre = 0;
    }
  
      Receber_Nota(nota) 
      {  
          this.bimestre++;
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
  
  
function calcularMedia() {
    let aluno = new Aluno("anônimo", "NaN");

    for (let i = 1; i <= 4; i++) {
        aluno.Receber_Nota(document.getElementById("nota"+i).value);
        console.log(aluno.notas);
    }

    let container = document.getElementsByClassName("container");
  
  container[0].innerHTML = "<h1> sua media é: " + aluno.Calcular_Media() + "</h1>";

  if (aluno.verficar_Aprovacao() == "foi Aprovado")  container[0].innerHTML += "<h1 class='aprovacao'> Parabéns, você foi Aprovado!</h1>";
  else if(aluno.verficar_Aprovacao() == "ficou em Recuperação") container[0].innerHTML += "<h1 class='recuperacao'> Parabéns, você ficou em recuperção!</h1>";
  else if(aluno.verficar_Aprovacao() == "ficou em dependencia") container[0].innerHTML += "<h1 class='dependente'> Parabéns, você ficou em dependencia!</h1>";
  else if(aluno.verficar_Aprovacao() == "foi Reprovado") container[0].innerHTML += "<h1 class='reprovacao'> Parabéns, você foi Reprovado!</h1>";
}
