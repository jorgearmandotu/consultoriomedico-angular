export class Cita {
  constructor(_id="", identification = "", name = "", especialidad="", especialista="", hora="", email="", telefono="") {
    this._id =_id;
    this.identification = identification;
    this.name = name;
    this.especialidad = especialidad;
    this.especialista = especialista;
    this.date = "";
    this.hora = hora;
    this.email = email;
    this.telefono = telefono;
  }
  _id: String;
  identification: String;
  name: String;
  especialidad: String;
  especialista: String;
  date: String;
  hora: String;
  email: string;
  telefono: String;
}
