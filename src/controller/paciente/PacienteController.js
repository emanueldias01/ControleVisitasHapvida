import PacienteService from "../../service/paciente/PacienteService.js"

class PacienteController{
    
    static async getAllPaciente(req, res){
        try{
            const list = await PacienteService.getAllPacientes();
            return res.status(200).json(list);
        }catch(erro){
            return res.status(500).json(
                {mensagem : erro.message}
            );
        }
        
    }

    static async getPacienteById(req, res){
        const id = parseInt(req.params.id);
        if(isNaN(id)) return res.status(404).json({mensagem : "ID inválido"});

        try{
            const paciente = await PacienteService.getPacienteById(id);
            return res.status(200).json(paciente);
        }catch(erro){

            let code;
            if(erro.message === `Paciente com ID ${id} não encontrado`){
                code = 404
                return res.status(code).json(
                    {mensagem : erro.message}
                );
            }else{
                code = 500
                return res.status(code).json(
                    {mensagem : erro.message}
                );
            }
        }
    }

    static async createPaciente(req, res){
        try{
            const body = req.body;
            const paciente = await PacienteService.createPaciente(body);
            
            return res.status(201).json(paciente);
        }catch(erro){
            return res.status(500).json(
                    {mensagem : erro.message}
            );
        }
    }

    static async updatePaciente(req, res){
        const id = parseInt(req.params.id);
        if(isNaN(id)) return res.status(404).json({mensagem : "ID inválido"});
        
        try{
            const body = req.body;
            const paciente = await PacienteService.updatePaciente(id, body);

            return res.status(200).json(paciente);
        }catch(erro){
            return res.status(500).json(
                    {mensagem : erro.message}
            );
        }
    }

    static async deletePacienteById(req, res){
        const id = parseInt(req.params.id);
        if(isNaN(id)) return res.status(404).json({mensagem : "ID inválido"});

        try{
            await PacienteService.deletePacienteById(id);

            return res.status(204).send();
        }catch(erro){
            return res.status(500).json(
                    {mensagem : erro.message}
            );
        }
    }

}

export default PacienteController;