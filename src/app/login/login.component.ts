import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SocialAuthService, GoogleLoginProvider } from 'angularx-social-login';
import { AuthServicesService } from '../services/auth-services.service';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  student: any = {
    email: '',
    pass: ''
  }
  object = {
    abc: {
      bach: {
        chu: "acb"
      }
      ,
      tat: {
        ngu: 'nasa'
      }
    }
  }
  studentForm: any = ''
  //---------validate----------
  get Email() {
    return this.studentForm.get('Email');  //get protype Email in this.studentForm
  }
  get Pass() {
    return this.studentForm.get('Pass');
  }
  //---------end - validate----------
  constructor(private authService: SocialAuthService, private auth: AuthServicesService, private router: Router, private google: StudentService) {
  }
  ngOnInit(): void {
    this.studentForm = new FormGroup({
      Email: new FormControl(this.student.email, [
        Validators.required,  //true thi hien loi
        Validators.minLength(10),
        Validators.maxLength(40),
        // Validators.pattern('^[a-zA-Z]+$')
        Validators.email,
      ])
      ,
      Pass: new FormControl(this.student.pass, [
        Validators.required,
        Validators.minLength(5),
      ])
    })
  }
  submitForm() {
    this.router.navigate(['/mon-hoc'])
    // this.google.list().subscribe(data => {
    //   if(data.email){
        
    //   }
    // })
  }
  googleLogin(): void {
    // console.log(this.authService)
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID)
      .then(data => {
        this.auth.login(data.email, data.id)
        this.google.google_id(data.id)
          .subscribe(val => {
            let check = true
            for (const i of val[0].roles) {
              if (i.name == 'admin') {
                check = false
              }
            }
            if (check == false) {
              this.router.navigate(['/admin'])
            } else {
              this.router.navigate(['/mon-hoc'])
            }
          })
      })
  }
}

