import { Component } from '@angular/core';
import {FormControl} from '@angular/forms'
import { fade } from './animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[
    fade
  ]
})
export class AppComponent {
  title = 'animation-project';
   items:any[] = [
     'I am a student',
     'Someone is so kind',
     'Many people works together here'
   ];

  setValue(input: HTMLInputElement){
    console.log(input.value);
    this.items.splice(0,0,input.value);
    input.value = '';
  }

  removeItem(item){
    let index = this.items.indexOf(item);
    this.items.splice(index,1);
    //console.log(this.items);
  }
}
