import { Component, OnInit } from '@angular/core';
import { AuthServicesService } from 'src/app/services/auth-services.service';

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


  constructor(private authServive: AuthServicesService) {

  }

  ngOnInit(): void {
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

  logout(){
    this.authServive.logout()
  }




}
