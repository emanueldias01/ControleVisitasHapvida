class PacienteController {
    constructor(pacienteService) {
        this.pacienteService = pacienteService;
    }

    async getAllPacientes(req, res){
        try{
            const list = await this.pacienteService.getAllPacientes();
            return res.status(200).json(list);
        }catch(erro){
            return res.status(500).json(
                {mensagem : erro.message}
            );
        }
    }

    async getPacienteById(req, res){
        const id = parseInt(req.params.id);
        if(isNaN(id)) return res.status(404).json({mensagem : "ID inválido"});

        try{
            const paciente = await this.pacienteService.getPacienteById(id);
            return res.status(200).json(paciente);
        }catch(erro){
            let code;
            if(erro.message.contains("Paciente com ID")){
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

    async createPaciente(req, res){
        try{
            const body = req.body;
            const paciente = await this.pacienteService.createPaciente(body);
            
            return res.status(201).json(paciente);
        }catch(erro){
            return res.status(500).json(
                    {mensagem : erro.message}
            );
        }
    }

    async updatePaciente(req, res){
        const id = parseInt(req.params.id);
        if(isNaN(id)) return res.status(404).json({mensagem : "ID inválido"});

        try{
            const body = req.body;
            const paciente = await this.pacienteService.updatePaciente(id, body);

            return res.status(200).json(paciente);
        }catch(erro){
            return res.status(500).json(
                    {mensagem : erro.message}
            );
        }
    }

    async deletePacienteById(req, res){
        const id = parseInt(req.params.id);
        if(isNaN(id)) return res.status(404).json({mensagem : "ID inválido"});

        try{
            await this.pacienteService.deletePacienteById(id);

            return res.status(204).send();
        }catch(erro){
            return res.status(500).json(
                    {mensagem : erro.message}
            );
        }
    }
}

export default PacienteController;