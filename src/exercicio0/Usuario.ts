
export enum StatusEnum{
    ATIVO = "Ativo",
    INATIVO = "Inativo"
}

export class Usuario{
    protected login: string;
    protected senha: string;
    protected nome: string;
    protected cpfCNPJ: string;
    protected status: StatusEnum;

    constructor(login: string, senha: string, cpfCNPJ: string){
        this.login = login;
        this.senha = senha;
        this.nome = "";
        this.cpfCNPJ = cpfCNPJ;
        this.status = StatusEnum.ATIVO;
    }

    public set _nome(nome: string){
        this.nome = nome;
    }
}