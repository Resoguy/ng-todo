import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'New Todo App';
  homeText = 'Hello Ngg'

  changeTitle() {
    this.title = 'Title changed!';
  }

  buttonClickHandler() {
    console.log('Child button clicked!');
  }
}
