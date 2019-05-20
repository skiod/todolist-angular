import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todolist';
  name  = "to do list by khalid skiod";
  inputText =  "";
  items = []

  add(){
    this.items.push(this.inputText)
    this.inputText = ""
  }
  delete(index){
    this.items.splice(index,1);
  }
}
