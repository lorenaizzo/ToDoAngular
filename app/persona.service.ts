import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  private personaUrl = environment.serverUrl+'/api/personas';

  constructor(
    private http: HttpClient) { }


  async getPersona(personaId) {
    let result: any;

    try {
      result = await this.http.get(this.personaUrl+'/'+personaId, {withCredentials: true}).toPromise();
      return result;
    }
    catch(err) {
      return null;
    }
  }

  async traerTodasLasPersonas(){
    let result: any;

    try{
      result = await this.http.get(this.personaUrl, {withCredentials: true}).toPromise();
      return result;
    }
    catch(err) {
      return null;
    }
  }

}