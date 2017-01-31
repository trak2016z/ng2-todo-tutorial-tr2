import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'todo-input',
  templateUrl: 'input.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoInputComponent {

  @Input() public placeholder: string = ''
  @Output() public newInputValue = new EventEmitter<string>()

  public emitInputValueAndClear(input): void {
    this.newInputValue.emit(input.value)
    input.value = ''
  }
}
