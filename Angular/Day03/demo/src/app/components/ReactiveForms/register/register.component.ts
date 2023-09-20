import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  registerForm = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]),
    age: new FormControl(null, [Validators.required]),
  });

  get getUsername() {
    return this.registerForm.controls['username'];
  }

  get getAge() {
    return this.registerForm.controls['age'];
  }
  register(e: Event) {
    e.preventDefault();
    if (this.registerForm.status == 'VALID') {
      // connect
    } else {
      console.log('Has Error');
    }
  }
}
