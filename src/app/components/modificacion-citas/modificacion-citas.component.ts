import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CitaService } from 'src/app/services/cita.service';

@Component({
  selector: 'app-modificacion-citas',
  templateUrl: './modificacion-citas.component.html',
  styleUrls: ['./modificacion-citas.component.css']
})
export class ModificacionCitasComponent implements OnInit {

  citas = [];
  constructor( public citaService: CitaService ) { }

  ngOnInit(): void {
  }

  buscarId(form?: NgForm): void{
    this.citaService.PutCita(form?.value).subscribe(res=>{
      console.log(res);
    })
  }

}
