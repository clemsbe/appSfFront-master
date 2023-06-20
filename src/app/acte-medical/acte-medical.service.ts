import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, } from 'rxjs';


@Injectable()
export class ActeMedicalService{

  private apiUrl = 'http://localhost:8080/acteMedical';

  // ?size=100

    constructor(private http: HttpClient){}

    // getActesMedical(): Observable<any[]> {
    //   return this.http.get<any[]>(this.apiUrl);
    // }

    // test chat gtp paginator

    getActesMedical(page: number, size: number): Observable<any[]> {
      const params = { page: page.toString(), size: size.toString() };
      return this.http.get<any[]>(this.apiUrl, { params });
    }

}


// getActesMedical(){
//     return this.http.get<ActeMedicalService[]>("http://localhost:8080/acteMedical")
// }





