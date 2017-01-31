import { Component } from '@angular/core';

interface ITodo {
  completed: boolean
  name: string
}

@Component({
  selector: 'todo-app-container',
  templateUrl: './todo-app-container.component.html',
  styleUrls: ['./todo-app-container.component.css']
})
export class TodoAppContainerComponent {

  public todos: ITodo[] = [
    { completed: false, name: 'Finish project' },
    { completed: false, name: 'Go to the gym' },
    { completed: false, name: 'Call mom' }
  ]

  public get completedTodosCount(): number {
    return this.todos
      .filter(todo => !todo.completed)
      .length
  }

  public get hasCompletedTodos(): boolean {
    return this.todos
      .some(todo => todo.completed)
  }

  public destroyTodo(todoIndex: number) {
    this.todos = this.todos
      .filter((todo, index) => index !== todoIndex)
  }

  public changeTodo(todoIndex: number) {
    this.todos = this.todos
      .map((todo, index) => index !== todoIndex ? todo : Object.assign({}, todo, {
        completed: !todo.completed
      }))
  }

  public destroyCompletedTodos() {
    this.todos = this.todos
      .filter(todo => !todo.completed)
  }

  public addNewTodo(todoName: string) {
    this.todos = [...this.todos, { completed: false, name: todoName }] as ITodo[]
  }

}
