import { Component, OnInit } from '@angular/core';
// import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SocialAuthService,GoogleLoginProvider } from "angularx-social-login";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // loginForm: FormGroup = new FormGroup({
  //   email: new FormControl('',[
  //     Validators.required,
  //     Validators.email
  //   ]),
  //   password: new FormControl('')
  // })

  constructor(private authService: SocialAuthService) { }

  ngOnInit(): void {
    
  }

  googleLogin(): void{
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID)
    .then(resp => {
      console.log(resp); 
      window.location.href = "http://localhost:4200/mon-hoc"
    })
  }

  submitForm(){
    console.log(1)
    // console.log(this.loginForm.value)
  }

}
