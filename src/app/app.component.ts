import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-sample-app';
  success_msg = false

  superhero = "superman"
  contacts = [
    {
      'firstName':'lewis',
      'lastName': 'cao',
      '_id':'0001'
    },
    {
      'firstName':'Henry',
      'lastName': 'cao',
      '_id':'0002'
    },
    {
      'firstName':'Tiffany',
      'lastName': 'cao',
      '_id':'0003',
    },
    {
      'firstName':'Zack',
      'lastName': 'cao',
      '_id':'0004',
    },
    {
      'firstName':'Ben',
      'lastName': 'cao',
      '_id':'0005',
    },
  ]
  validated = false
  backgoundColorProp = "purple"
  colorProp = "red"
}
