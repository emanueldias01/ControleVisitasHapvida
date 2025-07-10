import Paciente from "../../model/paciente/Paciente.js";
import PacienteRepository from "../../repository/paciente/PacienteRepository.js";

class PacienteService{

    static async createPaciente(paciente){
        const pacienteEntity = new Paciente(paciente.nome, paciente.cpf, paciente.leito);
        return await PacienteRepository.create(pacienteEntity);
    }

    static async getAllPacientes(){
        return await PacienteRepository.getAll();
    }

    static async getPacienteById(id){
        return await PacienteRepository.getById(id);
    }

    static async updatePaciente(id, data){
        const paciente = new Paciente(data.nome, data.cpf, data.leito);
        return await PacienteRepository.update(id, paciente);
    }

    static async deletePacienteById(id){
        await PacienteRepository.deleteById(id);
    }
}

export default PacienteService;