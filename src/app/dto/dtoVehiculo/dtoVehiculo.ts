import { Vehiculo } from './../../model/vehiculo/vehiculo';
export class DtoVehiculo{
    constructor(
        public vehiculo : Vehiculo,
        public tiempo : number,
        public montoTotal : number  
    ){}
}