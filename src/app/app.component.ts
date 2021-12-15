import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {

  firstTask() {
    const date1 = new Date('12.6.21');
    const date2 = new Date('12.10.21');
    const differenceTime = date2.getTime() - date1.getTime();
    const differenceTimeDays = Math.ceil(differenceTime / (1000 * 3600 * 24));
    
    console.log(date1);
    console.log(date2);
    console.log(differenceTimeDays);
  }

  secondTask(){
    const today = new Date();
    const currentDay = today.getDay();
    const difference = today.getDate() - currentDay + (currentDay == 0 ? -6:1); 
    const monday =  new Date(today.setDate(difference)); 
    console.log(monday);
  }

  ngOnInit() {
    this.firstTask();
    this.secondTask();
  }
}
