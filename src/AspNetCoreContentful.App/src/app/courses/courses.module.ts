import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseListComponent } from './course-list/course-list.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [CourseListComponent],
  exports: [CourseListComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class CoursesModule { }
