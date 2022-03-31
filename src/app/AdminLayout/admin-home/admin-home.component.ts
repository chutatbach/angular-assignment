import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {
  style:any = {
    opacity : '',
    zindex: '',
  }
  check:boolean = true
 

  constructor() { }

  ngOnInit(): void {
    // click_img()
  }
  dropdown(){

    if(this.check == true){
      this.style.opacity = 1
      this.style.zindex = 99
      this.check = false
    }else{
      this.style.opacity = 0
      this.style.zindex = -1
      this.check = true
    }

  }

}
