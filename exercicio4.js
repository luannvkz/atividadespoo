// Luan Inacio n3 2B Desenvolvimento de Sistemas
class Produto {
    constructor(nome, preco, quantidade) {
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }
    mostrarProduto() {
        console.log(this.nome, this.preco, this.quantidade);
    }
}
class Carrinho {
    constructor() {
        this.produtos = [];
    }
    adicionarProduto(produto) {
        this.produtos.push(produto);
    }
    calcularTotal() {
        let total = 0;
        this.produtos.forEach(produto => {
            total += produto.preco * produto.quantidade;
        });
        return total;
    }
}
let produto1 = new Produto("Arroz", 25, 2);
let produto2 = new Produto("Feijão", 10, 3);
let carrinho = new Carrinho();
carrinho.adicionarProduto(produto1);
carrinho.adicionarProduto(produto2);
carrinho.produtos.forEach(produto => produto.mostrarProduto());
console.log("Total:", carrinho.calcularTotal());