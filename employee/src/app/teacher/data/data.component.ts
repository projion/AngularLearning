import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css'],
})
export class DataComponent {
  arrData = ['abc', 'abd', 'abe'];

  something = null;
  Onrecieve(evt: any) {
    this.something = evt;
  }
}
