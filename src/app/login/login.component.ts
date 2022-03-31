import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SocialAuthService, GoogleLoginProvider } from 'angularx-social-login';
import { AuthServicesService } from '../services/auth-services.service';

declare var show: any; //<-- drag function in js put inside component

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
    abc : {
      bach : {
        chu : "acb"
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
  constructor(private authService: SocialAuthService,private auth: AuthServicesService,private router: Router) {
  }
  ngOnInit(): void {
    // console.log(this.object.abc.bach.chu)
    // new show(); // <---use function
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
    // console.log(this.studentForm)
    // console.log(this.Email)
    // console.log(this.studentForm.controls)
    // console.log(this.studentForm.get('Email'))
   
   
    
  }
  submitForm() {
    window.location.href = "http://localhost:4200/mon-hoc"
  }
  googleLogin(): void {
    // console.log(this.authService)
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID)
      .then(data => {
        // console.log(data)
        this.auth.login(data.email,data.id)
        // console.log( this.auth.login(data.email,data.id))
        // this.router.navigate(['/mon-hoc']);
        // window.location.href = "http://localhost:4200/mon-hoc"
      })
      // let lastname = localStorage.getItem('login-user');
      // console.log(lastname)
      // console.log(localStorage)
  }
}

