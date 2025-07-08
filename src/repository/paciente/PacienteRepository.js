import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

class PacienteRepository{

    static async create(paciente){
        await prisma.paciente.create({
            data:{
                nome : paciente.Nome,
                cpf : paciente.Cpf,
                leito : paciente.Leito
            }
        });
        
        
    }

    static async getAll(){
        return await prisma.paciente.findMany({
                include: {
                    visitantes: true
                }
            }
        );
    }

    static async getById(id){
        const paciente = await prisma.paciente.findUnique({
            where : { id }
        });

        if(!paciente){
            throw new Error(`Paciente com ID ${id} não encontrado`);
        }

        return paciente;
    }

    static async update(id, data){
        const paciente = prisma.paciente.findUnique({
            where: { id }
        });

        if(!paciente){
            throw new Error(`Paciente com ID ${id} não encontrado`);
        }

        const pacienteUpdated = prisma.paciente.update({
            where: { id },
            data
        });

        return pacienteUpdated;
    }

    static async deleteById(id){
        await prisma.paciente.delete({
            where : { id }
        });
    }
}