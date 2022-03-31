import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SubjectService{

  constructor(private http:HttpClient) { }

  getsubject_code(id = ''):Observable<any>{
    return this.http.get<any>(`${environment.baseURL}/${id}`)
  }
  list(searchKeyword = ''):Observable<any>{
    return this.http.get<any>(`${environment.subject_api}?Name_like=${searchKeyword}`)
  }
  addNew(data:any): Observable<any>{
    return this.http.post<any>(environment.subject_api,{...data});
  }
  list_id(id: any): Observable<any>{
    return this.http.get<any>(`${environment.subject_api}/${id}`);
  }
  list_code(code = ''): Observable<any>{
    return this.http.get<any>(`${environment.subject_api}/${code}`);
  }
  put(data:any,id = ''): Observable<any>{
    return this.http.put<any>(`${environment.subject_api}/${id}`,{...data});
  }
  delete(id = ''): Observable<any> {
    return this.http.delete<any>(`${environment.subject_api}/${id}`);
  } 
}
