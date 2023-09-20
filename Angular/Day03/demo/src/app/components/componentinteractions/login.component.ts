import { Component, EventEmitter, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  ngOnInit(): void {
    this.myEvent.emit(this.loginData);
  }
  loginData: string = 'Data From Login Component';

  @Output() myEvent = new EventEmitter();
}
