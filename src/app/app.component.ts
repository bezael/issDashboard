import { Component } from '@angular/core';

@Component({
  selector: 'iss-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ISS Dashboard';
  alertName: string;
  hasAlert = false;

  public alert(e) {
    this.hasAlert = e.alert;
    this.alertName = e.name;
  }
}
