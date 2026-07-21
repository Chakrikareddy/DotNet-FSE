import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private http = inject(HttpClient);

  api = 'https://localhost:7112/api/Course';

  getCourses() {
    return this.http.get<any[]>(this.api);
  }

  addCourse(course: any) {
    return this.http.post(this.api, course);
  }

  updateCourse(id: number, course: any) {
    return this.http.put(`${this.api}/${id}`, course);
  }

  deleteCourse(id: number) {
    return this.http.delete(`${this.api}/${id}`);
  }
}