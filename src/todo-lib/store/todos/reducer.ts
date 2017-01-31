import { Action } from '@ngrx/store'
import { ITodo } from '../../dal/dto'
import {
  ChangeTodoAction, DeleteTodoAction, GetTodosActionSuccess, CreateTodoAction,
  DeleteCompletedTodosAction
} from './actions'

export function todosReducer(state: ITodo[], action: Action) {
  console.log(action)
  switch(action.type) {

    case GetTodosActionSuccess.name:
      return action.payload || []

    case CreateTodoAction.name:
      return [...state, action.payload]

    case DeleteTodoAction.name:
      return state.filter((todo, index) => index !== action.payload)

    case ChangeTodoAction.name:
      return state.map((todo, index) => index !== action.payload
        ? todo : Object.assign({}, todo, { completed: !todo.completed }))

    case DeleteCompletedTodosAction.name:
      return state.filter(todo => !todo.completed)

    default:
      return state

  }
}
