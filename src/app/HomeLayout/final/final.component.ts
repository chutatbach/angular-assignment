
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';
import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-final',
  templateUrl: './final.component.html',
  styleUrls: ['./final.component.css']
})
export class FinalComponent implements OnInit {

  i :any = 1
  user: any = '';
  id: any = '';
  style: any = '';
  subject_save = {
    logo: '',
    code: ''
  };
  show_subject:any = ''
  constructor(private student: StudentService, private router: ActivatedRoute,private subject: SubjectService) { }

  ngOnInit(): void {
    this.router.params.subscribe(data => {
      console.log(data['id'])
      this.id = data['id']
    })
    this.subject.get_imgSubject(this.id).subscribe(data => this.subject_save = {
      logo:data[0].Logo,
      code:this.id
    })
    var profile: any = JSON.parse(localStorage.getItem('login_user') || "{}")
    this.student.google_id(profile.googleID)
      .subscribe((data) => {
        this.user = data[0]
        this.show_subject = this.user.marks[this.id]
        console.log(this.user.marks);
        
        console.log(this.show_subject)
      })
      this.check_user()
      console.log(this.show_subject)
  }
  check_user(){
    if(this.user.length == 0){
      this.style = "10vh"
    }else{
      this.style = "100vh"
    }
  }
  isObject(obj: any) {
    return typeof obj === 'object'
  }
  isArray(obj : any ) {
    return Array.isArray(obj)
 }

}
