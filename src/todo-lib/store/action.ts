import { Action as NgRxAction } from '@ngrx/store'

export class Action implements NgRxAction {
  public type = this.constructor.name

  constructor(public payload?: any) {}
}

