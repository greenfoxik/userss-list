import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'users-list';
  typesOfShoes: string[] = ['Anastasia','Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
}
