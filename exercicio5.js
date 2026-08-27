// Luan Inacio n3 2B Desenvolvimento de Sistemas
class Aluno {
    constructor(nome, matricula, nota1, nota2, nota3) {
        this.nome = nome;
        this.matricula = matricula;
        this.nota1 = nota1;
        this.nota2 = nota2;
        this.nota3 = nota3;
    }
    calcularMedia() {
        return (this.nota1 + this.nota2 + this.nota3) / 3;
    }
    verificarSituacao() {
        let media = this.calcularMedia();
        if (media >= 7) return "Aprovado";
        if (media >= 5) return "Recuperação";
        return "Reprovado";
    }
}
let aluno1 = new Aluno("Luan", 1, 8, 7, 9);
let aluno2 = new Aluno("João", 2, 6, 5, 7);
let aluno3 = new Aluno("Pedro", 3, 4, 3, 5);
let aluno4 = new Aluno("Ana", 4, 9, 8, 10);
let aluno5 = new Aluno("Maria", 5, 6, 6, 5);
let alunos = [aluno1, aluno2, aluno3, aluno4, aluno5];
alunos.forEach(aluno => {
    console.log(aluno.nome, aluno.calcularMedia(), aluno.verificarSituacao());
});