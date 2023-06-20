import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PatienteService {

  private apiUrl = 'http://localhost:8080/patiente/add';

  constructor(private http: HttpClient) { }

  createPatiente(patienteData: any): Observable<any> {
    return this.http.post(this.apiUrl, patienteData);
  }
  
  
}
