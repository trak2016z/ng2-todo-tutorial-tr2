import { Component, OnInit } from '@angular/core';

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


  /* Te dane mogą pochodzić z API */
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

}
