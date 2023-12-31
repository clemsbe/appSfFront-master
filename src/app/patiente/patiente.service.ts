import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patiente } from './patiente.component';



@Injectable()
export class PatienteService{


    private getAllUrl = 'http://localhost:8080/patiente';
    constructor(private http: HttpClient){
    }

    // getListPatiente(): Observable<Patiente[]> {
    //     return this.http.get<Patiente[]>('localhost:8080').pipe() 
    // }

    createPatiente(): Observable<any> {
        return this.http.get(this.getAllUrl);
      }

    
}

