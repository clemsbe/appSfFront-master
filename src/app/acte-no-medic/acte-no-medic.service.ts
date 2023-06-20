import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, } from 'rxjs';


@Injectable()
export class ActeNoMedicService{

  private apiUrl = 'http://localhost:8080/acteSageFemme';


    constructor(private http: HttpClient){}



    getActesNoMedic(page: number, size: number): Observable<any[]> {
      const params = { page: page.toString(), size: size.toString() };
      return this.http.get<any[]>(this.apiUrl, { params });
    }

}
