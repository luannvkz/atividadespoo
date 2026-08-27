// Luan Inacio n3 2B Desenvolvimento de Sistemas
class Livro {
    constructor(titulo, autor, ano) {
        this.titulo = titulo;
        this.autor = autor;
        this.ano = ano;
        this.disponivel = true;
    }
    apresentar() {
        console.log(this.titulo, this.autor, this.ano);
    }
    emprestar() {
        if (this.disponivel) {
            this.disponivel = false;
            console.log("Livro emprestado");
        } else {
            console.log("Livro já emprestado");
        }
    }
    devolver() {
        this.disponivel = true;
        console.log("Livro devolvido");
    }
}
let livro1 = new Livro("Dom Casmurro", "Machado de Assis", 1899);
let livro2 = new Livro("O Hobbit", "Tolkien", 1937);
let livro3 = new Livro("1984", "George Orwell", 1949);
let livros = [livro1, livro2, livro3];
livros.forEach(livro => livro.apresentar());
livro1.emprestar();
livro1.emprestar();
livro1.devolver();
livro1.emprestar();