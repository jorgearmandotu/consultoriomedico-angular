import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cita } from '../models/cita';

@Injectable({
  providedIn: 'root'
})
export class CitaService {

  selectedCita: Cita;
  citas: Cita[];
  readonly URL_API = 'http://localhost:3000/api/consultorio';

  constructor(private http: HttpClient) {
    this.selectedCita = new Cita();
    this.citas = [];
  }

  getCitas(){
    return this.http.get(this.URL_API);
  }

  postCita(cita:Cita) {
    console.log(cita);
    return this.http.post(this.URL_API, cita);
  }
  getCitasId(identification:String){
    return this.http.get(this.URL_API+'/citas/${identification}')
  }

  PutCita(Cita:Cita){
    return this.http.put(this.URL_API+'/${Cita.identification}', Cita);
  }

  DeleteCita(_id:String) {
    return this.http.delete(this.URL_API+'${id}');
  }
}
