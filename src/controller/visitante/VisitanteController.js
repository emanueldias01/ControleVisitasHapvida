import VisitanteService from "../../service/visitante/VisitanteService.js";

class VisitanteController{

    static async getAllVisitantesByPacienteId(req, res){
        const id = parseInt(req.params.id);
        if(isNaN(id)) return res.status(400).json({ mensagem : "ID inválido" });

        try{
            const list = await VisitanteService.getAllVisitantesByPacienteId(id);
            return res.status(200).json(list);
        }catch(erro){
            return res.status(500).json(
                { mensagem : erro.message }
            );
        }
    }

    static async getVisitanteById(req, res){
        const id = parseInt(req.params.id);
        if(isNaN(id)) return res.status(400).json({mensagem : "ID inválido"});

        try{
            const visitante = await VisitanteService.getVsitanteById(id);
            return res.status(200).jsoon(visitante);
        }catch(erro){
            if(erro.message === `Visitante com ID ${id} não encontrado`) return res.status(404).json({ mensagem : erro.messagem });
            else return res.status(500).json(
                { mensagem : erro.message }
            );
        }
    }

    static async updateVisitante(req, res){
        const body = req.body;
        const data = {
            nome : body.nome,
            cpf : body.cpf
        }
        const id = parseInt(req.params.id);
        if(isNaN(id)) return res.status(400).json({mensagem : "ID inválido"});

        try{
            const visitante = await VisitanteService.updateVisitante(id, data);
            return res.status(200).json(visitante);
        }catch(erro){
            return res.status(500).json(erro.message);
        }
    }

    static async createVisitante(req, res){
        const data = req.body;

        try{
            const visitante = await VisitanteService.createVisitante(data);
            return res.status(201).json(visitante);
        }catch(erro){
            if(erro.messagem === "O leito em que o paciente está já possui muitas pessoas") return res.status(409).json({ mensagem : erro.message });
            if(erro.message === "No leito já existe um acompanhante") return res.status(400).json({ mensagem : erro.message });

            return res.status(500).json(
                { mensagem : erro.message }
            );
        }

    }

    static async deletePacienteById(req, res){
        const id = parseInt(req.params.id);
        if(isNaN(id)) return res.status(400).json({mensagem : "ID inválido"});

        try{
            await VisitanteService.deleteVisitanteById(id);
            return res.status(204).send();
        }catch(erro){
            return res.status(500).json({
                mensagem : erro.message
            });
        }
    }
}

export default VisitanteController;