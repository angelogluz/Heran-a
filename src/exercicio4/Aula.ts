import { Conteudo } from "./Conteudo";
import { GenericModel } from "./GenericModel";
import { Unidade } from "./Unidade";

export class Aula extends GenericModel{
    private _conteudos?: Conteudo[];
    private _unidade: Unidade;

    constructor(unidade: Unidade){
        super();
        this._conteudos = [];
        this._unidade = unidade;
    }
}