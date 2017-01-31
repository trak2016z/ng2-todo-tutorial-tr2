import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'todo-summary',
  templateUrl: 'summary.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoSummaryComponent {
  @Input() public itemsLeft: number
  @Input() public showClearButton: boolean
  @Output() public clearButtonClick = new EventEmitter()

  public get itemsLeftText(): string {
    return this.itemsLeft === 0 || this.itemsLeft > 1 ? 'items left' : 'item left'
  }
}
