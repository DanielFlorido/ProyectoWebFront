import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaderResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UpdateOperationDTO } from '../dto/update-operation-dto';
import { Vehiculo } from '../model/vehiculo/vehiculo';


@Injectable({
  providedIn: 'root'
})
export class PisoService {

  private httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    })
  };

  constructor(private http: HttpClient) { }

  registrarVehiculo(vehiculo: Vehiculo): Observable<Vehiculo> {
    return this.http.post<Vehiculo>("http://localhost:8080/gestionParqueaderos/registrarVehiculo", vehiculo, this.httpOptions);
  }

  crearVehiculo(vehiculo: Vehiculo): Observable<Vehiculo> {
    return this.http.post<Vehiculo>("http://localhost:8090/gestionParqueaderos/crearVehiculo", vehiculo, this.httpOptions);
  }


}
