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
  dynamicClass= 'ngClass3'
  conditionalClass4 = 'ngClass4'
  conditionalClass5 = 'ngClass5'

  getNgClassName(){
    return 'ngClass3';
  }
  imgSrc = "test.png"
  imgAlt= "This is a missing image"
  txtColor = "blue"
  
  username = "2 way databinding"

  pipe_data1  = "PIPE_DATA"
  pipe_data2 = "pipe_data"
  pipe_data3  = Date.now()
  pipe_data4  = { username:"lewiscao", major:"SE"}
  pipe_data5 = 125
  pipe_data6 = 0.33
} 
