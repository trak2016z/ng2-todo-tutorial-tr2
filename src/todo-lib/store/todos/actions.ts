import { Action } from '../action'
import { ITodo } from '../../dal/dto'
import {EffectStart, EffectSuccess} from '../actions';

export class GetTodosAction extends EffectStart {}

export class GetTodosActionSuccess extends EffectSuccess {}

export class DeleteTodoAction extends Action {
  constructor(public payload: number) {
    super()
  }
}

export class ChangeTodoAction extends Action {
  constructor(public payload: number) {
    super()
  }
}

export class CreateTodoAction extends Action {
  constructor(public payload: ITodo) {
    super()
  }
}

export class DeleteCompletedTodosAction extends Action {}

export class UpdateTodosAction extends EffectStart {
  constructor(public payload: ITodo[]) {
    super()
  }
}

export class UpdateTodosActionSuccess extends EffectSuccess {}



