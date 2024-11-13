import { Usuario } from "./Usuario";

export class Cliente extends Usuario{
    
    protected dataUltimoAcesso: Date;

    constructor(login: string, senha: string, cpf: string){
        super(login,senha, cpf);
        this.dataUltimoAcesso = new Date();
    }
}