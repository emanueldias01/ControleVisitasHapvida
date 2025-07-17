import VisitanteRepository from "../../repository/visitante/VisitanteRepository.js";
import PacienteRepository from "../../repository/paciente/PacienteRepository.js";
import Visitante from "../../model/vistiante/Visitante.js";

class VisitanteService{
    static async getAllVisitantesByPacienteId(id){
    const list = await VisitanteRepository.getAllByPacienteId(id);
    return list.map(v => {
        const dataEntrada = new Date(v.dataEntrada); // conversão correta
        const dataEntradaBR = dataEntrada.toLocaleString('pt-BR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
        return new Visitante(v.id, v.nome, v.cpf, v.pacienteId, v.categoria, dataEntradaBR);
    });
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
    const paciente = await PacienteRepository.getById(data.pacienteId);
    const list = paciente.visitantes; // Corrigido para 'visitantes'
    if(list.length === 2) throw new Error(`O leito em que o paciente está já possui muitas pessoas`);

    let qtdV = 0;
    let qtdA = 0;

    list.forEach(v => {
    if (
        v.categoria === Visitante.categoria.v ||
        v.categoria === "VISITANTE"
    ) {
        qtdV++;
    } else if (
        v.categoria === Visitante.categoria.a ||
        v.categoria === "ACOMPANHANTE"
    ) {
        qtdA++;
    }
});

    if (
        data.categoria === Visitante.categoria.a ||
        data.categoria === "ACOMPANHANTE"
    ) {
        if (qtdA === 1) throw new Error(`No leito já existe um acompanhante`);
    }
    return await VisitanteRepository.create(data);
}
}

export default VisitanteService;