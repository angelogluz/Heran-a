import { Cliente } from "./Cliente";
import { StatusEnum } from "./Usuario";


export class Funcionario extends Cliente{
    
    private _dataAdmissao: Date;

    constructor(login: string, senha: string, cpf: string){
        super(login, senha, cpf)
        this._dataAdmissao = new Date();
    }

    public desligarFuncionario(){
        this.status = StatusEnum.INATIVO;
    }
}