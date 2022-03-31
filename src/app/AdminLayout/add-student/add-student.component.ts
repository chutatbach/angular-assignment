import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  students:any = {
      username: "",
      password: "",
      fullname: "",
      email: "",
      gender: "",
      birthday: "",
      schoolfee: "",
      marks: 0
    }
  constructor(private studentService:StudentService) { }

  ngOnInit(): void {
  }


  addStudent(){
    this.studentService.addNew(this.students)
    .subscribe(newStudent => {
      console.log(newStudent)
      alert("Add finish")
      window.location.href = "http://localhost:4200/admin/sinh-vien"
    });
  }

}
