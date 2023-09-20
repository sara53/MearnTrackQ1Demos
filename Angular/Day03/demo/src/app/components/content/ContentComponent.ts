import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
  OnDestroy,
} from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit, OnChanges, OnDestroy {
  constructor() {
    console.log('1-ctor');
  }
  ngOnDestroy(): void {
    console.log('');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
  ngOnInit(): void {
    // connection api--
    console.log('2-on init');
  }

  @Input() dataFromParenet: string = 'Any Data';
  @Input() childData: any = '';
}
