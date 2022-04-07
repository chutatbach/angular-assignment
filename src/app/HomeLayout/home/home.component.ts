import { Component, OnInit } from '@angular/core';
import { AuthServicesService } from 'src/app/services/auth-services.service';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  style: any = {
    opacity: '',
    zindex: '',
  }
  check: boolean = true
  user: any = {
    fullname: "",
    googleID: "",
    avatar: ""
  }


  constructor(private authServive: AuthServicesService, private google: StudentService) {

  }

  ngOnInit(): void {
    var profile: any = JSON.parse(localStorage.getItem('login_user') || "{}")
    // console.log(profile.googleID)

    this.google.google_id(profile.googleID)
      .subscribe(data => {
        this.user = { ...data[0] }
      })


    // click_img()
  }
  dropdown() {

    if (this.check == true) {
      this.style.opacity = 1
      this.style.zindex = 99
      this.check = false
    } else {
      this.style.opacity = 0
      this.style.zindex = -1
      this.check = true
    }

  }

  logout() {
    this.authServive.logout()
  }




}
