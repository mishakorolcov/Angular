import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  lat: number = 49.8418766;
  lng: number = 24.0312914;


  myFirstReactiveForm: FormGroup;


  constructor(private fb: FormBuilder) { }
  ngOnInit() {
    this.initForm();
  }
  onSubmit() {
    const controls = this.myFirstReactiveForm.controls;

    if (this.myFirstReactiveForm.invalid) {
      Object.keys(controls)
        .forEach(controlName => controls[controlName].markAsTouched());

      return;
    }

    /** TODO: Обработка данных формы */
    console.log(this.myFirstReactiveForm.value);
  }

  isControlInvalid(controlName: string): boolean {
    const control = this.myFirstReactiveForm.controls[controlName];

    const result = control.invalid && control.touched;

    return result;
  }

  private initForm() {
    this.myFirstReactiveForm = this.fb.group({
      name: ['', [
        Validators.required,
        Validators.pattern(/[A-я]/),
        Validators.minLength(4),
        Validators.maxLength(15)
      ]
      ],
      email: ['', [
        Validators.required, Validators.email
      ]
      ],
      message: ['', [
        Validators.required,
        Validators.pattern(/[A-я]/),
        Validators.minLength(10),
        Validators.maxLength(1000)
      ],
      ]
    });
  }
}
