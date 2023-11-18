import { TipoVehiculo } from './tipo-vehiculo';
import { Piso } from './../piso/piso';
export class Vehiculo {
    
    constructor(
        public id: number,
        public placa: string,
        public piso: Piso|null,
        public tipoVehiculo: TipoVehiculo|null,
        public horaLlegada: number
    ){}
}
