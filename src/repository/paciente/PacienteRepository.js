import { PrismaClient } from '@prisma/client';
import Paciente from '../../model/paciente/Paciente.js';
import IPacienteRepository from '../interfaces/IPacienteRepository.js';

class PacienteRepository extends IPacienteRepository {
    constructor(prismaClient = new PrismaClient()) {
        super();
        this.prisma = prismaClient;
    }

    async create(p){
        const paciente = await this.prisma.paciente.create({
            data:{
                nome : p.nome,
                cpf : p.cpf,
                leito : p.leito,
                dataEntrada : new Date()
            }
        });

        return new Paciente(paciente.id, paciente.nome, paciente.cpf, paciente.leito, [], paciente.dataEntrada);
    }

    async getAll(){
        return await this.prisma.paciente.findMany({
                include: {
                    visitantes: false
                }
            }
        );
    }

    async getById(id){
        const paciente = await this.prisma.paciente.findUnique({
            where : { id },
            include: {
                visitantes : true
            }
        });

        if(!paciente){
            throw new Error(`Paciente com ID ${id} não encontrado`);
        }
        return new Paciente(paciente.id, paciente.nome, paciente.cpf, paciente.leito, paciente.visitantes, paciente.dataEntrada);
    }

    async update(id, data){
        const paciente = await this.prisma.paciente.findUnique({
            where: { id }
        });

        if(!paciente){
            throw new Error(`Paciente com ID ${id} não encontrado`);
        }

        const pacienteUpdated = await this.prisma.paciente.update({
            where: { id },
            data
        });

        return new Paciente(pacienteUpdated.id, pacienteUpdated.nome, pacienteUpdated.cpf, pacienteUpdated.leito);
    }

    async deleteById(id){
        await this.prisma.paciente.delete({
            where : { id }
        });
    }
}

export default PacienteRepository;