import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-enrollment-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './enrollment-form.html',
  styleUrl: './enrollment-form.css'
})
export class EnrollmentForm {

  student = {
    name: '',
    email: '',
    course: ''
  };

  submitted = false;

  onSubmit() {
    this.submitted = true;
    alert('Enrollment Successful!');
    console.log(this.student);
  }

  resetForm() {
    this.student = {
      name: '',
      email: '',
      course: ''
    };

    this.submitted = false;
  }
}