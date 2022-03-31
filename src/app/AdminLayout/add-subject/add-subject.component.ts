import { Component, OnInit } from '@angular/core';
import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-add-subject',
  templateUrl: './add-subject.component.html',
  styleUrls: ['./add-subject.component.css']
})
export class AddSubjectComponent implements OnInit {

  subjects: any = {
    Code: "",
    Name: "",
    Logo: "",
  }
  constructor(private subjectService: SubjectService) { }

  ngOnInit(): void {
  }


  addSubject() {
    this.subjectService.addNew(this.subjects)
      .subscribe(newStudent => {
        console.log(newStudent)
        alert("Add finish")
        window.location.href = "http://localhost:4200/admin/mon-hoc"
      });
  }

}
