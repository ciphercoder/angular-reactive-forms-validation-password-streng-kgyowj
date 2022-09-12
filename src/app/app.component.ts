import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from
  "@angular/forms"
import { PasswordStrengthValidator } from "./password-strength.validators"


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public form: FormGroup;

  constructor(fb: FormBuilder) {

    this.form = fb.group({
      password: ['', [Validators.required, Validators.minLength(8), PasswordStrengthValidator]]
    });



  }


}


