import { IStoreBase } from './store'
import { todosInitial } from './todos/initial'

export const initialStore: IStoreBase = {
  todos: todosInitial,
}
