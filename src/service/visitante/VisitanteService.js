import VisitanteRepository from "../../repository/visitante/VisitanteRepository.js";
import PacienteRepository from "../../repository/paciente/PacienteRepository.js";
import Visitante from "../../model/vistiante/Visitante.js";

class VisitanteService{
    static async getAllVisitantesByPacienteId(id){
        return await VisitanteRepository.getAllByPacienteId(id);
    }

    static async getVsitanteById(id){
        return await VisitanteRepository.getById(id);
    }

    static async deleteVisitanteById(id){
        await VisitanteRepository.deleteById(id);
    }

    static async updateVisitante(id, data){
        return await this.updateVisitante(id, data);
    }

    static async createVisitante(data){
        list = (await PacienteRepository.getById(data.pacienteId)).Visitantes;
        if(list.length === 2) throw new Error(`O leito em que o paciente está já possui muitas pessoas`);

        let qtdV = 0;
        let qtdA = 0;

        list.forEach(v => {
            if(v.categoria === Visitante.categoria.v) qtdV++;
            else qtdA++;
        });

        if(Visitante.categoria[data.categoria] === Visitante.categoria.a && qtdA === 1) throw new Error(`No leito já existe um acompanhante`);

        return await VisitanteRepository.createVisitante(data);
    }
}