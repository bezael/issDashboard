import { Component } from '@angular/core';

@Component({
  selector: 'iss-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ISS Dashboard';
  alertName: string;

  public alert(e) {
    this.alertName = e.name;
  }
}
