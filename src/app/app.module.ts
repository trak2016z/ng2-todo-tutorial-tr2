import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TodoInputComponent } from './components/todo-input/todo-input.component';
import { TodoListItemComponent } from './components/todo-list-item/todo-list-item.component';
import { TodoSummaryComponent } from './components/todo-summary/todo-summary.component';
import { TodoAppContainerComponent } from './containers/todo-app-container/todo-app-container.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoInputComponent,
    TodoListItemComponent,
    TodoSummaryComponent,
    TodoAppContainerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
