
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  constructor(private router: ActivatedRoute, private subjectCode: SubjectService) { }
  code: any = 0;
  quiz: any = [];

  ngOnInit(): void {
    console.log(this.router)
    this.router.params.subscribe(par => {
      this.code = par['id'];
    })

    this.subjectCode.getsubject_code(this.code)
      .subscribe(data => {
        this.quiz = data
      })
  }
}
