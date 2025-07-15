
class Visitante{
    static categoria = {
        a : "ACOMPANHANTE",
        v : "VISITANTE" 
    }
    constructor(id, nome, cpf, pacienteId, categoria, dataEntrada = new Date()){
        this.id = id;
        this.nome = nome;
        this.cpf = cpf;
        this.pacienteId = pacienteId;
        this.categoria = categoria;
        this.dataEntrada = dataEntrada;
    }

}

export default Visitante