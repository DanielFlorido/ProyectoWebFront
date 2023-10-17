import { Edificio } from "../edificio/edificio";
import { Vehiculo } from "../vehiculo/vehiculo";

export class Piso {
    constructor(
        public id: number|null,
        public edificio: Edificio,
        public totalVehiculos: number,
        public espaciosDisponibles: number,
        public vehiculos: Vehiculo[]
    ){}
}
