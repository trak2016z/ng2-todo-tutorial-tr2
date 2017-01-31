import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'todo-summary',
  templateUrl: './todo-summary.component.html',
  styleUrls: ['./todo-summary.component.css']
})
export class TodoSummaryComponent {
  @Input() public itemsLeft: number
  @Input() public showClearButton: boolean
  @Output() public clearButtonClick = new EventEmitter()

  public get itemsLeftText(): string {
    return this.itemsLeft === 0 || this.itemsLeft > 1 ? 'items left' : 'item left'
  }
}
