import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css']
})
export class TodoInputComponent {

  @Input() public placeholder: string = ''
  @Output() public newInputValue = new EventEmitter<string>()

  public emitInputValueAndClear(input): void {
    this.newInputValue.emit(input.value)
    input.value = ''
  }
}
