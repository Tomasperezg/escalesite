import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'escalesite';

  scroll() {
    document.querySelector('#contact-page').scrollIntoView({ behavior: 'smooth'});
 }
}
