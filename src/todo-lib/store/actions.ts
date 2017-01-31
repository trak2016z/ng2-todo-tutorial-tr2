import { Action } from './action'

export class EffectStart extends Action {}

export class EffectSuccess extends Action {

  public actionWhichStartedEffect: EffectStart

  public asResultOf(actionWhichStartedEffect: EffectStart) {
    this.actionWhichStartedEffect = actionWhichStartedEffect
    return this
  }
}
