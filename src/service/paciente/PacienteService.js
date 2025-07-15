import PacienteRequest from "../../dto/paciente/PacienteRequestDTO.js";
import PacienteRepository from "../../repository/paciente/PacienteRepository.js";

class PacienteService{

    static async createPaciente(paciente){
        const pacienteEntity = new PacienteRequest(paciente.nome, paciente.cpf, parseInt(paciente.leito));
        return await PacienteRepository.create(pacienteEntity);
    }

    static async getAllPacientes(){
        return await PacienteRepository.getAll();
    }

    static async getPacienteById(id){
        return await PacienteRepository.getById(id);
    }

    static async updatePaciente(id, data){
        const paciente = new PacienteRequest(data.nome, data.cpf, data.leito);
        return await PacienteRepository.update(id, paciente);
    }

    static async deletePacienteById(id){
        await PacienteRepository.deleteById(id);
    }
}

export default PacienteService;