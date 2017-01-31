import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'todo-list-item',
  templateUrl: 'list-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoListItemComponent {
  @Input() public name: string
  @Input() public completed: boolean
  @Input() public id: number
  @Output() public checkboxClick = new EventEmitter<number>()
  @Output() public deleteButtonClick = new EventEmitter<number>()

  public emitCheckboxClick(): boolean {
    this.checkboxClick.emit(this.id)
    return false
  }

  public emitDestroyBtnClick() {
    this.deleteButtonClick.emit(this.id)
  }
}
