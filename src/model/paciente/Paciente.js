
class Paciente{
    constructor(id, nome, cpf, leito, visitantes = []){
        this._id = id;
        this._nome = nome;
        this._cpf = cpf;
        this._leito = leito;
        this._visitantes = visitantes;
    }

    get Id(){
        return this._id;
    }

    get Nome(){
        return this._nome.toUpperCase();
    }

    set Nome(value){
        this._nome = value;
    }

    get Cpf(){
        return this._cpf;
    }

    get Leito(){
        return this._leito;
    }

    get Visitantes(){
        return this._visitantes;
    }

    set Leito(value){
        this._leito = value;
    }
}

export default Paciente;