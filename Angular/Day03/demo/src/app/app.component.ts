import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  dataFromLogin: any = '';
  componentTitle: string = 'Hello From App Component';
  execute(x: any) {
    this.dataFromLogin = x;
  }

  changeTitle() {
    this.componentTitle = 'new Component Title';
  }
}
