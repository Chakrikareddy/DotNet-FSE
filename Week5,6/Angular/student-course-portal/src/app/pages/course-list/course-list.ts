import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CourseCard } from '../../components/course-card/course-card';
import { SearchPipe } from '../../pipes/search-pipe';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    CourseCard,
    SearchPipe
  ],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseList {

  searchText = '';

  today = new Date();

  courses = [

    {
      id: 1,
      name: 'Angular',
      code: 'ANG101',
      credits: 4,
      fee: 15000,
      gradeStatus: 'passed'
    },

    {
      id: 2,
      name: 'Java',
      code: 'JAVA101',
      credits: 3,
      fee: 12000,
      gradeStatus: 'failed'
    },

    {
      id: 3,
      name: 'Python',
      code: 'PY101',
      credits: 2,
      fee: 10000,
      gradeStatus: 'pending'
    }

  ];

  selectedCourseId = 0;

  onEnroll(id:number){

    this.selectedCourseId=id;

  }

}