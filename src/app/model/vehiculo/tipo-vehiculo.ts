import { Piso } from "../piso/piso";

export class TipoVehiculo {
    constructor(
        public id : number|null,
        public tipo: string,
        public tarifa: number,
        public area: number,
        public pisos: Piso[]
    ){}
}
