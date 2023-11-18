import { HttpClient, HttpHeaderResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DtoVehiculo } from 'src/app/dto/dtoVehiculo/dtoVehiculo';
import { Vehiculo } from 'src/app/model/vehiculo/vehiculo';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {

  constructor(private http: HttpClient) { }
  private httpOptions = {
    
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    })
  };
  private url="http://localhost:8090/gestionParqueaderos"

  findAll(): Observable<Vehiculo[]>{
    return this.http.get<Vehiculo[]>("http://localhost:8090/gestionParqueaderos/listarVehiculos")
  }

  findById(id:number): Observable<Vehiculo>{
    return this.http.get<Vehiculo>(`http://localhost:8090/gestionParqueaderos/buscarVehiculo/${id}`)
  }

  retirarVehiculo(id: number): Observable<DtoVehiculo>{
    return this.http.get<DtoVehiculo>(`http://localhost:8090/gestionParqueaderos/registrarSalida/${id}`)
  }
  crearVehiculo(vehiculo : Vehiculo): Observable<Vehiculo>{
    return this.http.post<Vehiculo>("http://localhost:8090/gestionParqueaderos/crearVehiculo", vehiculo, this.httpOptions)
  }
  getVehiculosByPiso(idPiso: number): Observable<Vehiculo[]>{
    return this.http.get<Vehiculo[]>(`${this.url}/pisos/vehiculos/${idPiso}`)
  }
}
