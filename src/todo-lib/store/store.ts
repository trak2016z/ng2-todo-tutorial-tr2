import { ITodo } from '../dal/dto'
import {EffectStart} from "./actions";

export interface IStoreBase {
  todos: ITodo[]
}
