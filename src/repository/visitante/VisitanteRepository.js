import Visitante from "../../model/vistiante/Visitante.js";
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

class VisitanteRepository{
    static async create(v){
        const visitante = await prisma.visitiante.create({
            data:{
                nome: v.nome,
                cpf: v.cpf,
                pacienteId: v.pacienteId,
                categoria: Visitante.categoria[v.categoria]
            }
        });
        
        return new Visitante(visitante.id, visitante.nome, visitante.cpf, visitante.pacienteId, visitante.categoria);
    }

    static async getAll(){
        return await prisma.visitiante.findMany();
    }

    static async getById(id){
        return await prisma.visitiante.findUnique({
            where: { id }
        });
    }

    static async udpate(id, data){
        const visitante = await prisma.visitiante.findUnique({
            where : { id }
        })

        if(!visitante) throw new Error(`Visitante com ID ${id} não encontrado`)
        
        const visitanteUpdate = await prisma.visitiante.update({
            where : { id },
            data
        });

        return new Visitante(visitanteUpdate.id, visitanteUpdate.nome, visitanteUpdate.cpf, visitanteUpdate.pacienteId, visitanteUpdate.categoria);
    }
    
    static async deleteById(id){
        await prisma.visitiante.delete({
            where : { id }
        });
    }
}