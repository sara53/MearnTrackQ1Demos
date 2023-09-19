import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent {
  inputValue: string = '';
  @ViewChild('myInput') myElement: any;
  getInputValue(element: any) {
    console.log(element);

    // console.log(e.textContent);
    // let target = e.target as HTMLInputElement;
    // this.inputValue = e;
  }

  show() {
    console.log(this.myElement);
  }
}
