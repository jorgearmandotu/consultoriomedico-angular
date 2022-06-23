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

  postCita(Cita:Cita) {
    return this.http.post(this.URL_API, Cita);
  }

  PutCita(Cita:Cita){
    return this.http.put(this.URL_API+'/${Cita._id}', Cita);
  }

  DeleteCita(_id:String) {
    return this.http.delete(this.URL_API+'${id}');
  }
}