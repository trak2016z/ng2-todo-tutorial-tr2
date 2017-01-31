import { Injectable } from '@angular/core'
import { ITodo } from './dto'
import { Http } from '@angular/http'
import { Observable } from 'rxjs'

@Injectable()
export class Dao {

  private readonly url: string = 'https://todoapp-c15c0.firebaseio.com/todos.json'

  constructor(private http: Http) {}

  public getTodoList(): Observable<ITodo[]> {
    return this.http.get(this.url)
      .map(response => response.json() as ITodo[])
  }

  public updateTodoList(todos: ITodo[]): Observable<ITodo[]> {
    return this.http.put(this.url, JSON.stringify(todos))
      .map(response => response.json() as ITodo[])
  }
}
