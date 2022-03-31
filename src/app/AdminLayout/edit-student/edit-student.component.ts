import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {

  students: any = {
    username: "",
    password: "",
    fullname: "",
    email: "",
    gender: "",
    birthday: "",
    schoolfee: "",
    marks: 0
  }

  id: any = ''

  constructor(private studentService: StudentService,private router:ActivatedRoute) { }

  ngOnInit(): void {
    this.router.params.subscribe(data =>{
      console.log(data['id'])
      this.id = data['id']
    })

    this.getStudent()
    
  }

  getStudent(){
    console.log(this.id)
    this.studentService.list_id(this.id)
    .subscribe(data => {
      console.log(data.birthday)
      this.students = {...data}
    })
  }

  putStudent() {
    console.log(this.id)
    this.studentService.put(this.students,this.id)
      .subscribe(newStudent => {
        console.log(newStudent)
        alert("Update finish")
        window.location.href = "http://localhost:4200/admin/sinh-vien"
      });
  }

}

