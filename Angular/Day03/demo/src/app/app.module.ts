import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/componentinteractions/login.component';
import { ContentComponent } from './components/content/ContentComponent';
import { StudentsComponent } from './components/componentinteractions/students/students.component';
import { StudentDetailsComponent } from './components/componentinteractions/student-details/student-details.component';
import { RegisterComponent } from './components/ReactiveForms/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ContentComponent,
    StudentsComponent,
    StudentDetailsComponent,
    RegisterComponent,
  ],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
