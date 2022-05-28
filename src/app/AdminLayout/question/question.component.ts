
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import { SubjectService } from 'src/app/services/subject.service';

declare var showSuccessToast: any; //<-- drag function in js put inside component

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  code: any = 0;
  quiz: any = [];
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
  //--------------------------------------------------------------
  dataput: any = [
    {
      Text: '',
      Marks: '',
      AnswerId: this.random(),
      Answers: [
        {
          Id: '',
          Text: ''
        },
      ]
    }
  ]
  showcreate() {
    this.roles = 'Thêm câu hỏi'
    this.show2()
  }
  addQuestion() {
    this.dataput.push({
      Text: '',
      Marks: '',
      AnswerId: this.random(),
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
  clickAnswer(id: any, check: any, index: any) {
    this.dataput[id].Answers[index].Id = check
    console.log(this.dataput)
  }
  create(data: any) {
    data.forEach((val: any) => {
      this.question.create(this.code, val).subscribe((data) => {
        this.quiz.push(data)
      })
    });
    alert('ban them thanh cong')
    this.close()
  }
  //----------------------------update---------------------------------
  questionform: any = new FormGroup({
    id: new FormControl(),
    Text: new FormControl(),
    Marks: new FormControl(1),
    AnswerId: new FormControl(),
    Answers: new FormArray([
    ]),
  })
  index_question: any = ''
  roles = ''
  get Answers() {
    return this.questionform.get('Answers') as FormArray
  }
  showput(question: any, index: any) {
    this.roles = 'Cập nhật câu hỏi'
    this.show()
    this.questionform = new FormGroup({
      id: new FormControl(question.id),
      Text: new FormControl(question.Text),
      Marks: new FormControl(1),
      AnswerId: new FormControl(question.AnswerId),
      Answers: new FormArray([
      ]),
    })
    for (const val of question.Answers) {
      this.Answers.push(new FormGroup({ Id: new FormControl(val.Id), Text: new FormControl(val.Text) }))
    }
    this.index_question = index
  }
  addChild_put() {
    this.Answers.push(new FormGroup({ Id: new FormControl(this.random()), Text: new FormControl('') }))
  }
  update() {
    this.question.put(this.code, this.questionform.value.id, this.questionform.value).subscribe(data => {
      console.log(data,this.quiz[this.index_question]);
      
      this.quiz[this.index_question] = { ...data }
      this.close()
    })
    alert('ban sua thanh cong')
    new showSuccessToast()
  }
  //-----------------------------delete---------------------------------------
  delete_answer(item: any, id: any) {
    if (confirm('ban muon xoa') == true) {
      item.Answers = item.Answers.filter((val: any) => {
        return val.Id != id
      })
      this.question.put(this.code, item.id, item).subscribe((data: any) => {
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
  random() {
    let a = Math.floor(Math.random() * (110000 - 100000)) + 100000
    return a
  }
  delasw(i: any) {
    this.dataput = this.dataput.Answers.filter((data: any, index: any) => {
      return data[index] != data[i]
    })
  }
  delquestion(i: any) {
    console.log(this.dataput)
    this.dataput = this.dataput.filter((data: any) => {
      return data.AnswerId != i.AnswerId
    })
    console.log(i)
  }
  delputaswers(i: any) {
    this.Answers.controls = this.Answers.controls.filter((data: any, index: any) => {
      return i != index
    })
    // this.questionform.value = this.Answers.value.filter((data: any, index: any) => {
    //   return i != index
    // })
    console.log(this.questionform.value)
  }
}
