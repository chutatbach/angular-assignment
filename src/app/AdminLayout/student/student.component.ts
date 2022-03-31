// import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  user: Array<any> = [];

  constructor(private studentService: StudentService) { }

  keyword: string = "";

  ngOnInit(): void {
    this.getStudent();
  }

  getStudent(searchKeyword: string = "") {
    this.studentService.list(searchKeyword)
      .subscribe(data => {
        this.user = data;
      })
  }

  search() {
    this.getStudent(this.keyword);
  }

  remove(item: any) {
    if (confirm('do you want delete?') == true) {
      this.studentService.delete(item.id)
      .subscribe(data => {
        this.user = this.user.filter((value) => { return value.id != item.id })
      })
    }else {

    }
  }


  isObject(obj: any) {
    return typeof obj === 'object'
  }

  isArray(obj : any ) {
    return Array.isArray(obj)
 }
    

}