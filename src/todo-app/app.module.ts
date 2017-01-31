import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'

import { TodoDataAccessModule } from 'todo-lib/dal'
import { TodoStoreModule } from 'todo-lib/store'

import { TodoListItemComponent, TodoSummaryComponent, TodoInputComponent } from './components'
import { TodoContentContainerComponent } from './containers'

import { AppComponent } from './app.component'

@NgModule({
  declarations: [
    AppComponent,
    TodoInputComponent,
    TodoListItemComponent,
    TodoSummaryComponent,
    TodoContentContainerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    TodoStoreModule,
    TodoDataAccessModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
