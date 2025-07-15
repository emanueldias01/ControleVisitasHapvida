
class Paciente{
    constructor(id, nome, cpf, leito, visitantes = [], dataEntrada){
        this.id = id;
        this.nome = nome;
        this.cpf = cpf;
        this.leito = leito;
        this.visitantes = visitantes;
        this.dataEntrada = dataEntrada;
    }
}

export default Paciente;