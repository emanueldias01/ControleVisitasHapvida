import { PrismaClient } from '@prisma/client';
import Paciente from '../../model/paciente/Paciente.js';
const prisma = new PrismaClient();

class PacienteRepository{

    static async create(p){
        const paciente = await prisma.paciente.create({
            data:{
                nome : p.nome,
                cpf : p.cpf,
                leito : p.leito,
                dataEntrada : new Date()
            }
        });
        
        return new Paciente(paciente.id, paciente.nome, paciente.cpf, paciente.leito, [], paciente.dataEntrada);
    }

    static async getAll(){
        return await prisma.paciente.findMany({
                include: {
                    visitantes: false
                }
            }
        );
    }

    static async getById(id){
        const paciente = await prisma.paciente.findUnique({
            where : { id },
            include: {
                visitantes : true
            }
        });

        if(!paciente){
            throw new Error(`Paciente com ID ${id} não encontrado`);
        }

        const dataEntradaBR = paciente.dataEntrada.toLocaleString('pt-BR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
        return new Paciente(paciente.id, paciente.nome, paciente.cpf, paciente.leito, paciente.visitantes, dataEntradaBR);
    }

    static async update(id, data){
        const paciente = prisma.paciente.findUnique({
            where: { id }
        });

        if(!paciente){
            throw new Error(`Paciente com ID ${id} não encontrado`);
        }

        const pacienteUpdated = await prisma.paciente.update({
            where: { id },
            data
        });

        return new Paciente(pacienteUpdated.id, pacienteUpdated.nome, pacienteUpdated.cpf, pacienteUpdated.leito);
    }

    static async deleteById(id){
        await prisma.paciente.delete({
            where : { id }
        });
    }
}

export default PacienteRepository;