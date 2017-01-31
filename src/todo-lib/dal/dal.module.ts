import { NgModule } from '@angular/core'
import { Dao } from './dao'

@NgModule({
  providers: [
    Dao,
  ],
})
export class TodoDataAccessModule {}
