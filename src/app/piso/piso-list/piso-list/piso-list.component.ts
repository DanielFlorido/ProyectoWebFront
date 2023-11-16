import { Component, OnInit } from '@angular/core';
import { Piso } from 'src/app/model/piso/piso';
import { PisoService } from 'src/app/shared/piso.service';

@Component({
  selector: 'app-piso-list',
  templateUrl: './piso-list.component.html',
  styleUrls: ['./piso-list.component.css']
})
export class PisoListComponent implements OnInit{

  pisos: Piso[]=[]

  constructor(private pisoService: PisoService){}

  ngOnInit(): void {
    this.pisoService.findAll().subscribe(pisos => this.pisos = pisos)
  }
}
