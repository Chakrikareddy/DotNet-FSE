import { Routes } from '@angular/router';
import { CourseCrud } from './pages/course-crud/course-crud';
import { Home } from './pages/home/home';
import { CourseList } from './pages/course-list/course-list';
import { EnrollmentForm } from './pages/enrollment-form/enrollment-form';
import { ReactiveEnrollment } from './pages/reactive-enrollment/reactive-enrollment';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';
import { CourseDetails } from './pages/course-details/course-details';
import { NotFound } from './pages/not-found/not-found';

export const routes: Routes = [

  {
    path:'',
    component:Home
  },
  {
  path: 'crud',
  component: CourseCrud
  },

  {
    path:'courses',
    component:CourseList
  },

  {
    path:'enrollment',
    component:EnrollmentForm
  },

  {
    path:'reactive-enrollment',
    component:ReactiveEnrollment
  },

  {
    path:'about',
    component:About
  },

  {
    path:'contact',
    component:Contact
  },

  {
    path:'course/:id',
    component:CourseDetails
  },

  {
    path:'**',
    component:NotFound
  }

];