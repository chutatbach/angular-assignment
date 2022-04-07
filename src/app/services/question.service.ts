import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http:HttpClient ) { }
  put(id = '',Id = '',data:any): Observable<any>{
    return this.http.put<any>(`${environment.baseURL}/${id}/${Id}`,{...data});
  }
  list_id(id: any,Id:any): Observable<any>{
    return this.http.get<any>(`${environment.baseURL}/${id}/${Id}`);
  }
}
