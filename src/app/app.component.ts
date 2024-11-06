import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WhishItem } from '../classes/whishItem';
import { CommonModule } from '@angular/common';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title : string = 'whishlist';
  items : WhishItem[] = [
    new WhishItem("Get my degree"),
    new WhishItem("Make an Album"),
    new WhishItem("Start a business")
  ]

  toggleItem(item : WhishItem) : void {
    console.log("item '" + item.whishtext + "' was toggled " + item.isComplete)
    item.isComplete = true
  }
}
