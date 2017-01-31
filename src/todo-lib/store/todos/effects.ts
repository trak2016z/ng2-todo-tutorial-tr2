import { Injectable } from '@angular/core'
import { Actions, Effect } from '@ngrx/effects'
import { Action, Store } from '@ngrx/store'
import { Observable } from 'rxjs'

import { Dao } from '../../dal/dao'
import {
  GetTodosAction, GetTodosActionSuccess, CreateTodoAction, UpdateTodosAction,
  UpdateTodosActionSuccess
} from './actions'
import { IStoreBase } from '../store'

@Injectable()
export class TodosEffects {

  constructor(
    private actions$: Actions,
    private dao: Dao,
    private store$: Store<IStoreBase>
  ) {}

  @Effect()
  public getTodos$: Observable<Action> = this.actions$
    .ofType(GetTodosAction.name)
    .switchMap(action => this.dao.getTodoList()
      .map(todos => new GetTodosActionSuccess(todos).asResultOf(action)))

  @Effect({ dispatch: false })
  public updateTodo$: Observable<Action> = this.store$
    .select(store => store.todos)
    .switchMap(todos => this.dao.updateTodoList(todos)
      .map(() => new UpdateTodosActionSuccess()))

}
