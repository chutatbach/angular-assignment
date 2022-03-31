import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  code: any = 0;
  quiz: any = [];
  constructor(private http: HttpClient, private router: ActivatedRoute) { }
  ngOnInit(): void {
    this.router.params.subscribe(par => {
      this.code = par['id'];
    })

    this.http.get<any>("http://localhost:3000/" + this.code)
      .subscribe((data) => {
        this.quiz = data
        let index = 0
        this.quiz = this.quiz.filter((value:any) => {
          index++
          return index < 11
        })
        console.log(data)
      })
  }
}
