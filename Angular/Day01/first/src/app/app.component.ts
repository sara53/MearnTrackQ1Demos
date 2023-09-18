import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  imgSrc: string = '3.jpg';
  imgSrc2: string = 'assets/imgs/1.jpg';
  i: number = 0;
  imagesList: string[] = [
    'assets/imgs/1.jpg',
    'assets/imgs/2.jpg',
    'assets/imgs/3.jpg',
  ];
  showNextImage(): void {
    if (this.imagesList.length - 1 == this.i) {
      this.i = 0;
    }
    this.i++;

    this.imgSrc2 = this.imagesList[this.i];
  }
}
