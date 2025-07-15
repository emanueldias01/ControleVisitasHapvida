import { PrismaClient } from '@prisma/client';
import Paciente from '../../model/paciente/Paciente.js';
const prisma = new PrismaClient();

class PacienteRepository{

    static async create(p){
        const paciente = await prisma.paciente.create({
            data:{
                nome : p.nome,
                cpf : p.cpf,
                leito : p.leito
            }
        });
        
        return new Paciente(paciente.nome, paciente.cpf, paciente.leito);
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

        return new Paciente(paciente.nome, paciente.cpf, paciente.leito, paciente.visitantes);
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

        return new Paciente(pacienteUpdated.nome, pacienteUpdated.cpf, pacienteUpdated.leito);
    }

    static async deleteById(id){
        await prisma.paciente.delete({
            where : { id }
        });
    }
}

export default PacienteRepository;