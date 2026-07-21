import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-reactive-enrollment',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reactive-enrollment.html',
  styleUrl: './reactive-enrollment.css'
})
export class ReactiveEnrollment {

  private fb = inject(FormBuilder);

  enrollmentForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    course: ['', Validators.required]
  });

  onSubmit() {
    if (this.enrollmentForm.valid) {
      alert('Enrollment Successful');
      console.log(this.enrollmentForm.value);
    }
  }

  resetForm() {
    this.enrollmentForm.reset();
  }
}