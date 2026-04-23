class IPacienteRepository {
    async create(paciente);
    async getAll();
    async getById(id);
    async update(id, data);
    async deleteById(id);
}

export default IPacienteRepository;
