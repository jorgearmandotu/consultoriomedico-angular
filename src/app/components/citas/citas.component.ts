import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Cita } from 'src/app/models/cita';
import { CitaService } from 'src/app/services/cita.service';

declare var M: any;
@Component({
  selector: 'app-citas',
  templateUrl: './citas.component.html',
  styleUrls: ['./citas.component.css'],
  providers:[CitaService]
})
export class CitasComponent implements OnInit {

  constructor(public citaService: CitaService) { }

  ngOnInit(): void {
  }

  agregarCita(form?: NgForm) {
    this.citaService.postCita(form?.value)
      .subscribe(res => {
        this.resetForm(form);
        M.toast({html: 'Cita Asignada'});
      });
  }

  resetForm(form?:NgForm){
    if(form){
      form.reset();
      this.citaService.selectedCita = new Cita();
    }
  }

}
