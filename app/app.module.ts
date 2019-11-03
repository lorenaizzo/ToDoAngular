import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoContentComponent } from './todo-content/todo-content.component';
import { AddTodoComponent } from './todo-content/add-todo/add-todo.component';
import { ListContentComponent } from './todo-content/list-content/list-content.component';
import { FilterComponent } from './todo-content/list-content/filter/filter.component';
import { ItemListComponent } from './todo-content/list-content/item-list/item-list.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoContentComponent,
    AddTodoComponent,
    ListContentComponent,
    FilterComponent,
    ItemListComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
