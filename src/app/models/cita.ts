export class Cita {
  constructor(_id="", identificacion = "", nombre = "", especialidad="", especialista="", fecha=new Date(), hora="", email="", telefono="") {
    this._id =_id;
    this.identificacion = identificacion;
    this.nombre = nombre;
    this.especialidad = especialidad;
    this.especialista = especialista;
    this.fecha = fecha;
    this.hora = hora;
    this.email = email;
    this.telefono = telefono;
  }
  _id: String;
  identificacion: String;
  nombre: String;
  especialidad: String;
  especialista: String;
  fecha: Date;
  hora: String;
  email: string;
  telefono: String;
}
