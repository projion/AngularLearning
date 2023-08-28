import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherRoutingModule } from './teacher-routing.module';
import { DataComponent } from './data/data.component';
import { CourseComponent } from './course/course.component';
import { FormsComponent } from './forms/forms.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ApirequestComponent } from './apirequest/apirequest.component';
import { HttpClientModule } from '@angular/common/http';
import { RequestService } from './service/request.service';
@NgModule({
  declarations: [
    DataComponent,
    CourseComponent,
    FormsComponent,
    ApirequestComponent,
  ],
  imports: [
    CommonModule,
    TeacherRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [RequestService],
})
export class TeacherModule {}
