import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, } from 'rxjs';


@Injectable()
export class ListPatientesService{

    private apiPatienteUrl = 'http://localhost:8080/patiente/ListPatiente';

    constructor (private http : HttpClient){}

    getListPatientes(): Observable<any[]> {
        return this.http.get<any[]>(this.apiPatienteUrl, { });
      }

}