import { Aula } from "./Aula";
import { Curso } from "./Curso";
import { GenericModel } from "./GenericModel";

export class Unidade extends GenericModel{
    private _ativo: boolean;
    private _aulas: Aula[];
    private _cursos: Curso[];

    constructor(){
        super();
        this._ativo = true;
        this._aulas = [];
        this._cursos = [];
    }
}