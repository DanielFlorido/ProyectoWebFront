import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Piso } from 'src/app/model/piso/piso';
import { PisoService } from 'src/app/shared/pisoService/piso.service';

@Component({
  selector: 'app-piso-list',
  templateUrl: './piso-list.component.html',
  styleUrls: ['./piso-list.component.css']
})
export class PisoListComponent implements OnInit{

  pisos: Piso[]=[]

  constructor(private pisoService: PisoService, private router: Router){}

  ngOnInit(): void {
    this.pisoService.findAll().subscribe(pisos => this.pisos = pisos)
  }
  verVehiculos(pisoId: number){
    this.router.navigate(['gestionParqueadero/pisos/vehiculos/', pisoId]);
  }
}
