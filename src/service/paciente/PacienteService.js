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
        const paciente = await PacienteRepository.getById(id);
        paciente.visitantes.map(v => {
            const dataEntrada = new Date(v.dataEntrada);
            const dataEntradaBR = dataEntrada.toLocaleString('pt-BR', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            });
            v.dataEntrada = dataEntradaBR;
        });

        const dataEntrada = new Date(paciente.dataEntrada);
        const dataEntradaBR = dataEntrada.toLocaleString('pt-BR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    
        paciente.dataEntrada = dataEntradaBR;
        return paciente;
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