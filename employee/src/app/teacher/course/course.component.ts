import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
})
export class CourseComponent {
  // variable1 = [1, 'dftyu'];
  @Input() name: string = '';

  @Output()
  dataPass = new EventEmitter();
  SubmitfromChild() {
    console.log('event fire');
    this.dataPass.emit({ price: 20, discount: 10 });
  }
}
