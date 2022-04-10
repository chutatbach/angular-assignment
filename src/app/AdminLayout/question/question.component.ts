
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import { SubjectService } from 'src/app/services/subject.service';

declare var object_add: any; //<-- drag function in js put inside component

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  code: any = 0;
  quiz: any = [];
  data: any = {
    id: '',
    Text: '',
    Marks: '',
    AnswerId: '',
    Answers: [
      {
        Id: '',
        Text: ''
      },
    ]
  }
  dataput: any = [
    {
      Text: '',
      Marks: '',
      AnswerId: 1,
      Answers: [
        {
          Id: '',
          Text: ''
        },
      ]
    }
  ]
  constructor(private router: ActivatedRoute, private subjectSevice: SubjectService, private question: QuestionService) { }
  ngOnInit(): void {
    this.router.params.subscribe(par => {
      this.code = par['id'];
    })
    this.subjectSevice.getsubject_code(this.code).subscribe(data => {
      data.reverse()
      this.quiz = [...data]
    })
  }
  //-------------------------show data update--------------------------------------
  index_question: any = ''
  roles = ''
  showput(question: any, index: any) {
    this.roles = 'Cập nhật câu hỏi'
    this.show()
    this.data = { ...question }
    this.index_question = index
  }
  valTrue: any = 0
  idFalse: any = 0
  showcreate() {
    this.roles = 'Thêm câu hỏi'
    this.show2()
  }
  //-----------------------------------------------------
  addQuestion() {
    this.dataput.push({
      Text: '',
      Marks: '',
      AnswerId: 1,
      Answers: [
        {
          Id: '',
          Text: ''
        },
      ]
    })
  }
  addChild(index: any) {
    this.dataput[index].Answers.push({
      Id: '',
      Text: ''
    })
  }
  clickAnswer(id:any,check:any,index:any){
    this.dataput[id].Answers[index].Id = check
  }
  create(data: any) {
    data.forEach((val:any) => {
      this.question.create(this.code,val).subscribe((data)=> {
        this.quiz.push(data)
        alert('ban them thanh cong')
        this.close()
      })
    });
  }
  //----------------------------update---------------------------------
  update(data: any) {
    this.question.put(this.code, data.id, data).subscribe(data => {
      this.quiz[this.index_question] = { ...data }
      this.close()
    })
  }
  //-----------------------------delete---------------------------------------
  delete_answer(item: any, id: any) {
    if (confirm('ban muon xoa') == true) {
      item.Answers = item.Answers.filter((val: any) => {
        return val.Id != id
      })
      this.question.put(this.code, item.id, item).subscribe((data: any) => {
        this.quiz[item.id] = { ...data }
      })
    }
  }
  delete_question(item: any, index: any) {
    if (confirm('ban muon xoa') == true) {
      this.question.delete(this.code, item.id).subscribe(data => {
        this.quiz[index] = { ...data }
      })
    }
  }
  //--------------------------style---------------------------------
  style: any = {
    index: '',
    opacity: ''
  }
  style2: any = {
    index: '',
    opacity: ''
  }
  check: any = true;
  check2: any = true;
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
