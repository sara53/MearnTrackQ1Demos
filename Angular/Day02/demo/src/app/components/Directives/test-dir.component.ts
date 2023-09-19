import { Component } from '@angular/core';

@Component({
  selector: 'app-test-dir',
  templateUrl: './test-dir.component.html',
  styleUrls: ['./test-dir.component.css'],
})
export class TestDirComponent {
  flag: boolean = false;

  selectedTrack: string = '';

  itiTracks: string[] = ['Mearn', 'IOT', 'DotNet', 'Open source'];

  color: string = 'green';

  toggle() {
    this.flag = !this.flag;
  }
}
