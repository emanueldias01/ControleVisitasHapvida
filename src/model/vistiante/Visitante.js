
class Visitante{
    static categoria = {
        a : "ACOMPANHANTE",
        v : "VISITANTE" 
    }
    constructor(nome, cpf, pacienteId, categoria){
        this._nome = nome;
        this._cpf = cpf;
        this._pacienteId = pacienteId;
        this._categoria = categoria;
    }

}