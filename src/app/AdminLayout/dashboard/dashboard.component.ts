import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';
import { SubjectService } from 'src/app/services/subject.service';

declare var btn:any
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  listStudent :Array<any> = []
  listSubject :Array<any> = []
  
  constructor(private Student: StudentService , private subject: SubjectService) { }

  ngOnInit(): void {
    new btn()
    this.Student.list().subscribe(data=>{this.listStudent = [...data]})
    this.subject.list().subscribe(data=>{this.listSubject = [...data]})
  }

  

}
