import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  Studentform = new FormGroup({ 
    fullname: new FormControl(),
    email: new FormControl(),
    pass: new FormControl(),
    avatar: new FormControl(),
    gender: new FormControl(),
    birthday: new FormControl(),
    roles:new FormControl()
  })
  roles= [
    'member',
    'admin'
  ]
  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    console.log(this.Studentform)
  }

  addStudent() {
    let name = this.Studentform.value.roles
    this.Studentform.value.roles = [{name}]
    this.studentService.addNew( this.Studentform.value)
      .subscribe(newStudent => {
        console.log(newStudent)
        alert("Add finish")
        window.location.href = "http://localhost:4200/admin/sinh-vien"
      });
  }
}
