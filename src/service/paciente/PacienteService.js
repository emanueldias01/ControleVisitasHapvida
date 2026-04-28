import PacienteRequest from "../../dto/paciente/PacienteRequestDTO.js";
import DateFormatter from "../../utils/DateFormatter.js";
import IPacienteService from "../interfaces/IPacienteService.js";

class PacienteService extends IPacienteService {
    constructor(pacienteRepository) {
        super();
        this.pacienteRepository = pacienteRepository;
    }

    async createPaciente(paciente){
        const pacienteEntity = new PacienteRequest(paciente.nome, paciente.cpf, parseInt(paciente.leito));
        return await this.pacienteRepository.create(pacienteEntity);
    }

    async getAllPacientes(){
        return await this.pacienteRepository.getAll();
    }

    async getPacienteById(id){
        const paciente = await this.pacienteRepository.getById(id);
        paciente.visitantes.map(v => {
            v.dataEntrada = DateFormatter.formatToBrazilian(v.dataEntrada);
        });

        paciente.dataEntrada = DateFormatter.formatToBrazilian(paciente.dataEntrada);
        return paciente;
    }

    async updatePaciente(id, data){
        const paciente = new PacienteRequest(data.nome, data.cpf, data.leito);
        return await this.pacienteRepository.update(id, paciente);
    }

    async deletePacienteById(id){
        await this.pacienteRepository.deleteById(id);
    }
}

export default PacienteService;
