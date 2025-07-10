
class Visitante{
    static categoria = {
        a : "ACOMPANHANTE",
        v : "VISITANTE" 
    }
    constructor(id, nome, cpf, pacienteId, categoria){
        this._id = id;
        this._nome = nome;
        this._cpf = cpf;
        this._pacienteId = pacienteId;
        this._categoria = categoria;
    }

}

export default Visitante