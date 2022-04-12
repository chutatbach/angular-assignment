// mo

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SubjectComponent } from './HomeLayout/subject/subject.component';
import { HomeComponent } from './HomeLayout/home/home.component';
import { QuizComponent } from './HomeLayout/quiz/quiz.component';
import { FinalComponent } from './HomeLayout/final/final.component';
import { AdminHomeComponent } from './AdminLayout/admin-home/admin-home.component';
import { StudentComponent } from './AdminLayout/student/student.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GenderPipe } from './support/gender.pipe';
import { GoogleLoginProvider, SocialAuthServiceConfig, SocialLoginModule } from 'angularx-social-login';
import { environment } from 'src/environments/environment';
import { AddStudentComponent } from './AdminLayout/add-student/add-student.component';
import { EditStudentComponent } from './AdminLayout/edit-student/edit-student.component';
import { AddSubjectComponent } from './AdminLayout/add-subject/add-subject.component';
import { EditSubjectComponent } from './AdminLayout/edit-subject/edit-subject.component';
import { QuestionComponent } from './AdminLayout/question/question.component';
import { AddQuestionComponent } from './AdminLayout/add-question/add-question.component';
import { EditQuestionComponent } from './AdminLayout/edit-question/edit-question.component';
import { SubjectAdminComponent } from './AdminLayout/subject-admin/subject-admin.component';
import { DashboardComponent } from './AdminLayout/dashboard/dashboard.component';
import { HeaderComponent } from './HomeLayout/header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SubjectComponent,
    HomeComponent,
    QuizComponent,
    FinalComponent,
    AdminHomeComponent,
    StudentComponent,
    GenderPipe,
    AddStudentComponent,
    EditStudentComponent,
    AddSubjectComponent,
    EditSubjectComponent,
    QuestionComponent,
    AddQuestionComponent,
    EditQuestionComponent,
    SubjectAdminComponent,
    DashboardComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    SocialLoginModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  providers: [{
    provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              environment.GOOGLE_CLIENT_ID
            )
          }
        ],
      } as SocialAuthServiceConfig,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
