import Visitante from "../../model/vistiante/Visitante.js";
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

class VisitanteRepository{
    static async create(v){
        const visitante = await prisma.visitante.create({
            data:{
                nome: v.nome,
                cpf: v.cpf,
                pacienteId: v.pacienteId,
                categoria: Visitante.categoria[v.categoria],
                dataEntrada: new Date()
            }
        });
        
        return new Visitante(visitante.id, visitante.nome, visitante.cpf, visitante.pacienteId, visitante.categoria);
    }

    static async getAllByPacienteId(id){
        return await prisma.visitante.findMany({
            where: {
                pacienteId : id
            }
        });
    }

    static async getById(id){
        const visitante = await prisma.visitante.findUnique({
            where: { id }
        });

         const dataEntradaBR = paciente.dataEntrada.toLocaleString('pt-BR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
        return new Visitante(visitante.id, visitante.nome, visitante.cpf, visitante.pacienteId, visitante.categoria, dataEntradaBR);
    }

    static async udpate(id, data){
        const visitante = await prisma.visitiante.findUnique({
            where : { id }
        })

        if(!visitante) throw new Error(`Visitante com ID ${id} não encontrado`)
        
        const visitanteUpdate = await prisma.visitante.update({
            where : { id },
            data
        });

        return new Visitante(visitanteUpdate.id, visitanteUpdate.nome, visitanteUpdate.cpf, visitanteUpdate.pacienteId, visitanteUpdate.categoria);
    }
    
    static async deleteById(id){
        await prisma.visitante.delete({
            where : { id }
        });
    }
}

export default VisitanteRepository;