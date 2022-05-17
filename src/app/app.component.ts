import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  width : number;
  height : number;
  top : number ;
  left : number;

  constructor()
  {
    this.collectDataFromJSONFile();
  }

  collectDataFromJSONFile()
  {
    this.width = 200;
    this.height = 200;
    this.top = 300;
    this.left = 850 ;
  }
}
