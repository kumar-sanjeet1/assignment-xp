import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  listItems = [0];
  fontSize = 16;


  addItem() {
    const len = this.listItems.length;
    this.listItems.push(len);
  }

  deleteItem(index) {
    this.listItems.splice(index, 1);
  }

  updateFont(event) {
    this.fontSize = event.target.value;
    console.log(event.target.value);
  }
}
