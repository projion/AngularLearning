import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css'],
})
export class HelloComponent {
  nameOfParent: string = 'From Parent Hello Dynamically.';
  email: string = 'NothinG';
  onsubmit() {
    console.log('onsubmit function hitted');
  }
  onchange(ev: any) {
    this.nameOfParent = ev.target.value;
    // console.log(ev.target.value);
  }
  // onchange() {
  //   console.log('onchange function hitted');
  // }
}
