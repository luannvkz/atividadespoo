// Luan Inacio n3 2B Desenvolvimento de Sistemas
class Funcionario {
    constructor(nome, cargo, salario) {
        this.nome = nome;
        this.cargo = cargo;
        this.salario = salario;
    }
    apresentar() {
        console.log(this.nome, this.cargo, this.salario);
    }
    aumentarSalario(percentual) {
        this.salario += this.salario * percentual / 100;
    }
}
let funcionario1 = new Funcionario("Luan", "Programador", 3000);
let funcionario2 = new Funcionario("Pietro", "Gerente", 5000);
let funcionario3 = new Funcionario("Victor", "Analista", 3500);
funcionario1.apresentar();
funcionario2.apresentar();
funcionario3.apresentar();
funcionario1.aumentarSalario(10);
funcionario1.apresentar();