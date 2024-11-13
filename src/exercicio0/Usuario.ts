
export enum StatusEnum{
    ATIVO = "Ativo",
    INATIVO = "Inativo"
}

export class Usuario{
    protected login: string;
    protected senha: string;
    protected _nome: string;
    protected cpfCNPJ: string;
    protected _status: StatusEnum;

    constructor(login: string, senha: string, cpfCNPJ: string){
        this.login = login;
        this.senha = senha;
        this._nome = "";
        this.cpfCNPJ = cpfCNPJ;
        this._status = StatusEnum.ATIVO;
    }

    public set nome(nome: string){
        this._nome = nome;
    }
    public set status(status: StatusEnum){
        this._status = status;
    }
}