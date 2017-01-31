import { NgModule } from '@angular/core'
import { StoreModule } from '@ngrx/store'
import { reducer } from './reducer'
import { initialStore } from './initial'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { EffectsModule } from '@ngrx/effects'
import { TodosEffects } from './todos/effects'

@NgModule({
  imports: [
    StoreModule.provideStore(reducer, initialStore),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
    EffectsModule.run(TodosEffects)
  ]
})
export class TodoStoreModule {}
