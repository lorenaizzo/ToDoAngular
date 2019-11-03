import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TareaService {
  
  private tareaUrl = environment.serverUrl+'/api/todos';
  
  constructor(
    private http: HttpClient) { }


  async todasLasTareas() {
    let result: any;

    try{
      result = await this.http.get(this.tareaUrl, {withCredentials: true}).toPromise();
     
      console.log(result);
      return result;

    }
    catch(err) {
      return null;
    }
  }

  async traerUnaTarea(tareaId){
    let result: any;

    try {
      result = await this.http.get(this.tareaUrl+'/'+tareaId, {withCredentials: true}).toPromise();
    
      return result;
    }
    catch(err) {
      return null;
    }
  }

  async guardarTarea(unaTarea) {
    let result: any;
    let body: any;

    try {
      
      body = {
        tarea: unaTarea.tarea,
        vencimiento: unaTarea.fecha,
        asignado_a_id: unaTarea.asignadaId,
        realizada: false,
        fecha_realizacion: null
      }

      result = await this.http.post(this.tareaUrl, body, {withCredentials: true}).toPromise();

      return result;
    }
    catch(err) {
      return null;
    }
  }

  async borrarTarea(tareaId) {
    let result: any;

    try {
      await this.http.delete(this.tareaUrl+'/'+tareaId, {withCredentials: true}).toPromise();

      return true;
    }
    catch(err) {
      return false;
    }
  }

  async marcarFinalizada(unaTareaRealizada) {
    let result: any;
    let body: any;

    try {
      body = {
        id: unaTareaRealizada.id,
        tarea: unaTareaRealizada.tarea,
        vencimiento: unaTareaRealizada.vencimiento,
        asignado_a_id: unaTareaRealizada.asignado_a_id,
        realizada: unaTareaRealizada.realizada,
        fecha_realizacion: unaTareaRealizada.fechaRealizacion
      }

      result = await this.http.put(this.tareaUrl+'/'+unaTareaRealizada.id, body, {withCredentials: true}).toPromise();

      return result;
    }
    catch(err) {
      return null;
    }
  }
}
