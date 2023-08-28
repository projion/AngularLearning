import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataComponent } from './data/data.component';
import { CourseComponent } from './course/course.component';
import { FormsComponent } from './forms/forms.component';
import { ApirequestComponent } from './apirequest/apirequest.component';

const routes: Routes = [
  // {
  //   path: 'api',
  //   loadChildren: () => import('./teacher.module').then((m) => m.TeacherModule),
  // },
  {
    path: '',
    component: DataComponent,
  },
  {
    path: 'course',
    component: CourseComponent,
  },
  {
    path: 'forms',
    component: FormsComponent,
  },
  {
    path: 'api',
    component: ApirequestComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeacherRoutingModule {}
