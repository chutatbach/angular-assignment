
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-final',
  templateUrl: './final.component.html',
  styleUrls: ['./final.component.css']
})
export class FinalComponent implements OnInit {

  i :any = 1
  user: any = [];
  id: any = '';
  constructor(private student: StudentService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.router.params.subscribe(data => {
      console.log(data['id'])
      this.id = data['id']
    })

    this.student.list()
      .subscribe((data) => {
        console.log(data)
        this.user = data
      })
  }

  isObject(obj: any) {
    return typeof obj === 'object'
  }

  isArray(obj : any ) {
    return Array.isArray(obj)
 }

}
