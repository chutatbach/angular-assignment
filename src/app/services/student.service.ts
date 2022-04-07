import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }
  
  list(searchKeyword = ''): Observable<any>{
    return this.http.get<any>(`${environment.student_api}?email_like=${searchKeyword}`);
  }
  addNew(data:any): Observable<any>{
    return this.http.post<any>(environment.student_api,{...data});
  }
  list_id(id: any): Observable<any>{
    return this.http.get<any>(`${environment.student_api}/${id}`);
  }
  google_id(id: any): Observable<any>{
    return this.http.get<any>(`${environment.student_api}?googleID=${id}`);
  }
  finish(id: any): Observable<any>{
    return this.http.get<any>(`${environment.student_api}?googleID=${id}`);
  }
  put(data:any,id = ''): Observable<any>{
    return this.http.put<any>(`${environment.student_api}/${id}`,{...data});
  }
  put_google(data:any,id:any): Observable<any>{
    return this.http.put<any>(`${environment.student_api}/${id}`,{...data});
  }
  add_google(data:any,id:any): Observable<any>{
    return this.http.post<any>(`${environment.student_api}/${id}`,{...data});
  }
  delete(id = ''): Observable<any> {
    return this.http.delete<any>(`${environment.student_api}/${id}`);
  } 
}