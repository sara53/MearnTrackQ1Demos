import { Component } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
})
export class StudentsComponent {
  studentData: { id: number; fname: string; address: string } = {
    id: 1,
    fname: 'ahmed',
    address: 'Alex',
  };
}
