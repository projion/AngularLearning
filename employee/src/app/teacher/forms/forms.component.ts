import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css'],
})
export class FormsComponent implements OnInit {
  loginform?: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.loginform = this.fb.group({
      name: [
        '',
        [Validators.required, Validators.maxLength(5), Validators.minLength(3)],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.maxLength(20),
          Validators.minLength(8),
        ],
      ],
      email: [
        '',
        [
          Validators.required,
          Validators.maxLength(50),
          Validators.minLength(5),
          Validators.email,
        ],
      ],
    });
  }

  formValueControl(name) {
    return this.loginform.get(name);
  }
  dataSubmit() {
    console.log(this.loginform.value);
  }
}
