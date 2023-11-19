import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TipoVehiculo } from 'src/app/model/vehiculo/tipo-vehiculo';

@Injectable({
  providedIn: 'root'
})
export class TipoVehiculoServiceService {
  private httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    })
  };
  private url="http://localhost:8090/gestionParqueaderos/tipoVehiculo"
  constructor(private http: HttpClient) { }

  findAll(): Observable<TipoVehiculo[]>{
    return this.http.get<TipoVehiculo[]>(`${this.url}/list`,this.httpOptions);
  } 
}
