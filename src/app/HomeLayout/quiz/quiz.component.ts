
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthServicesService } from 'src/app/services/auth-services.service';
import { StudentService } from 'src/app/services/student.service';
import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  constructor(private router: ActivatedRoute, private subjectSevice: SubjectService, private studentSevice: StudentService, private auth: AuthServicesService) { }
  code: any = 0;
  quiz: any = [];
  sumAnswer: any = {};
  saveScore: any = 0
  profile: any = ''
  userID: any = ''
  save_index: any = 0;
  data_put: any = ''
  mili: number = 5000



  ngOnInit(): void {
    console.log(this.auth.getdata)
    this.router.params.subscribe(par => {
      this.code = par['id'];
    })
    this.getdata()
    this.profile = JSON.parse(localStorage.getItem('login_user') || "{}")
    this.studentSevice.google_id(this.profile.googleID)
      .subscribe(data => {
        for (const key in data[0].marks) {
          console.log(key)
        }
        this.data_put = data[0]
        this.userID = data[0].id
      })

    // het time updae point
    setInterval(() => {
      this.mili = this.mili - 1
      if (this.mili == 0) {
        this.prepare()
      }
    }, 1000)

  }
  getdata() {
    this.subjectSevice.getsubject_code(this.code)
      .subscribe(data => {
        data.sort(() => Math.random() - 0.5)
        this.quiz = data.filter((val: any, index: any) => {
          return index && index < 11
        })
      })
  }
  clickAnswer(idtrue: number, idCon: any) {
    this.sumAnswer[idtrue] = idCon
    let i = 0
    for (const key in this.sumAnswer) {
      console.log(this.sumAnswer[key])
      if (key == this.sumAnswer[key]) {
        i++
      }
    }
    this.saveScore = i.toFixed() //tong diem
    console.log(this.saveScore)
  }
  result() {
    this.prepare()
  }
  prepare() {
    let check = true;
    for (const key in this.data_put.marks) {
      if (key == this.code) {
        this.save_index = key
        check = false
      }
    }
    //true
    if (check == true) {
      this.save_index = this.code
      this.add()
    }
    //false
    else {
      this.add()
    }
  }
  add() {
    this.data_put.marks[this.save_index] = this.saveScore
    this.studentSevice.put_google(this.data_put, this.userID).subscribe(
      data => {
        alert('success');
        window.location.href = `/quiz/${this.code}/ketqua`
      }
    )
  }

  back() {
    window.location.href = '/mon-hoc'
  }

  isArray(obj: any) {
    return Array.isArray(obj)
  }
}
