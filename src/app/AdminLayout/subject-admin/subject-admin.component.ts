import { Component, OnInit } from '@angular/core';
import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-subject-admin',
  templateUrl: './subject-admin.component.html',
  styleUrls: ['./subject-admin.component.css']
})
export class SubjectAdminComponent implements OnInit {

  subject :Array<any> = [];
  keyword:any = ''
  constructor(private subjectService: SubjectService) { }

  ngOnInit(): void {
    this.getSubject()
  }

  getSubject (searchKeyword:string = ""){
    this.subjectService.list(searchKeyword)
    .subscribe(data => {
      this.subject = data
      console.log(this.subject)
    })
  }

  search() {
    this.getSubject(this.keyword);
  }

  remove(item: any) {
    if (confirm('do you want delete?') == true) {
      this.subjectService.delete(item.id)
      .subscribe(data => {
        this.subject = this.subject.filter((value) => { return value.id != item.id })
      })
    }else {

    }
  }

}
