import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';
import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  listStudent: Array<any> = []
  listSubject: Array<any> = []

  constructor(private Student: StudentService, private subject: SubjectService) { }

  ngOnInit(): void {
    this.Student.list().subscribe(data => { this.listStudent = [...data] ; this.show()})
    this.subject.list().subscribe(data => { this.listSubject = [...data] })
   this.show()
  }
  show(){
    for (let val of this.listStudent) {
      for (let i in val.marks) {
        console.log(val,i)
      }
    }
    console.log(this.listStudent)
  }





}
