import { todosReducer } from './todos/reducer'
import { Action } from './action'

export interface IReducer {
  [branch: string]: (state: any, action: Action) => any
}

export const reducer: IReducer = {
  todos: todosReducer,
}
