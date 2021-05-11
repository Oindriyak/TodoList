import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'todo';

  c=3;
  b=document.querySelector("button");
  add(){
    this.c=this.c+1;
    
  }
}
