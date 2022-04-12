import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { SubjectComponent } from './HomeLayout/subject/subject.component';
import { HomeComponent } from './HomeLayout/home/home.component';
import { QuizComponent } from './HomeLayout/quiz/quiz.component';
import { FinalComponent } from './HomeLayout/final/final.component';

import { AdminHomeComponent } from './AdminLayout/admin-home/admin-home.component';
import { StudentComponent } from './AdminLayout/student/student.component';
import { AddStudentComponent } from './AdminLayout/add-student/add-student.component';
import { EditStudentComponent } from './AdminLayout/edit-student/edit-student.component';
// import { SubjectComponent as AdminSubjectComponent } from './AdminLayout/subject/subject.component';
import { AddSubjectComponent } from './AdminLayout/add-subject/add-subject.component';
import { EditSubjectComponent } from './AdminLayout/edit-subject/edit-subject.component';
import { QuestionComponent } from './AdminLayout/question/question.component';
import { AddQuestionComponent } from './AdminLayout/add-question/add-question.component';
import { EditQuestionComponent } from './AdminLayout/edit-question/edit-question.component';
import { SubjectAdminComponent } from './AdminLayout/subject-admin/subject-admin.component';
import { DashboardComponent } from './AdminLayout/dashboard/dashboard.component';
import { AuthGuard } from './helpers/auth.guard';

const routes: Routes = [
  {
    path:"login",
    component:LoginComponent,
  },
  //------------------
  {
    path:"",
    component:HomeComponent,
    children:[
      {
        path:"mon-hoc",
        component:SubjectComponent,
        
      },
      {
        path:"quiz/:id",
        component:QuizComponent,
        canActivate: [AuthGuard]
      },
      {
        path:"quiz/:id/ketqua",
        component:FinalComponent,
        canActivate: [AuthGuard]
      },
    ]
  },
  //--------------------
  {
    path:"admin",
    component:AdminHomeComponent,
    children:[
      {
        path: '',
        component:DashboardComponent 
      },
      {
        path:"sinh-vien",
        component:StudentComponent
      },
      {
        path:'sinh-vien/add',
        component:AddStudentComponent
      },
      {
        path:'sinh-vien/edit/:id',
        component:EditStudentComponent
      },

      {
        path:'mon-hoc',
        component:SubjectAdminComponent
      },
      {
        path:'mon-hoc/add',
        component:AddSubjectComponent
      },
      {
        path:'mon-hoc/edit/:id',
        component:EditSubjectComponent
      },

      {
        path:'cau-hoi/:id',
        component:QuestionComponent
      },
      {
        path:'cau-hoi/:id/add',
        component:AddQuestionComponent
      }, {
        path:'cau-hoi/edit/:id',
        component:EditQuestionComponent
      },

    ]
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
