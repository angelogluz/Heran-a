import { Usuario } from "./Usuario";

export class Fornecedor extends Usuario{

    constructor(login: string, senha: string, cnpj: string){
        super(login, senha, cnpj);
    }
}