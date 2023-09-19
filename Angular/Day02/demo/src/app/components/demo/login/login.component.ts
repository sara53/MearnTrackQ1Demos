import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  studentName: string = '';
  studentAge: string = '';

  login(e: Event) {
    e.preventDefault();
    console.log(this.studentName);
    console.log(this.studentAge);
  }
  get isStudentNameValid() {
    console.log('test');
    return this.studentName.length >= 3;
  }

  get isStudentNameEmpty() {
    return this.studentName.length == 0;
  }
}
