import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http: HttpClient) { }
  put(code = '', id = '', data: any): Observable<any> {
    return this.http.put<any>(`${environment.baseURL}/${code}/${id}`, { ...data });
  }
  list_id(code: any, id: any): Observable<any> {
    return this.http.get<any>(`${environment.baseURL}/${code}/${id}`);
  }
  create(code: any, data: any): Observable<any> {
    return this.http.post<any>(`${environment.baseURL}/${code}`, { ...data });
  }
  delete(code: any, id: any): Observable<any> {
    return this.http.delete<any>(`${environment.baseURL}/${code}/${id}`)
  }
}
