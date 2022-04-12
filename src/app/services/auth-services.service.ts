import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthServicesService {
  constructor(private http: HttpClient, private router: Router) { }
  getdata = JSON.parse(localStorage.getItem('login_user') || "{}")
  login(Email: string, GoogleID: string)
  // : Observable<any> 
  {
    // console.log(email,googleID)
    // console.log(`${environment.student_api}?email=${email}&googleID=${googleID}`)
    localStorage.setItem('login_user', JSON.stringify({ email: Email, googleID: GoogleID }));
    this.router.navigate(['/mon-hoc']);
    // return this.http.get<any>(`${environment.student_api}?email=${email}&googleID=${googleID}`)
    // .pipe(
    //   map((item) => {
    //     // localStorage.setItem('login_user',JSON.stringify({a:'bach',b:'chu3'}));
    //     if (item.length > 0) {
    //       console.log(item[0])
    //       localStorage.setItem('login_user', JSON.stringify(item[0]));
    //       return item[0]
    //     }
    //     return null
    //   })
    // )
  }
  logout(): void {
    localStorage.removeItem('login_user');
    // this.router.navigate(['login']);
    window.location.href = "login"
  }
}
