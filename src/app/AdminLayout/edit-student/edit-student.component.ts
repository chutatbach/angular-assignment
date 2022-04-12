import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {

  Studentform = new FormGroup({ 
    fullname: new FormControl(),
    email: new FormControl(),
    pass: new FormControl(),
    avatar: new FormControl(),
    gender: new FormControl(),
    birthday: new FormControl(),
    roles:new FormControl()
  })

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
  roles= [
    'member',
    'admin'
  ]

  constructor(private studentService: StudentService,private router:ActivatedRoute,private routers:Router) { }

  ngOnInit(): void {
    this.router.params.subscribe(data =>{
      console.log(data['id'])
      this.id = data['id']
    })

    this.getStudent()
   
    
  }

  getStudent(){
    this.studentService.list_id(this.id)
    .subscribe(data => {
      this.students = {...data}
      console.log(this.students)
    })
  }

  putStudent() {
    this.studentService.put(this.students,this.id)
      .subscribe(newStudent => {
        alert("Update finish")
        this.routers.navigate(["/admin/sinh-vien"])
      });
  }

}

