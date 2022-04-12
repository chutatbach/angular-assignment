import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-edit-subject',
  templateUrl: './edit-subject.component.html',
  styleUrls: ['./edit-subject.component.css']
})
export class EditSubjectComponent implements OnInit {

  subjects: any = {
    Code: "",
    Name: "",
    Logo: "",
  }
  id:any = '';

  constructor(private subjectService: SubjectService,private router:ActivatedRoute) { }

  ngOnInit(): void {
    this.router.params.subscribe(data =>{
      console.log(data['id'])
      this.id = data['id']
     
    })

    this.subjectService.list_id(this.id).subscribe(data => {
      this.subjects = {...data}
    })
  }
  
  putSubject() {
    this.subjectService.put(this.subjects,this.id)
      .subscribe(newSubject => {
        console.log(newSubject)
        alert("Add finish")
        window.location.href = "http://localhost:4200/admin/mon-hoc"
      });
  }

}