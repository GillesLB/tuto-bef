export interface IPersonnages {
    nom: string;
    role: string;
    pays: string;
    id: number;
}

export class Personnages implements IPersonnages {

    constructor(
        public nom: string,
        public role: string,
        public pays: string,
        public id: number,
    ) {}

}
