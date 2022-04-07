
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  code: any = 0;
  quiz: any = [];
  check: any = true;
  check2: any = true;
  style: any = {
    index: '',
    opacity: ''
  }
  style2: any = {
    index: '',
    opacity: ''
  }
  AnswerPut: any = {
    id_parent: '',
    id_children: '',
    text: '',
    index: ''
  }
  QuestionPut: any = {
    id: '',
    text: '',
  }

  saveup: any = ''
  saveup_question: any = ''
  save_index: any 
  constructor(private router: ActivatedRoute, private subjectSevice: SubjectService, private question: QuestionService) { }
  ngOnInit(): void {
    this.router.params.subscribe(par => {
      this.code = par['id'];
    })

    this.subjectSevice.getsubject_code(this.code).subscribe(data => {
      data = data.filter((val: any, index: any) => { return index < 10 })
      this.quiz = [...data]
    })
  }
  showup(answer: any, question: any, i: any) {
    //save cac gia tri de update
    this.show()
    this.AnswerPut.id_parent = question.id
    this.save_index = i
    this.AnswerPut.text = answer.Text
    console.log(answer, question)
    //show 
    this.question.list_id(this.code, question.id).subscribe(data => {
      data.Answers.forEach((val: any, index: any) => {
        if (answer.Id == val.Id) {
          this.AnswerPut.index = index
          this.saveup = data
        }
      });
    })
  }
  submit() {
    this.saveup.Answers[this.AnswerPut.index].Text = this.AnswerPut.text
    this.question.put(this.code, this.AnswerPut.id_parent, this.saveup).subscribe(data => {
      this.quiz[this.save_index] = { ...data }
      this.close()
    }) //de update duoc phai co mon hoc va id cau hoi va data da duoc update lai
  }
  delete_answer() {
    if (confirm('ban muon xoa') == true) {

    } else {

    }
  }
  create_show_asw() {
    this.show()
    this.AnswerPut = {
      id_parent: '',
      id_children: '',
      text: '',
      index: ''
    }
  }
  delete_question() {
    if (confirm('ban muon xoa') == true) {

    } else {

    }
  }
  showput_question(question: any) {
    this.show2()
    console.log(question)
    this.saveup_question = question
    this.QuestionPut.id = question.id
    this.QuestionPut.text = question.Text
    console.log(this.saveup_question)
    this.saveup_question.Text = this.QuestionPut.text
    this.update_question()
  }
  update_question(){
    console.log(this.QuestionPut.text)
  }
  submit2(){
    console.log(this.QuestionPut.text)
  }
  close_question() {
    this.close2()
  }
  close() {
    if (this.check == false) {
      this.style.opacity = 0
      this.style.zindex = -1
      this.check = true
    }
  }
  show() {
    if (this.check == true) {
      this.style.opacity = 1
      this.style.zindex = 99
      this.check = false
    }
  }
  close2() {
    if (this.check2 == false) {
      this.style2.opacity = 0
      this.style2.zindex = -1
      this.check2 = true
    }
  }
  show2() {
    if (this.check2 == true) {
      this.style2.opacity = 1
      this.style2.zindex = 99
      this.check2 = false
    }
  }


}
