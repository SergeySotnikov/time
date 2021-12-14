import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  today = new Date();
  DD = String(this.today.getDate()).padStart(2, '0');
  MM = String(this.today.getMonth() + 1).padStart(2, '0'); //January is 0!
  yyyy = String(this.today.getFullYear()).padStart(2, '0');
  hh = String(this.today.getHours()).padStart(2, '0');
  mm = String(this.today.getMinutes()).padStart(2, '0');
  ss = String(this.today.getSeconds()).padStart(2, '0');

  currentDay =
    this.DD +
    '.' +
    this.MM +
    '.' +
    this.yyyy +
    ' ' +
    this.hh +
    ':' +
    this.mm +
    ':' +
    this.ss;
}
