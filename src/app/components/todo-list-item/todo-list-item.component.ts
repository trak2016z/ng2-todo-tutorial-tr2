import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css']
})
export class TodoListItemComponent {
  @Input() public name: string
  @Input() public completed: boolean
  @Input() public id: number
  @Output() public checkboxClick = new EventEmitter<number>()
  @Output() public destroyBtnClick = new EventEmitter<number>()

  public emitCheckboxClick(): boolean {
    this.checkboxClick.emit(this.id)
    return false
  }

  public emitDestroyBtnClick() {
    this.destroyBtnClick.emit(this.id)
  }
}
