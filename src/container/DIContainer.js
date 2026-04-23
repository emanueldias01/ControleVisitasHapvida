import { PrismaClient } from '@prisma/client';
import PacienteRepository from '../repository/paciente/PacienteRepository.js';
import PacienteService from '../service/paciente/PacienteService.js';
import PacienteController from '../controller/paciente/PacienteController.js';

class DIContainer {
    constructor() {
        this.prisma = new PrismaClient();
        this.pacienteRepository = new PacienteRepository(this.prisma);
        this.pacienteService = new PacienteService(this.pacienteRepository);
        this.pacienteController = new PacienteController(this.pacienteService);
    }

    getPacienteController() {
        return this.pacienteController;
    }
}

export default new DIContainer();
