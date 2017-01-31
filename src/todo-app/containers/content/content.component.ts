import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import {
  GetTodosAction,
  CreateTodoAction,
  DeleteTodoAction,
  ChangeTodoAction,
  DeleteCompletedTodosAction,
  IStoreBase
} from 'todo-lib/store'
import { ITodo } from 'todo-lib/dal'

@Component({
  selector: 'todo-content-container',
  templateUrl: 'content.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoContentContainerComponent implements OnInit {

  // Stream ze stora
  public readonly todos$: Observable<ITodo[]> = this.store$
    .select(state => state.todos)
    .filter(Boolean)

  // Stream ze stora będzie w locie mapowany na hasCompletedTodos
  public readonly hasCompletedTodos$: Observable<boolean> = this.todos$
    .map((todos: ITodo[]) => todos
      .some(todo => todo.completed))

  // Stream ze stora będzie w locie mapowany na notCompletedTodosCount
  public readonly notCompletedTodosCount$: Observable<number> = this.todos$
    .map(todos => todos
      .filter((todo: ITodo) => !todo.completed))
    .map(notCompletedTodos => notCompletedTodos.length)

  constructor(private store$: Store<IStoreBase>) {}

  public ngOnInit(): void {
    this.store$.dispatch(new GetTodosAction())
  }

  public createTodo(name: string): void {
    this.store$.dispatch(new CreateTodoAction({ name, completed: false }))
  }

  public deleteTodo(id: number): void {
    this.store$.dispatch(new DeleteTodoAction(id))
  }

  public changeTodo(id: number): void {
    this.store$.dispatch(new ChangeTodoAction(id))
  }

  public deleteCompletedTodos(): void {
    this.store$.dispatch(new DeleteCompletedTodosAction())
  }
}
