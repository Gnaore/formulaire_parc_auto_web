import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    constructor(private httpClient: HttpClient) {}

   //**en dev mac
   //urlg = 'http://127.0.0.1:8000/api/'
   //urlimg = 'http://127.0.0.1:8000/'

    //*sur server distant
   urlg='https://apiparcauto.serveurwebonlinerti.com/api/'
   urlimg = 'https://apiparcauto.serveurwebonlinerti.com/'
  
   //urlg = 'http://10.102.0.25:3000/'; //API RTI
 
   idUser = localStorage.getItem('id');

   ajoutFormulaire(data: any): Observable<any> {
    return this.httpClient.post(this.urlg + 'formulaire/create', data);
  }
  
  modifiFormulaire(data: any, id: number): Observable<any> {
    return this.httpClient.put(this.urlg + 'formulaire/edit/'+ id, data);
  }
  
  supFormulaire(id: number): Observable<any> {
    return this.httpClient.delete(this.urlg + 'formulaire/' + id);
  }
  
  AllFormulaire(): Observable<any> {
    return this.httpClient.get(this.urlg + 'formulaires');
  }
  
  oneFormulaire(id: number): Observable<any> {
    return this.httpClient.get(this.urlg + 'formulaire/' + id);
  }

  upload(data: any){
    return this.httpClient.post(this.urlg + 'formulaire/upload', data)
  }

}
