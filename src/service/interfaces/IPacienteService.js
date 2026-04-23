class IPacienteService {
    async createPaciente(paciente);
    async getAllPacientes();
    async getPacienteById(id);
    async updatePaciente(id, data);
    async deletePacienteById(id);
}

export default IPacienteService;
