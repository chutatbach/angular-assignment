import { Component, OnInit } from '@angular/core';
import { SubjectService } from 'src/app/services/subject.service';


@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {
  subject: any = [];
  constructor(private subjectSevice: SubjectService) { }

  ngOnInit(): void {
    this.getSubject()
  }

  getSubject(searchKeyword: string = "") {
    try {
      this.subjectSevice.list(searchKeyword)
        .subscribe(data => {
          console.log(data)
          this.subject = data
        })
    } catch (error) {
      console.log(error);
      
    }

  }

}

