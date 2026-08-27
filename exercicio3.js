// Luan Inacio n3 2B Desenvolvimento de Sistemas
class Veiculo {
    constructor(marca, modelo, ano, velocidade) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.velocidade = velocidade;
    }
    acelerar() {
        this.velocidade += 10;
    }
    frear() {
        this.velocidade -= 10;
        if (this.velocidade < 0) this.velocidade = 0;
    }
    alterarVelocidade(valor) {
        this.velocidade = valor;
    }
    mostrarDados() {
        console.log(this.marca, this.modelo, this.ano, this.velocidade);
    }
}
let veiculo1 = new Veiculo("Toyota", "Corolla", 2022, 50);
let veiculo2 = new Veiculo("Honda", "Civic", 2023, 60);
let veiculo3 = new Veiculo("Ford", "Ranger", 2021, 40);
veiculo1.mostrarDados();
veiculo1.acelerar();
veiculo1.acelerar();
veiculo1.acelerar();
veiculo1.mostrarDados();
veiculo1.frear();
veiculo1.mostrarDados();
veiculo2.mostrarDados();
veiculo3.mostrarDados();